// ==========================================================================
// MinM Jam Briefing — Toss Securities Open API Interactive Controller
// ==========================================================================

// Data map for MinM 8 Fixed Themes
const themeDataMap = {
    semicon: {
        name: "半도체 · AI",
        sub: "수급/기술/실적 모멘텀",
        supplyVal: "외국인/기관 순매수",
        supplySub: "SK하이닉스·삼성전자",
        headerTitle: "MinM 인사이트: 반도체·AI 리포트",
        marketRow: "나스닥 +1.2% 상승 마감 · 엔비디아/AI 반도체 랠리 지속",
        koreaRow: "코스피 2,611 / 코스닥 764 · 외국인 순매수세 재개",
        themeRow: "AI 반도체 & 온디바이스 AI · 외국인 수급 및 실적 가시성 확보",
        insights: [
            "<strong>환율 하락 & 금리 안점:</strong> 원/달러 환율이 1,335원대로 안정되며 외국인 매수세 유입 여건 마련.",
            "<strong>AI 반도체 체결량 급증:</strong> 토스증권 체결 데이터 기준 SK하이닉스 및 한미반도체에 대량 거래대금 집중.",
            "<strong>Next Step 액션:</strong> 추격 매수는 지양하고, 20일선 눌림목 형성 시 분할 매수 관점 접근 권장."
        ],
        stocks: [
            { name: "삼성전자", qty: "300주", avgPrice: "71,000원", evalPrice: "22,440,000원", pnl: "+5.35% (+1,140,000원)" },
            { name: "SK하이닉스", qty: "100주", avgPrice: "165,000원", evalPrice: "18,850,000원", pnl: "+14.24% (+2,350,000원)" },
            { name: "한미반도체", qty: "50주", avgPrice: "135,000원", evalPrice: "7,100,000원", pnl: "+5.18% (+350,000원)" }
        ]
    },
    battery: {
        name: "2차전지",
        sub: "리튬 가격 보합 및 밸류체인",
        supplyVal: "기관 순매수 / 외인 관망",
        supplySub: "LG엔솔 중심",
        headerTitle: "MinM 인사이트: 2차전지 리포트",
        marketRow: "테슬라 +0.8% 강보합 · 탄산리튬 선물 가격 박스권 형성",
        koreaRow: "코스피 2차전지 대형주 중심 차별화 장세 진행",
        themeRow: "미국 정책 모멘텀 주시 · 4680 배터리 양산 스케줄 반영",
        insights: [
            "<strong>탄산리튬 가격 보합세:</strong> 원자재 가격 안정화로 셀 업체 마진 개선 기대감 형성.",
            "<strong>양극재 기술 차별화:</strong> 고망간/LFP 배터리 침투율 확대 및 미국 FEOC 규제 수혜.",
            "<strong>Next Step 액션:</strong> 단기 급등보다는 중장기 실적 개선 확인 후 박스권 하단 매수 접근."
        ],
        stocks: [
            { name: "LG에너지솔루션", qty: "30주", avgPrice: "375,000원", evalPrice: "11,550,000원", pnl: "+2.67% (+300,000원)" },
            { name: "POSCO홀딩스", qty: "20주", avgPrice: "380,000원", evalPrice: "7,500,000원", pnl: "-1.32% (-100,000원)" },
            { name: "에코프로비엠", qty: "40주", avgPrice: "185,000원", evalPrice: "7,600,000원", pnl: "+2.70% (+200,000원)" }
        ]
    },
    ship: {
        name: "조선 / 해운",
        sub: "신조선가 지수 신고가",
        supplyVal: "외국인 연속 순매수",
        supplySub: "3년치 수주잔고",
        headerTitle: "MinM 인사이트: 조선 / 해운 리포트",
        marketRow: "BDI 해운 운임 지수 +2.3% 상승 · 카타르 LNG 2차 프로젝트",
        koreaRow: "조선 3사 흑자 전환 모멘텀 본격화 및 고가 수주 물량 건조",
        themeRow: "친환경 암모니아/MGO 선박 교체 수요 및 신조선가 지속 상승",
        insights: [
            "<strong>신조선가 지수 최고치:</strong> 188pt 돌파로 조선사 선가 협상력 극대화.",
            "<strong>카타르 2차 LNG 수주:</strong> 국내 조선 3사 슬롯 확보에 따른 실적 턴어라운드 확정.",
            "<strong>Next Step 액션:</strong> 조선 기자재 및 엔진 관련주로 온기 확산 가능성 주시."
        ],
        stocks: [
            { name: "HD한국조선해양", qty: "80주", avgPrice: "148,000원", evalPrice: "12,360,000원", pnl: "+4.39% (+520,000원)" },
            { name: "한화오션", qty: "100주", avgPrice: "31,000원", evalPrice: "3,350,000원", pnl: "+8.06% (+250,000원)" }
        ]
    },
    nuclear: {
        name: "원전 · 에너지",
        sub: "체코 원전 모멘텀",
        supplyVal: "기관 강력 순매수",
        supplySub: "팀코리아 원단위 수주",
        headerTitle: "MinM 인사이트: 원전 · 에너지 리포트",
        marketRow: "미국 SMR(소형모듈원전) 기업 상승세 · WTI 유가 $74.2 안정",
        koreaRow: "체코 24조 원전 우선협상대상자 선정 후 본계약 체결 가시화",
        themeRow: "유럽/중동 원전 수출 파이프라인 확장 및 AI 데이터센터 전력망",
        insights: [
            "<strong>AI 데이터센터 전력 수요:</strong> Big Tech 기업의 원전 및 SMR 전력 수급 계약 잇따라 체결.",
            "<strong>팀코리아 해외 수주:</strong> 체코에 이어 폴란드/UAE 원전 추가 수주 가능성 대두.",
            "<strong>Next Step 액션:</strong> 원전 주기기 및 B2B 전력 설비(변압기) 관련주 눌림목 공략."
        ],
        stocks: [
            { name: "두산에너빌리티", qty: "200주", avgPrice: "19,500원", evalPrice: "4,080,000원", pnl: "+4.62% (+180,000원)" },
            { name: "우리기술", qty: "500주", avgPrice: "2,100원", evalPrice: "1,150,000원", pnl: "+9.52% (+100,000원)" }
        ]
    },
    construction: {
        name: "건설 · 정책",
        sub: "금리 인하 & 정책 수혜",
        supplyVal: "수급 혼조세",
        supplySub: "기관 매도 vs 개인 매수",
        headerTitle: "MinM 인사이트: 건설 · 정책 리포트",
        marketRow: "US 주택건설지수 +0.4% · 기준금리 인하 기조 형성",
        koreaRow: "부동산 PF 리스크 완화 정책 및 수도권 공급 확대 방안",
        themeRow: "금리 인하 시 건설사 금융비용 절감 및 미분양 해소 기대감",
        insights: [
            "<strong>금리 인하 수혜:</strong> 한국은행 및 연준 금리 인하 시 건설주 센티먼트 개선.",
            "<strong>해외 플랜트 수주:</strong> 사우디 네옴시티 및 중동 플랜트 프로젝트 재개.",
            "<strong>Next Step 액션:</strong> 재무건전성 우수한 대형 건설사 중심 단기 기술적 반등 활용."
        ],
        stocks: [
            { name: "GS건설", qty: "100주", avgPrice: "18,200원", evalPrice: "1,750,000원", pnl: "-3.85% (-70,000원)" },
            { name: "현대건설", qty: "50주", avgPrice: "31,000원", evalPrice: "1,520,000원", pnl: "-1.94% (-30,000원)" }
        ]
    },
    bio: {
        name: "바이오 / 제약",
        sub: "미국 생물보안법 수혜",
        supplyVal: "외국인 연속 순매수",
        supplySub: "CDMO & 기술이전",
        headerTitle: "MinM 인사이트: 바이오 / 제약 리포트",
        marketRow: "NBI 미국 바이오 지수 +1.5% · 헬스케어 M&A 활성화",
        koreaRow: "미국 생물보안법(Biosecure Act) 하원 통과로 국내 CDMO 반사이익",
        themeRow: "ADC(항체약물접합체) 및 비만치료제(GLP-1) 플랫폼 가치 재평가",
        insights: [
            "<strong>생물보안법 수혜 확정:</strong> 중국 우시바이오 대안으로 삼성바이오로직스 수주 문의 급증.",
            "<strong>기술 수출 모멘텀:</strong> 글로벌 빅파마 대상 플랫폼 기술이전 계약 가시화.",
            "<strong>Next Step 액션:</strong> 임상 3상 보유 기업 및 실적 기반 CDMO 종목에 집중."
        ],
        stocks: [
            { name: "삼성바이오로직스", qty: "10주", avgPrice: "920,000원", evalPrice: "9,820,000원", pnl: "+6.74% (+620,000원)" },
            { name: "알테오젠", qty: "20주", avgPrice: "180,000원", evalPrice: "3,920,000원", pnl: "+8.89% (+320,000원)" }
        ]
    },
    it: {
        name: "IT · 콘텐츠",
        sub: "소버린 AI & B2B SaaS",
        supplyVal: "기관 순매수",
        supplySub: "NAVER 중심",
        headerTitle: "MinM 인사이트: IT · 콘텐츠 리포트",
        marketRow: "메타 +2.1%, 구글 +1.4% · 생성형 AI 서비스 수익화 본격화",
        koreaRow: "NAVER 하이퍼클로바X B2B 매출 가시화 및 게임 신작 모멘텀",
        themeRow: "정부 소버린 AI 프로젝트 추진 및 숏폼/웹툰 글로벌 매출 성장",
        insights: [
            "<strong>B2B AI 매출 성장:</strong> 사우디 디지털 트윈 및 핀테크/금융권 AI 구축 사업 체결.",
            "<strong>플랫폼 밸류에이션:</strong> 밸류업 프로그램 수혜로 자사주 소각 및 주주환원 확대.",
            "<strong>Next Step 액션:</strong> IT 플랫폼 하단 지지선 확인 후 바닥권 매수 전략."
        ],
        stocks: [
            { name: "NAVER", qty: "40주", avgPrice: "168,000원", evalPrice: "6,968,000원", pnl: "+3.69% (+248,000원)" },
            { name: "카카오", qty: "80주", avgPrice: "42,000원", evalPrice: "3,296,000원", pnl: "-1.90% (-64,000원)" }
        ]
    },
    beauty: {
        name: "화장품 / 소비재",
        sub: "K-뷰티 글로벌 수출 신기록",
        supplyVal: "외인/기관 동반 순매수",
        supplySub: "실리콘투 · 코스맥스",
        headerTitle: "MinM 인사이트: 화장품 / 소비재 리포트",
        marketRow: "북미/유럽 아마존 화장품 카테고리 K-뷰티 브랜드 랭킹 1위 다수",
        koreaRow: "월간 화장품 수출액 역대 최고치 경신 · 중소형 브랜드 글로벌 인디 붐",
        themeRow: "중국 의존도탈피 및 미국/일본/인도네시아 다변화 성공",
        insights: [
            "<strong>미국/유럽 시장 대격변:</strong> 인디 브랜드의 유통 플랫폼(실리콘투)을 통한 폭발적 영업이익 성장.",
            "<strong>OEM/ODM 가동률 100%:</strong> 코스맥스, 한국콜마 주문 폭주로 공장 증설 진행.",
            "<strong>Next Step 액션:</strong> 글로벌 유통망 보유 기업 중심 상승 추세 지속 활용."
        ],
        stocks: [
            { name: "실리콘투", qty: "150주", avgPrice: "39,000원", evalPrice: "6,675,000원", pnl: "+14.10% (+825,000원)" },
            { name: "코스맥스", qty: "30주", avgPrice: "135,000원", evalPrice: "4,260,000원", pnl: "+5.19% (+210,000원)" }
        ]
    }
};

