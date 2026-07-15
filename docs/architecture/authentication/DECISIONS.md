# Authentication Architecture Decisions

---

# Purpose

This document records architectural decisions made during the implementation of the Authentication module.

---

# ADR-AUTH-001

## Decision

JWT (JSON Web Token) is used for authentication.

### Reason

- Stateless authentication
- Easy API integration
- Scalable for distributed systems
- Industry standard

---

# ADR-AUTH-002

## Decision

BCrypt is used for password hashing.

### Reason

- One-way hashing
- Salted passwords
- Resistant to rainbow table attacks
- Industry best practice

---

# ADR-AUTH-003

## Decision

SQLite is used during initial development.

### Reason

- Lightweight
- Zero configuration
- Easy local setup
- Suitable for rapid development

### Future Plan

Replace SQLite with PostgreSQL during production deployment.

---

# ADR-AUTH-004

## Decision

Authentication follows layered architecture.

```
Controller

↓

Service

↓

Repository

↓

Database
```

### Reason

- Separation of responsibilities
- Easier testing
- Better maintainability

---

# ADR-AUTH-005

## Decision

Authentication uses middleware for JWT validation.

### Reason

- Code reuse
- Consistent authorization
- Reduced duplication

---

# Future Decisions

Future ADRs will cover:

- Refresh Tokens
- MFA
- RBAC
- Session Management
- Audit Logging