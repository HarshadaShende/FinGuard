# FG-ACC-002 - Get My Accounts Test Scenarios

## Module

Accounts

---

## Feature

FG-ACC-002

---

## Objective

Verify that authenticated users can retrieve only their own bank accounts and that authentication, authorization, and business rules are correctly enforced.

---

# Preconditions

- Application is running.
- Database is initialized.
- User is authenticated.
- Accounts exist in the database.
- Valid JWT token is available.

---

# Positive Test Cases

## TC-ACC-011

### Title

Retrieve Single Account

### Steps

1. Login successfully.
2. Copy JWT.
3. Create one account.
4. Invoke GET `/api/accounts`.

### Expected Result

- HTTP 200
- One account returned
- Account belongs to authenticated user

---

## TC-ACC-012

### Title

Retrieve Multiple Accounts

### Steps

1. Login successfully.
2. Create multiple accounts.
3. Invoke GET `/api/accounts`.

### Expected Result

- HTTP 200
- All user accounts returned
- Accounts ordered by creation date

---

## TC-ACC-013

### Title

User With No Accounts

### Steps

1. Login using a user with no accounts.
2. Invoke GET `/api/accounts`.

### Expected Result

- HTTP 200
- Empty collection returned

```json
{
    "success": true,
    "message": "Accounts retrieved successfully.",
    "data": []
}
```

---

# Security Test Cases

## TC-ACC-014

### Title

Missing JWT

### Expected Result

- HTTP 401 Unauthorized

---

## TC-ACC-015

### Title

Invalid JWT

### Expected Result

- HTTP 401 Unauthorized

---

## TC-ACC-016

### Title

Expired JWT

### Expected Result

- HTTP 401 Unauthorized

---

# Business Rule Test Cases

## TC-ACC-017

### Title

Inactive User

### Expected Result

- HTTP 403 Forbidden

---

## TC-ACC-018

### Title

Unknown User

### Expected Result

- HTTP 404 Not Found

---

## TC-ACC-019

### Title

User Can View Only Their Own Accounts

### Steps

1. Login as User A.
2. Create one or more accounts.
3. Login as User B.
4. Invoke GET `/api/accounts`.

### Expected Result

- Only User B's accounts are returned.
- User A's accounts are never returned.

---

# Response Verification

Verify each account contains:

- id
- accountNumber
- accountType
- balance
- currency
- status

Verify the response does **not** contain:

- user_id
- password_hash
- email
- role
- created_at
- updated_at

---

# Database Verification

Verify:

- No records are created.
- No records are updated.
- No records are deleted.

This endpoint is read-only.

---

# Regression Checklist

Verify the following continue to work:

- Authentication Login
- Authentication Profile
- Authentication Refresh
- Authentication Logout
- Create Account (FG-ACC-001)

---

# Automation Candidates

The following scenarios should be automated:

- TC-ACC-011
- TC-ACC-012
- TC-ACC-013
- TC-ACC-014
- TC-ACC-015
- TC-ACC-017
- TC-ACC-019

---

# Version

1.0