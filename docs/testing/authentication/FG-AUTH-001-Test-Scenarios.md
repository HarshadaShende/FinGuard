# FG-AUTH-001 Test Scenarios

---

# Feature

Customer Authentication

---

# Scope

The following functionality has been implemented and tested.

- Login
- JWT Generation
- Profile Retrieval
- Logout
- Authorization Middleware
- Request Validation

---

# Positive Test Scenarios

| ID | Scenario |
|----|----------|
|TS01|Valid login|
|TS02|Generate JWT|
|TS03|Access profile with valid token|
|TS04|Logout successfully|
|TS05|Profile returns authenticated user|

---

# Negative Test Scenarios

| ID | Scenario |
|----|----------|
|TS06|Invalid email|
|TS07|Invalid password|
|TS08|Missing email|
|TS09|Missing password|
|TS10|Missing JWT|
|TS11|Expired JWT|
|TS12|Malformed JWT|
|TS13|Random token|
|TS14|Inactive account|

---

# Security Test Scenarios

| ID | Scenario |
|----|----------|
|SEC01|JWT cannot be modified|
|SEC02|Authorization header mandatory|
|SEC03|Password never returned|
|SEC04|JWT secret not exposed|
|SEC05|Only authenticated users access protected APIs|

---

# Regression Scope

Whenever Authentication changes, execute:

- Login
- Profile
- Logout
- Authorization Middleware
- JWT Validation

before releasing.