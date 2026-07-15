# FG-ACC-002 - Get My Accounts API

## Module

Accounts

---

## Feature ID

FG-ACC-002

---

## Endpoint

```http
GET /api/accounts
```

---

## Description

Retrieves all bank accounts belonging to the authenticated user.

Only accounts owned by the authenticated user are returned.

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

---

# Request Body

None

---

# Query Parameters

None

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
    "message": "Accounts retrieved successfully.",
    "data": [
        {
            "id": 1,
            "accountNumber": "FG10000001",
            "accountType": "SAVINGS",
            "balance": 0,
            "currency": "INR",
            "status": "ACTIVE"
        },
        {
            "id": 2,
            "accountNumber": "FG10000002",
            "accountType": "CURRENT",
            "balance": 0,
            "currency": "INR",
            "status": "ACTIVE"
        }
    ]
}
```

---

# Empty Response

## HTTP Status

```http
200 OK
```

### Response

```json
{
    "success": true,
    "message": "Accounts retrieved successfully.",
    "data": []
}
```

---

# Error Responses

## Unauthorized

### HTTP Status

```http
401 Unauthorized
```

Example

```json
{
    "success": false,
    "message": "Unauthorized.",
    "errors": null
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
- Only ACTIVE users can retrieve accounts.
- Users can retrieve only their own accounts.
- Account information is returned in ascending order of creation.
- If no accounts exist, an empty collection is returned.
- Sensitive user information is never included in the response.

---

# Response Fields

| Field | Type | Description |
|---------|------|-------------|
| id | Integer | Account identifier |
| accountNumber | String | Unique account number |
| accountType | String | SAVINGS or CURRENT |
| balance | Number | Current account balance |
| currency | String | Account currency |
| status | String | Current account status |

---

# Database Tables

- users
- accounts

---

# Related Documents

- FG-ACC-002 - Get My Accounts Requirements
- FG-ACC-002 - Test Scenarios
- Accounts Traceability Matrix
- Accounts Data Model

---

# Version

1.0