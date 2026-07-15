# Accounts Traceability Matrix

## Module

Accounts

---

# Purpose

This document maps Accounts module requirements, business rules and acceptance criteria to their corresponding test cases.

---

# Feature Coverage

| Feature ID | Feature Name | Status |
|------------|--------------|--------|
| FG-ACC-001 | Create Account | ✅ Completed |
| FG-ACC-002 | Get My Accounts | ✅ Completed |

---

# Functional Requirement Coverage

| Feature | Requirement ID | Requirement | Acceptance Criteria | Test Cases | Status |
|----------|----------------|-------------|---------------------|------------|--------|
| FG-ACC-001 | FR1 | Authenticated user can create a bank account | AC1 | TC-ACC-001, TC-ACC-002 | ✅ Pass |
| FG-ACC-001 | FR2 | Validate account type | AC3 | TC-ACC-004, TC-ACC-005 | ✅ Pass |
| FG-ACC-001 | FR3 | Generate unique account number | AC5 | TC-ACC-003 | ✅ Pass |
| FG-ACC-001 | FR4 | Store account in database | AC1 | TC-ACC-001 | ✅ Pass |
| FG-ACC-001 | FR5 | Return created account details | AC1 | TC-ACC-001 | ✅ Pass |
| FG-ACC-002 | FR1 | Retrieve all accounts belonging to the authenticated user | AC1 | TC-ACC-011, TC-ACC-012 | ✅ Pass |
| FG-ACC-002 | FR2 | Return account details only | AC1 | TC-ACC-011, TC-ACC-012 | ✅ Pass |
| FG-ACC-002 | FR3 | Return an empty collection if no accounts exist | AC2 | TC-ACC-013 | ✅ Pass |

---

# Business Rule Coverage

| Feature | Business Rule | Description | Test Cases | Status |
|----------|---------------|-------------|------------|--------|
| FG-ACC-001 | BR1 | Only authenticated users can create accounts | TC-ACC-006, TC-ACC-007, TC-ACC-008 | ✅ Pass |
| FG-ACC-001 | BR2 | Only ACTIVE users can create accounts | TC-ACC-009 | ✅ Pass |
| FG-ACC-001 | BR3 | Customer may own multiple accounts | TC-ACC-003 | ✅ Pass |
| FG-ACC-001 | BR4 | System generates a unique account number | TC-ACC-003 | ✅ Pass |
| FG-ACC-001 | BR5 | Initial balance is 0.00 | TC-ACC-001 | ✅ Pass |
| FG-ACC-001 | BR6 | Default currency is INR | TC-ACC-001 | ✅ Pass |
| FG-ACC-001 | BR7 | Default account status is ACTIVE | TC-ACC-001 | ✅ Pass |
| FG-ACC-001 | BR8 | Supported account types are SAVINGS and CURRENT | TC-ACC-001, TC-ACC-002, TC-ACC-005 | ✅ Pass |
| FG-ACC-001 | BR9 | Account number follows FinGuard format | TC-ACC-003 | ✅ Pass |
| FG-ACC-002 | BR1 | Only authenticated users can retrieve accounts | TC-ACC-014, TC-ACC-015, TC-ACC-016 | ✅ Pass |
| FG-ACC-002 | BR2 | Only ACTIVE users can retrieve accounts | TC-ACC-017 | ✅ Pass |
| FG-ACC-002 | BR3 | Users can retrieve only their own accounts | TC-ACC-019 | ✅ Pass |
| FG-ACC-002 | BR4 | Accounts are returned in creation order | TC-ACC-012 | ✅ Pass |
| FG-ACC-002 | BR5 | Empty collection returned when no accounts exist | TC-ACC-013 | ✅ Pass |
| FG-ACC-002 | BR6 | Sensitive user information is never returned | TC-ACC-019 | ✅ Pass |

---

# Test Coverage Summary

| Category | Total |
|----------|------:|
| Features | 2 |
| Functional Requirements | 8 |
| Business Rules | 15 |
| Acceptance Criteria | 9 |
| Test Cases | 19 |

---

# Coverage Status

| Area | Status |
|------|--------|
| Requirements Covered | ✅ 100% |
| Business Rules Covered | ✅ 100% |
| Acceptance Criteria Covered | ✅ 100% |
| Test Coverage | ✅ Complete |

---

# Related Documents

## Requirements

- FG-ACC-001 - Create Account
- FG-ACC-002 - Get My Accounts

## API

- FG-ACC-001 - Create Account API
- FG-ACC-002 - Get My Accounts API

## Testing

- FG-ACC-001 Test Scenarios
- FG-ACC-002 Test Scenarios

---

# Version

1.1