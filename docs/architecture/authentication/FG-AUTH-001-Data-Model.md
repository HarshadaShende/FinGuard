# FG-AUTH-001 - Data Model

## Overview

This document defines the logical data model for the Authentication feature. It describes the entities, their attributes, validation rules, and relationships used by the authentication module.

---

# Entity: User

## Description

Represents a registered user who can authenticate and access the FinGuard platform.

---

## Entity Definition

| Field               | Data Type   | Required | Constraints                 | Description                   |
| ------------------- | ----------- | -------- | --------------------------- | ----------------------------- |
| id                  | Integer     | Yes      | Primary Key, Auto Increment | Unique identifier             |
| firstName           | String(100) | Yes      | Not Null                    | User's first name             |
| lastName            | String(100) | Yes      | Not Null                    | User's last name              |
| email               | String(255) | Yes      | Unique                      | Login email                   |
| passwordHash        | String(255) | Yes      | Not Null                    | Encrypted password            |
| role                | Enum        | Yes      | Not Null                    | User role                     |
| status              | Enum        | Yes      | Default: Active             | Account status                |
| failedLoginAttempts | Integer     | Yes      | Default: 0                  | Failed login counter          |
| lastLogin           | DateTime    | No       | Nullable                    | Last successful login         |
| passwordChangedAt   | DateTime    | No       | Nullable                    | Password update timestamp     |
| createdAt           | DateTime    | Yes      | Auto Generated              | Record creation timestamp     |
| updatedAt           | DateTime    | Yes      | Auto Generated              | Record modification timestamp |

---

## Allowed Values

### Role

* Admin
* Manager
* Customer
* Auditor

### Status

* Active
* Inactive
* Locked
* Suspended

---

## Validation Rules

| Field        | Rule                       |
| ------------ | -------------------------- |
| firstName    | 2–100 characters           |
| lastName     | 2–100 characters           |
| email        | Valid email format         |
| email        | Unique                     |
| email        | Stored in lowercase        |
| passwordHash | Never stored in plain text |
| role         | Must be a valid enum value |
| status       | Must be a valid enum value |

---

## Business Rules

* Each user must have a unique email address.
* Passwords must be stored only as secure hashes.
* Password hashes must never be exposed through APIs.
* Failed login attempts must be tracked.
* User status controls authentication eligibility.

---

# Entity Relationships

```
User
 │
 ├── owns Authentication Session (Future)
 │
 ├── belongs to Role
 │
 └── generates Audit Logs
```

---

# Future Entities

The following entities are planned for future sprints.

## Session

Stores active user sessions.

Fields:

* sessionId
* userId
* accessToken
* refreshToken
* expiresAt
* device
* ipAddress
* userAgent

---

## Role

Stores application roles.

Fields:

* id
* roleName
* description

---

## Permission

Stores permissions assigned to roles.

Fields:

* id
* permissionName
* description

---

## Audit Log

Captures security events.

Fields:

* id
* userId
* action
* timestamp
* ipAddress
* device
* status

---

# Data Security

* Passwords must be hashed using bcrypt.
* Password hashes must never be returned by APIs.
* Refresh tokens should be encrypted when persisted.
* Sensitive information must not be logged.
* Authentication data must be transmitted only over HTTPS.

---

# Assumptions

* Numeric primary keys are used in Sprint 1.
* UUID support may be introduced in future releases.
* Session management will be expanded in Sprint 2.
* RBAC will be implemented after authentication is completed.

---

# Version History

| Version | Date     | Description                       |
| ------- | -------- | --------------------------------- |
| 1.0     | Sprint 1 | Initial Authentication Data Model |
