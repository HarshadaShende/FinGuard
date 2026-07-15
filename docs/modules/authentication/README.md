# Authentication Module

## Module

Authentication

---

# Overview

The Authentication module is responsible for securely authenticating users of the FinGuard Digital Banking Platform.

Version 1 introduces JWT-based authentication, allowing registered users to log in, access protected resources, retrieve their profile information, and securely log out.

The module serves as the security foundation for all other FinGuard modules.

---

# Current Status

Version

1.0

Status

✅ Completed

---

# Implemented Features

| Feature ID | Feature | Status |
|------------|---------|--------|
| FG-AUTH-001 | Customer Login | ✅ Completed |
| FG-AUTH-002 | Get Profile | ✅ Completed |
| FG-AUTH-003 | Refresh Token | ✅ Completed |
| FG-AUTH-004 | Logout | ✅ Completed |

---

# Available APIs

## Customer Login

```http
POST /api/auth/login
```

Authentication

Not Required

---

## Get Profile

```http
GET /api/auth/profile
```

Authentication

Required

```
Authorization: Bearer <JWT>
```

---

## Refresh Token

```http
POST /api/auth/refresh
```

Authentication

Required

```
Authorization: Bearer <JWT>
```

---

## Logout

```http
POST /api/auth/logout
```

Authentication

Required

```
Authorization: Bearer <JWT>
```

---

# Business Rules

- Users authenticate using their registered email address and password.
- Passwords are stored using BCrypt hashing.
- Only ACTIVE users may successfully authenticate.
- JWT access tokens are generated upon successful login.
- Protected APIs require a valid JWT Bearer token.
- User profile information is retrieved from the authenticated JWT context.
- Logout requires a valid authenticated session.
- Password hashes are never exposed through any API response.

---

# Database

## Tables

- users

Relationship

```
User
 │
 └── Authentication
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

- FG-AUTH-001 - Customer Login

## API

- FG-AUTH-001 Authentication API

## Architecture

- Authentication Data Model
- Authentication Sequence Diagram
- Authentication Decisions

## Testing

- FG-AUTH-001 Test Scenarios
- Authentication Traceability Matrix

---

# Test Status

| Area | Status |
|------|--------|
| Backend | ✅ |
| Database | ✅ |
| JWT Authentication | ✅ |
| Manual API Testing | ✅ |
| Documentation | ✅ |

---

# Future Features

| Feature ID | Feature | Status |
|------------|---------|--------|
| FG-AUTH-005 | Forgot Password | Planned |
| FG-AUTH-006 | Reset Password | Planned |
| FG-AUTH-007 | Multi-Factor Authentication (MFA) | Planned |
| FG-AUTH-008 | Account Lock | Planned |
| FG-AUTH-009 | Login Audit Trail | Planned |
| FG-AUTH-010 | Device Management | Planned |

---

# Module Dependencies

- SQLite Database
- JWT Authentication
- BCrypt
- Express.js

---

# Version History

| Version | Description |
|---------|-------------|
| 1.0 | Initial Authentication Module including Login, Profile, Refresh Token and Logout APIs |

---

# Module Owner

FinGuard Engineering

---

# Status

✅ Ready for Sprint Completion