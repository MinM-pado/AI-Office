# Security and Data Integrity Baseline

## Demo-only boundary

The current UI is a demo. It must not claim live market data, connected brokerage accounts, or successful order submission unless those capabilities are implemented and independently verified.

## Credential handling

- Keep OAuth client secrets, access tokens, refresh tokens, account identifiers, and personal investment data out of browser bundles and Git history.
- Store credentials only in server-side secret management and use least-privilege scopes.

## Future order capability

Before enabling an order endpoint, require authenticated user intent, explicit confirmation, server-side validation, risk limits, idempotency protection, audit logs, incident monitoring, and compliance review. Do not enable it from static client-side code.

## Data provenance

Every production datum must expose its source, collection time, market timestamp, and error/staleness state. Model outputs must be labeled as analysis, not personalized investment advice.
