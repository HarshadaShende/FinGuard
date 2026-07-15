# Accounts Sequence Diagram

## Module

Accounts

---

## Feature

FG-ACC-001 – Create Account

---

# Purpose

This document describes the sequence of interactions that occur when an authenticated user creates a new bank account.

---

# Sequence Diagram

```text
+---------+        +------------+        +---------+        +------------+        +----------+
| Client  |        | Controller |        | Service |        | Repository |        | Database |
+---------+        +------------+        +---------+        +------------+        +----------+
     |                   |                    |                    |                   |
     | POST /api/accounts|                    |                    |                   |
     |------------------>|                    |                    |                   |
     |                   | Validate Request   |                    |                   |
     |                   |------------------->|                    |                   |
     |                   |                    | Find User          |                   |
     |                   |                    |------------------->|                   |
     |                   |                    |                    | SELECT users      |
     |                   |                    |                    |------------------>|
     |                   |                    |                    |<------------------|
     |                   |                    |                    | User Details      |
     |                   |                    |                    |                   |
     |                   |                    | Validate User      |                   |
     |                   |                    |                    |                   |
     |                   |                    | Get Latest Account |                   |
     |                   |                    |------------------->|                   |
     |                   |                    |                    | SELECT accounts   |
     |                   |                    |                    |------------------>|
     |                   |                    |                    |<------------------|
     |                   |                    | Latest Account     |                   |
     |                   |                    |                    |                   |
     |                   |                    | Generate Account No|                   |
     |                   |                    |                    |                   |
     |                   |                    | Create Account     |                   |
     |                   |                    |------------------->|                   |
     |                   |                    |                    | INSERT account    |
     |                   |                    |                    |------------------>|
     |                   |                    |                    |<------------------|
     |                   |                    | Created Account    |                   |
     |                   |<-------------------|                    |                   |
     | Success Response  |                    |                    |                   |
     |<------------------|                    |                    |                   |
```

---

# Processing Flow

## Step 1

The client sends:

```http
POST /api/accounts
```

with:

- JWT Token
- Account Type

---

## Step 2

Authentication middleware validates the JWT.

If authentication fails:

- HTTP 401

---

## Step 3

Validation middleware validates the request body.

If validation fails:

- HTTP 400

---

## Step 4

The controller delegates the request to the Accounts Service.

The controller contains no business logic.

---

## Step 5

The service performs business validation.

It verifies:

- User exists
- User is ACTIVE

If validation fails:

- HTTP 403
- HTTP 404

---

## Step 6

The service requests the latest account number from the repository.

---

## Step 7

The repository retrieves data from the SQLite database.

---

## Step 8

The service generates the next account number.

Example:

```
FG10000001
FG10000002
FG10000003
```

---

## Step 9

The repository inserts the new account into the database.

Default values:

- Balance = 0.00
- Currency = INR
- Status = ACTIVE

---

## Step 10

The repository returns the created account.

---

## Step 11

The controller returns a standard success response.

```json
{
    "success": true,
    "message": "Account created successfully.",
    "data": {}
}
```

---

# Error Flow

Possible responses:

| HTTP | Scenario |
|------|----------|
| 400 | Validation failed |
| 401 | Unauthorized |
| 403 | User inactive |
| 404 | User not found |
| 500 | Internal server error |

---

# Design Principles

- Controllers handle HTTP only.
- Services contain business logic.
- Repositories perform database operations.
- Middleware handles authentication and validation.
- Database enforces integrity through constraints.

---

# Related Documents

- FG-ACC-001 Requirements
- FG-ACC-001 API Documentation
- Accounts Data Model
- Accounts Test Scenarios
- Accounts Traceability Matrix

---

# Version

1.0