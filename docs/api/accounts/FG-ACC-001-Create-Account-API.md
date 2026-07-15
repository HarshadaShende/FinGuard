# FG-ACC-001 - Create Account API

## Module

Accounts

---

## Feature ID

FG-ACC-001

---

## Endpoint

```http
POST /api/accounts
```

---

## Description

Creates a new bank account for an authenticated customer.

The system automatically:

- Generates a unique account number
- Sets the initial balance to 0.00
- Sets the default currency to INR
- Sets the account status to ACTIVE

---

# Authentication

Required

```
Authorization: Bearer <JWT>
```

---

# Headers

| Header | Required | Value |
|----------|----------|-------|
| Authorization | Yes | Bearer `<JWT>` |
| Content-Type | Yes | application/json |

---

# Request Body

```json
{
    "accountType": "SAVINGS"
}
```

---

# Request Fields

| Field | Type | Required | Description |
|---------|------|----------|-------------|
| accountType | String | Yes | Account type (SAVINGS or CURRENT) |

---

# Success Response

## HTTP Status

```http
200 OK
```

### Response

```json
{
    "success": true,
    "message": "Account created successfully.",
    "data": {
        "id": 1,
        "accountNumber": "FG10000001",
        "accountType": "SAVINGS",
        "balance": 0,
        "currency": "INR",
        "status": "ACTIVE"
    }
}
```

---

# Error Responses

## Validation Error

### HTTP Status

```http
400 Bad Request
```

Example

```json
{
    "success": false,
    "message": "Validation failed.",
    "errors": [
        {
            "field": "accountType",
            "message": "Invalid account type."
        }
    ]
}
```

---

## Unauthorized

### HTTP Status

```http
401 Unauthorized
```

Example

```json
{
    "success": false,
    "message": "Unauthorized."
}
```

---

## User Not Found

### HTTP Status

```http
404 Not Found
```

Example

```json
{
    "success": false,
    "message": "User not found.",
    "errors": null
}
```

---

## User Inactive

### HTTP Status

```http
403 Forbidden
```

Example

```json
{
    "success": false,
    "message": "User account is inactive.",
    "errors": null
}
```

---

# Business Rules

- JWT authentication is mandatory.
- Only ACTIVE users can create accounts.
- Account numbers are generated automatically.
- Initial balance is 0.00.
- Default currency is INR.
- Default status is ACTIVE.
- Multiple accounts per customer are supported.

---

# Database Tables

- users
- accounts

---

# Related Documents

- Requirements – FG-ACC-001 Create Account
- Accounts Data Model
- Accounts Test Scenarios
- Accounts Traceability Matrix

---

# Version

1.0