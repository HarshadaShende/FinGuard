# FG-AUTH-001 Authentication Data Model

---

# Purpose

This document describes the database entities used by the Authentication module.

---

# Current Database

SQLite

---

# Users Table

| Column | Type | Description |
|---------|------|-------------|
| id | INTEGER | Primary Key |
| first_name | TEXT | User first name |
| last_name | TEXT | User last name |
| email | TEXT | Unique email |
| password_hash | TEXT | BCrypt password |
| role | TEXT | ADMIN / CUSTOMER |
| status | TEXT | ACTIVE / INACTIVE |
| created_at | DATETIME | Record creation |
| updated_at | DATETIME | Last modification |

---

# Relationships

```
User
 │
 └── Authentication
        │
        ├── Login
        ├── JWT Token
        ├── Profile
        └── Logout
```

---

# Security Considerations

- Passwords stored using BCrypt.
- Passwords are never returned in API responses.
- JWT contains minimal user information.
- Authentication uses Bearer Token.

---

# Future Data Model

The following tables will be introduced in future sprints:

- refresh_tokens
- password_reset_tokens
- login_audit
- failed_login_attempts