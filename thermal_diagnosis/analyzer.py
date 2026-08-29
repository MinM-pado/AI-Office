"""
analyzer.py - 수배전설비 열화상 이미지 분석 엔진

열화상 이미지를 OpenCV로 분석하여 고온 영역을 탐지하고 위험도를 판정합니다.
OpenCV가 설치되어 있으면 실제 이미지 분석을, 아닌 경우 시뮬레이션 분석을 수행합니다.
"""

import os
from pathlib import Path
import pandas as pd
import numpy as np

# OpenCV 가용 여부 확인
try:
    import cv2
    HAS_CV2 = True
except ImportError:
    HAS_CV2 = False
    print("⚠️ OpenCV(cv2) 미설치: 시뮬레이션 모드로 분석합니다.")


def _analyze_image_cv2(file_path: Path, brightness_threshold: float) -> dict:
    """OpenCV로 실제 열화상 이미지를 분석합니다."""
    img = cv2.imread(str(file_path))
    if img is None:
        return None

    # 그레이스케일 변환
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    h, w = gray.shape

    mean_brightness = float(np.mean(gray))
    max_brightness = float(np.max(gray))

    # 고온 영역 비율 계산 (임계값 이상인 픽셀 비율)
    hot_mask = gray >= brightness_threshold
    hot_pixel_ratio = float(np.sum(hot_mask)) / (h * w)

    return {
        "mean_brightness": mean_brightness,
        "max_brightness": max_brightness,
        "hot_pixel_ratio": hot_pixel_ratio,
        "width": w,
        "height": h,
    }


def _analyze_image_simulation(file_path: Path) -> dict:
    """OpenCV 없이 시뮬레이션 분석 결과를 생성합니다."""
    import random
    import hashlib

    # 파일명 기반 시드로 재현 가능한 결과 생성
    seed = int(hashlib.md5(file_path.name.encode()).hexdigest()[:8], 16)
    rng = random.Random(seed)

    mean_brightness = rng.randint(80, 220)
    max_brightness = rng.randint(max(mean_brightness, 150), 255)
    hot_pixel_ratio = rng.uniform(0.01, 0.2)

    return {
        "mean_brightness": float(mean_brightness),
        "max_brightness": float(max_brightness),
        "hot_pixel_ratio": hot_pixel_ratio,
        "width": 640,
        "height": 480,
    }


def _determine_status(max_brightness: float, hot_pixel_ratio: float) -> str:
    """분석 결과를 기반으로 진단 상태를 결정합니다."""
    if max_brightness > 230 and hot_pixel_ratio > 0.1:
        return "위험"
    elif max_brightness > 200 or hot_pixel_ratio > 0.08:
        return "주의"
    return "정상"


def _get_recommendation(status: str) -> str:
    """상태에 따른 권장 조치를 반환합니다."""
    if status == "위험":
        return "🚨 즉시 전원 차단 및 전문가 점검 필수. 과열 징후가 명확합니다."
    elif status == "주의":
        return "⚠️ 주기적인 모니터링 필요. 부하를 줄이고 점검 주기를 단축하십시오."
    return "✅ 정상 범위 내로 판단됩니다. 다음 점검 때까지 정상 작동 예상."


def _calc_risk_score(max_brightness: float, hot_pixel_ratio: float) -> float:
    """위험도 점수를 계산합니다 (0~100)."""
    return min(100.0, (max_brightness / 2.5) + (hot_pixel_ratio * 50))


# =====================================================================
# 공개 API
# =====================================================================


SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".bmp", ".tif", ".tiff"}


def analyze_folder(
    input_dir,
    brightness_threshold: float = 180,
    hot_pixel_ratio_threshold: float = 0.05,
    min_image_size: int = 128,
) -> pd.DataFrame:
    """
    폴더 내의 모든 이미지 파일을 순회하며 열화상 진단 분석을 수행합니다.

    Args:
        input_dir: 업로드된 이미지가 들어있는 디렉토리 경로.
        brightness_threshold: 과열 판단 기준 밝기 임계값.
        hot_pixel_ratio_threshold: 고온 영역 비율 임계값.
        min_image_size: 최소 이미지 크기(픽셀).

    Returns:
        분석 결과가 담긴 pandas DataFrame.
    """
    input_dir = Path(input_dir)
    print(f"--- 분석 시작: {input_dir} ---")

    results = []

    for file_path in sorted(input_dir.iterdir()):
        if file_path.suffix.lower() not in SUPPORTED_EXTENSIONS:
            continue

        # 이미지 분석
        if HAS_CV2:
            metrics = _analyze_image_cv2(file_path, brightness_threshold)
            if metrics is None:
                print(f"  ⚠️ 이미지 읽기 실패 (건너뜀): {file_path.name}")
                continue
            # 최소 크기 필터
            if metrics["width"] < min_image_size or metrics["height"] < min_image_size:
                print(f"  ⚠️ 최소 크기 미달 (건너뜀): {file_path.name}")
                continue
        else:
            metrics = _analyze_image_simulation(file_path)

        status = _determine_status(metrics["max_brightness"], metrics["hot_pixel_ratio"])
        risk_score = _calc_risk_score(metrics["max_brightness"], metrics["hot_pixel_ratio"])
        recommendation = _get_recommendation(status)

        results.append({
            "file_name": file_path.name,
            "status": status,
            "mean_brightness": metrics["mean_brightness"],
            "max_brightness": metrics["max_brightness"],
            "hot_pixel_ratio": metrics["hot_pixel_ratio"],
            "risk_score": round(risk_score, 2),
            "recommendation": recommendation,
            "file_path": str(file_path),
        })

    print(f"--- 분석 완료: {len(results)}개 파일 처리됨 ---")
    return pd.DataFrame(results)


def save_report_excel(result_df: pd.DataFrame, excel_path) -> None:
    """
    분석 결과를 엑셀 보고서 파일로 저장합니다.
    """
    excel_path = Path(excel_path)
    print(f"--- 보고서 저장 시작: {excel_path} ---")
    try:
        report_df = result_df[[
            "file_name", "status", "mean_brightness", "max_brightness",
            "hot_pixel_ratio", "risk_score", "recommendation",
        ]].copy()
        report_df["고온 영역 비율 (%)"] = report_df["hot_pixel_ratio"] * 100
        report_df = report_df.drop(columns=["hot_pixel_ratio"])

        # 컬럼명 한글화
        report_df.columns = [
            "파일명", "진단 상태", "평균 밝기", "최대 밝기",
            "위험도 점수", "권장 조치", "고온 영역 비율 (%)",
        ]

        report_df.to_excel(excel_path, index=False, engine="openpyxl")
        print(f"✅ 엑셀 보고서 저장 완료: {excel_path}")
    except Exception as e:
        print(f"❌ 보고서 저장 실패: {e}")
        raise
