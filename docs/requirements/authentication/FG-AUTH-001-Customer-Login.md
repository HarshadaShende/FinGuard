## Feature Information

| Field | Value |
|-------|-------|
| Feature ID | FG-AUTH-001 |
| Module | Authentication |
| Feature Name | Customer Login |
| Priority | High |
| Status | Draft |
| Sprint | Sprint 1 |
| Version | 1.0 |
| Dependencies | None |

---

# Business Requirement

A registered customer shall be able to securely log in to FinGuard using their registered email address and password. Upon successful authentication, the customer shall gain access to their banking dashboard where all accounts linked to their customer profile are available for selection. The system shall authenticate only valid customers, prevent unauthorized access through appropriate security controls, and protect customer information throughout the authentication process.

---

# US1 - Customer Login
As a registered customer, I want to log in using my registered email address and password so that I can securely access my FinGuard banking dashboard.

# Acceptance Criteria

## AC1 – Successful Login
Given a registered customer with valid credentials
When the customer enters a valid email address and password and clicks Login
Then 
the customer shall be authenticated,
a secure authenticated session shall be established,
and the customer shall be redirected to the banking dashboard.

## AC2 – Invalid Email
Given an unregistered email address
When the customer attempts to log in
Then the system shall deny access and display a generic authentication error message.

## AC3 – Incorrect Password
Given a registered email address
When the customer enters an incorrect password
Then the system shall deny access and display a generic authentication error message.

## AC4 – Mandatory Fields
Given the login page is displayed
When the customer leaves the email or password field empty and submits the form
Then the system shall display validation messages and prevent login.

## AC5 – Locked Account
Given a customer account is locked
When the customer attempts to log in using valid credentials
Then the system shall deny access and inform the customer that the account is locked.

---

# US2 - Account Selection
As a registered customer, I want to view and select one of the bank accounts linked to my customer profile after logging in so that I can perform banking operations on the desired account.

## AC1 – Display Linked Accounts
Given a customer has successfully logged in and has multiple linked accounts
When the banking dashboard is displayed
Then the system shall display all active accounts linked to the customer's profile.

## AC2 – Select an Account
Given multiple linked accounts are displayed
When the customer selects an account
Then the system shall open the selected account dashboard.

## AC3 – Single Account
Given the customer has only one linked account
When the customer logs in successfully
Then the system shall automatically open that account without displaying the account selection screen.

## AC4 – No Active Accounts
Given the customer has no active accounts linked to their profile
When the customer logs in successfully
Then the system shall display an appropriate message and prevent access to banking operations.

---
# Business Rules

## BR1 - Authentication Method
A customer shall authenticate using their registered email address and password.

---

## BR2 - Customer Identity
A customer shall have only one login identity regardless of the number of bank accounts linked to their customer profile.

---

## BR3 - Active Customer Status
Only customers with an active status shall be permitted to authenticate.

---

## BR4 - Account Lock
A customer account shall be locked after five consecutive failed login attempts.

---

## BR5 - Authentication Error Message
The system shall display a generic authentication error message for failed login attempts and shall not reveal whether the email address or password is incorrect.

---

## BR6 - Linked Accounts
After successful authentication, the system shall display all active bank accounts linked to the authenticated customer's profile.

---

## BR7 - Single Account Behaviour
If the customer has only one active bank account, the system shall automatically open that account without displaying the account selection screen.

---

## BR8 - Account Eligibility
Only active bank accounts shall be displayed on the account selection screen and be available for banking operations.