// 3 Daily Briefing Modes (장전 / 장중 / 장마감)
const briefingModeMap = {
    pre: {
        title: "MinM Jam Daily Briefing (🌅 장전 리포트)",
        desc: "08:30 AM 개장 전 뉴욕증시, 환율/금리, 금일 8대 고정 테마 전망 브리핑",
        badge: "08:30 AM Live"
    },
    mid: {
        title: "MinM Jam Daily Briefing (☀️ 장중 수급 리포트)",
        desc: "12:00 PM 장중 수급 동향, 토스증권 체결량 급증 종목 및 장중 피크 체크",
        badge: "12:00 PM Live"
    },
    post: {
        title: "MinM Jam Daily Briefing (🌇 장마감 팩트검증 리포트)",
        desc: "03:30 PM 지수 마감 결과 + 장전 예측 전망 vs 실제 결과 팩트검증 완료",
        badge: "03:30 PM Final"
    }
};

// Mock Toss Open API Ranking Data
const tossRankingsData = [
    { rank: 1, name: "SK하이닉스", code: "000660", price: "188,500원", change: "+3.42%", volume: "4,820억 원", theme: "半도체 · AI", signal: "외인/기관 대량 순매수", signalType: "buy" },
    { rank: 2, name: "삼성전자", code: "005930", price: "74,800원", change: "+1.91%", volume: "8,920억 원", theme: "半도체 · AI", signal: "수급 전환 (매수)", signalType: "buy" },
    { rank: 3, name: "한미반도체", code: "042700", price: "142,000원", change: "+5.18%", volume: "3,410억 원", theme: "半도체 · AI", signal: "관망 (눌림목 유효)", signalType: "hold" },
    { rank: 4, name: "LG에너지솔루션", code: "373220", price: "385,000원", change: "+0.92%", volume: "1,250억 원", theme: "2차전지", signal: "보합세 (Hold)", signalType: "hold" },
    { rank: 5, name: "HD한국조선해양", code: "009540", price: "154,500원", change: "+2.15%", volume: "980억 원", theme: "조선", signal: "신조선가 상승 모멘텀", signalType: "buy" },
    { rank: 6, name: "두산에너빌리티", code: "034020", price: "20,400원", change: "+1.45%", volume: "850억 원", theme: "원전 · 에너지", signal: "체코 원전 모멘텀", signalType: "buy" },
    { rank: 7, name: "삼성바이오로직스", code: "207940", price: "982,000원", change: "+0.61%", volume: "720억 원", theme: "바이오", signal: "관망 (Hold)", signalType: "hold" },
    { rank: 8, name: "실리콘투", code: "257720", price: "44,500원", change: "+4.22%", volume: "650억 원", theme: "화장품 / 소비재", signal: "K-뷰티 수출 호조", signalType: "buy" }
];

