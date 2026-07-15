# Accounts Module

## Module

Accounts

---

# Overview

The Accounts module is responsible for managing customer bank accounts within the FinGuard platform.

Version 1 introduces the ability for authenticated customers to create bank accounts with system-generated account numbers and predefined default values.

---

# Current Status

Version

1.0

Status

✅ Active Development

---

# Implemented Features

| Feature ID | Feature | Status |
|------------|---------|--------|
| FG-ACC-001 | Create Account | ✅ Completed |

---

# Available APIs

## Create Account

```http
POST /api/accounts
```

Authentication

Required

```
Authorization: Bearer <JWT>
```

---

# Business Rules

- Only authenticated users may create accounts.
- Only ACTIVE users may create accounts.
- A customer may own multiple accounts.
- Account numbers are generated automatically.
- Initial balance is 0.00.
- Default currency is INR.
- Default account status is ACTIVE.
- Supported account types:
  - SAVINGS
  - CURRENT

---

# Database

## Tables

- users
- accounts

Relationship

```
users (1)
      │
      ▼
accounts (N)
```

---

# Architecture

```
Route
    │
    ▼
Controller
    │
    ▼
Service
    │
    ▼
Repository
    │
    ▼
SQLite Database
```

---

# Documentation

## Requirements

- FG-ACC-001 - Create Account

## API

- FG-ACC-001 - Create Account API

## Architecture

- Accounts Data Model
- Accounts Sequence Diagram

## Testing

- FG-ACC-001 Test Scenarios
- Accounts Traceability Matrix

---

# Test Status

| Area | Status |
|------|--------|
| Backend | ✅ |
| Database | ✅ |
| Manual API Testing | ✅ |
| Documentation | ✅ |

---

# Future Features

| Feature ID | Feature | Status |
|------------|---------|--------|
| FG-ACC-002 | Get My Accounts | Planned |
| FG-ACC-003 | Get Account Details | Planned |
| FG-ACC-004 | Freeze Account | Planned |
| FG-ACC-005 | Close Account | Planned |
| FG-ACC-006 | Reopen Account | Planned |
| FG-ACC-007 | Update Account | Planned |

---

# Module Dependencies

- Authentication Module
- JWT Authentication
- SQLite Database

---

# Version History

| Version | Description |
|---------|-------------|
| 1.0 | Initial implementation of Create Account |

---

# Module Owner

FinGuard Engineering

---

# Status

✅ Ready for Sprint Completion