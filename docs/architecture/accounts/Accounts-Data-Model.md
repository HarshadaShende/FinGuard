# Accounts Data Model

## Module

Accounts

---

## Feature

FG-ACC-001 – Create Account

---

# Purpose

This document describes the database design for the Accounts module.

The Accounts module stores bank account information owned by authenticated users.

---

# Database Tables

- users
- accounts

---

# Entity Relationship

```
+------------------+
|      users       |
+------------------+
| id (PK)          |
| first_name       |
| last_name        |
| email            |
| password_hash    |
| role             |
| status           |
| created_at       |
| updated_at       |
+------------------+
          |
          | 1
          |
          |
          | N
+---------------------------+
|         accounts          |
+---------------------------+
| id (PK)                   |
| user_id (FK)              |
| account_number (UNIQUE)   |
| account_type              |
| balance                   |
| currency                  |
| status                    |
| created_at                |
| updated_at                |
+---------------------------+
```

---

# Table Description

## users

Stores application users who can authenticate into FinGuard.

Each user may own zero or more bank accounts.

---

## accounts

Stores banking accounts owned by users.

Each account belongs to exactly one user.

---

# Column Definitions

| Column | Type | Description |
|----------|------|-------------|
| id | INTEGER | Primary Key |
| user_id | INTEGER | References users.id |
| account_number | TEXT | Unique account number |
| account_type | TEXT | SAVINGS or CURRENT |
| balance | REAL | Current account balance |
| currency | TEXT | Account currency |
| status | TEXT | ACTIVE, INACTIVE, FROZEN, CLOSED |
| created_at | DATETIME | Creation timestamp |
| updated_at | DATETIME | Last update timestamp |

---

# Constraints

## Primary Key

```
id
```

---

## Foreign Key

```
accounts.user_id
        ↓
users.id
```

---

## Unique Constraint

```
account_number
```

Every account number must be unique.

---

## CHECK Constraints

### Account Type

Supported values:

- SAVINGS
- CURRENT

---

### Status

Supported values:

- ACTIVE
- INACTIVE
- FROZEN
- CLOSED

---

# Relationships

## One User

↓

May own

↓

Multiple Accounts

Relationship

```
users (1)
        │
        │
        ▼
accounts (N)
```

---

# Default Values

| Field | Default |
|---------|----------|
| balance | 0.00 |
| currency | INR |
| status | ACTIVE |

---

# Design Decisions

## Account Ownership

Every account must belong to a valid user.

---

## Multiple Accounts

A customer may own multiple accounts.

---

## Account Number

Generated automatically by the system.

The client application cannot supply the account number.

---

## Currency

Version 1 supports INR only.

The column has been designed to support additional currencies in future versions without schema changes.

---

## Status

New accounts are created in ACTIVE status.

Future releases may allow accounts to transition to:

- FROZEN
- CLOSED
- INACTIVE

---

# Future Enhancements

The following fields may be introduced in later versions:

- account_name
- branch_code
- ifsc_code
- opening_balance
- account_category
- interest_rate
- minimum_balance
- overdraft_limit

---

# Related Documents

- FG-ACC-001 Requirements
- FG-ACC-001 API Documentation
- Accounts Test Scenarios
- Accounts Traceability Matrix

---

# Version

1.0