# FG-ACC-002 - Get My Accounts

## Module

Accounts

---

## Feature ID

FG-ACC-002

---

## Feature Name

Get My Accounts

---

## Objective

Allow an authenticated customer to retrieve all bank accounts owned by them.

The system shall return only the accounts belonging to the authenticated user.

---

# Actors

- Customer

---

# Preconditions

- User must be authenticated.
- User account must exist.
- User account must be ACTIVE.

---

# Trigger

The authenticated user requests their bank accounts.

---

# Business Rules

### BR1

Only authenticated users can retrieve accounts.

### BR2

Only ACTIVE users can retrieve accounts.

### BR3

Users shall only receive their own accounts.

### BR4

Accounts shall be returned in ascending order of creation.

### BR5

If the user owns no accounts, the system shall return an empty list.

### BR6

Sensitive user information shall never be returned.

---

# Functional Requirements

### FR1

The system shall retrieve all accounts belonging to the authenticated user.

### FR2

The system shall return account details only.

### FR3

The system shall return an empty collection if no accounts exist.

---

# User Story

### US1

**As a customer**

I want to view all my bank accounts

So that I can manage them.

---

# Acceptance Criteria

### AC1

Given an authenticated ACTIVE user

When the request is submitted

Then all accounts belonging to that user shall be returned.

---

### AC2

Given an authenticated user with no accounts

When the request is submitted

Then an empty collection shall be returned.

---

### AC3

Given an unauthenticated request

When the endpoint is invoked

Then the system shall return **401 Unauthorized**.

---

### AC4

The response shall never include another user's account.

---

# Request

```http
GET /api/accounts
```

---

# Request Body

None

---

# Success Response

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
        }
    ]
}
```

---

# Empty Response

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

```http
401 Unauthorized
```

---

## User Not Found

```http
404 Not Found
```

---

## User Inactive

```http
403 Forbidden
```

---

# Database Tables

- users
- accounts

---

# Dependencies

- Authentication Module (FG-AUTH)
- FG-ACC-001 Create Account

---

# Status

Completed

---

# Version

1.0