# FG-ACC-001 - Create Account

## Module

Accounts

---

## Feature ID

FG-ACC-001

---

## Feature Name

Create Account

---

## Objective

Allow an authenticated customer to create a new bank account.

The system shall automatically generate a unique account number and initialize the account with the default banking configuration.

---

# Actors

- Customer
- Administrator (Future)

---

# Preconditions

- User must be authenticated.
- User account must exist.
- User account must be ACTIVE.

---

# Trigger

The authenticated user submits a request to create a new account.

---

# Business Rules

### BR1

Only authenticated users can create bank accounts.

### BR2

Only ACTIVE users can create bank accounts.

### BR3

A customer may own multiple accounts.

### BR4

The system shall generate a unique account number.

### BR5

Initial account balance shall be **0.00**.

### BR6

Default currency shall be **INR**.

### BR7

Default account status shall be **ACTIVE**.

### BR8

Only the following account types are supported in Version 1:

- SAVINGS
- CURRENT

### BR9

Account numbers shall use the following format:

```
FG10000001
FG10000002
FG10000003
...
```

---

# Functional Requirements

### FR1

The system shall allow an authenticated user to create a bank account.

### FR2

The system shall validate the supplied account type.

### FR3

The system shall generate a unique account number.

### FR4

The system shall store the account in the database.

### FR5

The system shall return the created account details.

---

# User Story

### US1

**As a customer**

I want to create a bank account

So that I can perform banking transactions.

---

# Acceptance Criteria

### AC1

Given an authenticated ACTIVE user

When a valid account type is submitted

Then the account shall be created successfully.

---

### AC2

Given an unauthenticated request

When Create Account is invoked

Then the system shall return **401 Unauthorized**.

---

### AC3

Given an invalid account type

When Create Account is invoked

Then validation shall fail.

---

### AC4

Given a valid request

When the account is created

Then:

- Balance = 0.00
- Currency = INR
- Status = ACTIVE

---

### AC5

The generated account number shall be unique.

---

# Request

```http
POST /api/accounts
```

---

# Request Body

```json
{
    "accountType": "SAVINGS"
}
```

---

# Success Response

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

## Validation Failure

```http
400 Bad Request
```

---

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

Authentication Module (FG-AUTH)

---

# Status

Completed

---

# Version

1.0