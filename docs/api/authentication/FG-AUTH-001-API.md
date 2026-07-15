# FG-AUTH-001 API Documentation

---

# Feature Information

| Field | Value |
|-------|-------|
| Feature | Authentication |
| Feature ID | FG-AUTH-001 |
| Version | 1.1 |
| Sprint | Sprint 1 |

---

# Overview

This document describes every REST API implemented for the Authentication module.

Authentication is JWT based.

---

# Base URL

```
http://localhost:3000/api/auth
```

---

# Authentication Flow

```
Login
↓

Receive JWT

↓

Pass JWT in Authorization Header

↓

Access Protected APIs

↓

Logout
```

---

# Implemented Endpoints

| Method | Endpoint | Authentication |
|----------|----------------|---------------|
| POST | /login | No |
| GET | /profile | Bearer Token |
| POST | /logout | Bearer Token |

---

# Future Endpoints

| Method | Endpoint |
|----------|---------------|
| POST | /refresh-token |
| POST | /forgot-password |
| POST | /reset-password |

---

# Standard Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully.",
  "data": {}
}
```

---

# Standard Error Response

```json
{
  "success": false,
  "message": "Description of error."
}
```

---

# Authentication Header

```
Authorization: Bearer <JWT Token>
```

---

# HTTP Status Codes

| Code | Description |
|------|-------------|
|200|Success|
|400|Validation Error|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|500|Internal Server Error|