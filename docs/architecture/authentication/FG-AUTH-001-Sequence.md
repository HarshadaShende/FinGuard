# FG-AUTH-001 - Authentication Sequence Flow

## Login Flow

```
User

    │
    │ POST /auth/login
    ▼

Authentication API

    │
    │ Validate Request
    ▼

Validation Service

    │
    │ Valid
    ▼

User Repository

    │
    │ Find User
    ▼

Password Service

    │
    │ Verify Password
    ▼

JWT Service

    │
    │ Generate Token
    ▼

Response

    │
    ▼

User Logged In
```

---

## Logout Flow

```
User

    │
    │ POST /auth/logout
    ▼

Authentication API

    │
    │ Validate Token
    ▼

JWT Service

    │
    │ Invalidate Session
    ▼

Success Response
```

---

## Get Current User

```
User

    │
    │ GET /auth/me
    ▼

Authentication Middleware

    │
    │ Verify JWT
    ▼

User Repository

    │
    │ Fetch User
    ▼

Response
```