let currentThemeKey = 'semicon';
let currentBriefingKey = 'pre';


document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initThemeChips();
    renderTossRankings(tossRankingsData);
    initOrderSandbox();
    initSyncButton();
});

function initNavigation() {
    const buttons = document.querySelectorAll('.nav-btn');
    const panels = document.querySelectorAll('.tab-panel');
    buttons.forEach((button) => button.addEventListener('click', () => {
        const panel = document.getElementById(button.dataset.tab);
        if (!panel) return;
        buttons.forEach((item) => item.classList.remove('active'));
        panels.forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
        panel.classList.add('active');
    }));
}

function initThemeChips() {
    const chips = document.querySelectorAll('#themeChipsGroup .t-chip');
    chips.forEach((chip) => chip.addEventListener('click', () => {
        const data = themeDataMap[chip.dataset.theme];
        if (!data) return;
        chips.forEach((item) => item.classList.remove('active'));
        chip.classList.add('active');
        renderInsights(data.insights);
        renderHoldings(data.stocks);
    }));
    renderInsights(themeDataMap.semicon.insights);
    renderHoldings(themeDataMap.semicon.stocks);
}

function renderInsights(insights) {
    const list = document.getElementById('insightList');
    if (!list) return;
    list.replaceChildren(...insights.map((insight) => {
        const item = document.createElement('li');
        item.textContent = insight.replace(/<[^>]+>/g, '');
        return item;
    }));
}

