# FG-AUTH-001 - Test Scenarios

## Functional Tests

| TS ID  | Scenario                              |
| ------ | ------------------------------------- |
| TS-001 | Login with valid credentials          |
| TS-002 | Login with invalid password           |
| TS-003 | Login with invalid email              |
| TS-004 | Login with empty email                |
| TS-005 | Login with empty password             |
| TS-006 | Login with both fields empty          |
| TS-007 | Email should ignore case              |
| TS-008 | Email should trim spaces              |
| TS-009 | Password should remain case-sensitive |
| TS-010 | Locked user cannot log in             |
| TS-011 | Inactive user cannot log in           |
| TS-012 | Logout with valid token               |
| TS-013 | Logout with expired token             |
| TS-014 | Logout without token                  |
| TS-015 | Get current user with valid token     |
| TS-016 | Get current user with invalid token   |
| TS-017 | Get current user without token        |
| TS-018 | Verify JWT expiration                 |
| TS-019 | Verify response schema                |
| TS-020 | Verify audit logging                  |
