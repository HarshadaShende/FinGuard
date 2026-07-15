# FG-AUTH-001 Authentication Sequence

---

# Login Sequence

```
Client

│

▼

POST /login

│

▼

Authentication Controller

│

▼

Authentication Service

│

▼

Authentication Repository

│

▼

SQLite Database

│

▲

User Found

│

▲

Password Verified

│

▲

Generate JWT

│

▲

Return Token

│

▼

Client Stores JWT
```

---

# Protected API Sequence

```
Client

│

▼

GET /profile

│

▼

Authentication Middleware

│

▼

Verify JWT

│

▼

Attach User To Request

│

▼

Controller

│

▼

Response
```

---

# Logout Sequence

```
Client

│

▼

POST /logout

│

▼

Authentication Middleware

│

▼

JWT Verified

│

▼

Logout Controller

│

▼

Success Response
```

---

# Future Authentication Flow

```
Login

↓

Access Token

↓

Refresh Token

↓

Refresh Access Token

↓

Logout
```