function renderHoldings(stocks) {
    const container = document.getElementById('holdingsList');
    if (!container) return;
    container.replaceChildren(...stocks.map((stock) => {
        const item = document.createElement('div');
        item.className = 'holding-item';
        item.textContent = `${stock.name} · 예시 수량 ${stock.qty} · 예시 평가금액 ${stock.evalPrice} · ${stock.pnl}`;
        return item;
    }));
}

function renderTossRankings(data) {
    const body = document.querySelector('#tossRankingTable tbody');
    if (!body) return;
    body.replaceChildren(...data.map((row) => {
        const tr = document.createElement('tr');
        [row.rank, `${row.name} (${row.code})`, row.price, row.change, row.volume, row.theme, row.signal].forEach((value) => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        return tr;
    }));
}

function initOrderSandbox() {
    const button = document.getElementById('btnExecuteOrder');
    if (!button) return;
    button.addEventListener('click', () => {
        logTerminal('[DEMO] 주문 시뮬레이션을 실행했습니다. 실제 주문은 전송되지 않았습니다.', 'sys');
        logTerminal('[SAFETY] 실제 주문은 서버 측 OAuth·명시적 확인·위험 한도·감사 로그 구현 이후에만 검토해야 합니다.', 'success');
        alert('데모 모드입니다. 실제 주문은 전송되지 않았습니다.');
    });
}

function logTerminal(message, type = 'sys') {
    const log = document.getElementById('terminalLog');
    if (!log) return;
    const line = document.createElement('p');
    line.className = type;
    line.textContent = message;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
}

function initSyncButton() {
    const button = document.getElementById('btnSyncToss');
    if (!button) return;
    button.addEventListener('click', () => alert('데모 데이터를 다시 표시했습니다. 외부 API 호출은 수행하지 않았습니다.'));
}
