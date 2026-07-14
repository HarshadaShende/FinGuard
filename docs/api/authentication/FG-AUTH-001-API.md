# FG-AUTH-001 – API Specification

## API-001: User Login

### API Information

| Field                   | Value                |
| ----------------------- | -------------------- |
| API ID                  | API-001              |
| Feature ID              | FG-AUTH-001          |
| Feature Name            | Authentication       |
| API Name                | User Login           |
| HTTP Method             | POST                 |
| Endpoint                | `/api/v1/auth/login` |
| Authentication Required | No                   |
| Content Type            | `application/json`   |

---

## Purpose

The User Login API authenticates a registered user using their email address and password. Upon successful authentication, the API returns an access token, a refresh token (reserved for future implementation), and the authenticated user's basic profile information.

---

## Request Headers

| Header       | Required | Value              |
| ------------ | -------- | ------------------ |
| Content-Type | Yes      | `application/json` |

---

## Request Body

| Field    | Data Type | Required | Validation                           |
| -------- | --------- | -------- | ------------------------------------ |
| email    | String    | Yes      | Must be a valid email address        |
| password | String    | Yes      | Minimum 8 characters, case-sensitive |

### Sample Request

```http
POST /api/v1/auth/login
Content-Type: application/json
```

```json
{
  "email": "john.doe@finguard.com",
  "password": "Password@123"
}
```

---

## Success Response

**HTTP Status:** `200 OK`

```json
{
  "success": true,
  "message": "Login successful.",
  "data": {
    "accessToken": "<JWT_ACCESS_TOKEN>",
    "refreshToken": "<JWT_REFRESH_TOKEN>",
    "tokenType": "Bearer",
    "expiresIn": 3600,
    "user": {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@finguard.com",
      "role": "Admin"
    }
  }
}
```

### Success Response Fields

| Field        | Description                                      |
| ------------ | ------------------------------------------------ |
| success      | Indicates whether the request was successful     |
| message      | Human-readable success message                   |
| accessToken  | JWT access token used for authenticated requests |
| refreshToken | Reserved for future refresh token implementation |
| tokenType    | Authentication scheme (`Bearer`)                 |
| expiresIn    | Token validity period (in seconds)               |
| user         | Authenticated user's basic profile               |

---

## Error Responses

### Invalid Credentials

**HTTP Status:** `401 Unauthorized`

```json
{
  "success": false,
  "code": "INVALID_CREDENTIALS",
  "message": "Invalid email or password.",
  "errors": []
}
```

---

### Validation Error

**HTTP Status:** `400 Bad Request`

```json
{
  "success": false,
  "code": "VALIDATION_ERROR",
  "message": "Validation failed.",
  "errors": [
    {
      "field": "email",
      "code": "INVALID_EMAIL_FORMAT",
      "message": "Please provide a valid email address."
    }
  ]
}
```

---

### Internal Server Error

**HTTP Status:** `500 Internal Server Error`

```json
{
  "success": false,
  "code": "INTERNAL_SERVER_ERROR",
  "message": "An unexpected error occurred.",
  "errors": []
}
```

---

## Validation Rules

| Field        | Rule                                         |
| ------------ | -------------------------------------------- |
| Email        | Mandatory                                    |
| Email        | Must be in a valid email format              |
| Email        | Leading and trailing spaces are removed      |
| Email        | Converted to lowercase before authentication |
| Password     | Mandatory                                    |
| Password     | Minimum 8 characters                         |
| Password     | Case-sensitive                               |
| Request Body | Only JSON payload is accepted                |

---

## Processing Flow

1. Receive the login request.
2. Validate the request payload.
3. Normalize the email address (trim whitespace and convert to lowercase).
4. Search for the user using the normalized email.
5. Compare the supplied password with the stored password hash.
6. If authentication fails, return **401 Unauthorized**.
7. Generate a JWT access token.
8. Generate a refresh token (future implementation).
9. Return the authenticated user's profile and token details.

---

## Security Considerations

* Passwords must never be stored or transmitted in plain text.
* Password verification must use a secure hashing algorithm (e.g., bcrypt).
* JWT tokens should contain only the minimum required claims.
* Passwords must never be included in any API response.
* Authentication failure messages must not reveal whether the email address or password is incorrect.
* All communication with this endpoint must use HTTPS in production environments.

---

## Dependencies

* User Repository / Database
* Password Hashing Service (bcrypt)
* JWT Token Service
* Authentication Service
* Logging Service

---

## Business Rules

* Only registered users can log in.
* Users must provide both email and password.
* Email comparison is case-insensitive.
* Password comparison is case-sensitive.
* A successful login returns an access token and user details.
* Authentication failures must always return the same generic error message.
* Refresh token support is reserved for a future sprint.

---

## Notes

* This endpoint does not require authentication.
* The `refreshToken` field is included to maintain a stable API contract and will be fully implemented in a future sprint.
* This API follows the FinGuard standard response structure for all success and error responses.

------------------------------------------------------------------------

# API-002: User Logout

## API Information

| Field                   | Value                 |
| ----------------------- | --------------------- |
| API ID                  | API-002               |
| Feature ID              | FG-AUTH-001           |
| Feature Name            | Authentication        |
| API Name                | User Logout           |
| HTTP Method             | POST                  |
| Endpoint                | `/api/v1/auth/logout` |
| Authentication Required | Yes                   |
| Content Type            | `application/json`    |

---

## Purpose

The User Logout API terminates the authenticated user's current session by invalidating the access token and associated refresh token (when implemented). After logout, the user must authenticate again to access protected resources.

---

## Request Headers

| Header        | Required | Value                       |
| ------------- | -------- | --------------------------- |
| Content-Type  | Yes      | `application/json`          |
| Authorization | Yes      | `Bearer <JWT_ACCESS_TOKEN>` |

---

## Request Body

No request body is required.

---

## Sample Request

```http
POST /api/v1/auth/logout
Authorization: Bearer <JWT_ACCESS_TOKEN>
Content-Type: application/json
```

---

## Success Response

**HTTP Status:** `200 OK`

```json
{
  "success": true,
  "message": "Logout successful.",
  "data": {}
}
```

---

## Success Response Fields

| Field   | Description                                            |
| ------- | ------------------------------------------------------ |
| success | Indicates whether the request was successful           |
| message | Human-readable success message                         |
| data    | Empty object indicating no additional data is returned |

---

## Error Responses

### Unauthorized

**HTTP Status:** `401 Unauthorized`

```json
{
  "success": false,
  "code": "UNAUTHORIZED",
  "message": "Authentication required.",
  "errors": []
}
```

---

### Invalid or Expired Token

**HTTP Status:** `401 Unauthorized`

```json
{
  "success": false,
  "code": "INVALID_TOKEN",
  "message": "The access token is invalid or has expired.",
  "errors": []
}
```

---

### Internal Server Error

**HTTP Status:** `500 Internal Server Error`

```json
{
  "success": false,
  "code": "INTERNAL_SERVER_ERROR",
  "message": "An unexpected error occurred.",
  "errors": []
}
```

---

## Validation Rules

| Field                | Rule                          |
| -------------------- | ----------------------------- |
| Authorization Header | Mandatory                     |
| JWT Token            | Must be valid and not expired |
| Request Body         | No request body is accepted   |

---

## Processing Flow

1. Receive the logout request.
2. Validate the Authorization header.
3. Verify the JWT access token.
4. Identify the authenticated user.
5. Invalidate the current session.
6. Revoke the associated refresh token (future implementation).
7. Record the logout event for audit logging.
8. Return a successful response.

---

## Security Considerations

* Only authenticated users can access this endpoint.
* Logout requests must be sent over HTTPS in production.
* Expired or invalid tokens must not disclose additional authentication details.
* Session termination should be recorded in audit logs.
* Refresh tokens should be revoked once refresh token functionality is implemented.

---

## Dependencies

* JWT Authentication Middleware
* Authentication Service
* Session Management Service
* Audit Logging Service
* Token Management Service (Future)

---

## Business Rules

* Only authenticated users can log out.
* Users can terminate only their own active session.
* A valid JWT access token is required.
* Logout invalidates the current authenticated session.
* Refresh token revocation will be supported in a future sprint.
* Logout operations must be recorded in audit logs.

---

## Notes

* This endpoint requires a valid Bearer token.
* No request payload is required.
* The endpoint follows the standard FinGuard API response format.
* Future versions may support logging out from all active devices or selected sessions.

--------------------------------------------------------------------------

---

# API-003: Get Current User

## API Information

| Field                   | Value              |
| ----------------------- | ------------------ |
| API ID                  | API-003            |
| Feature ID              | FG-AUTH-001        |
| Feature Name            | Authentication     |
| API Name                | Get Current User   |
| HTTP Method             | GET                |
| Endpoint                | `/api/v1/auth/me`  |
| Authentication Required | Yes                |
| Content Type            | `application/json` |

---

## Purpose

The Get Current User API retrieves the profile information of the currently authenticated user. This endpoint is commonly used after a successful login to populate the application's user profile, permissions, and session details.

---

## Request Headers

| Header        | Required | Value                       |
| ------------- | -------- | --------------------------- |
| Content-Type  | Yes      | `application/json`          |
| Authorization | Yes      | `Bearer <JWT_ACCESS_TOKEN>` |

---

## Request Parameters

No path parameters or query parameters are required.

---

## Request Body

This endpoint does not accept a request body.

---

## Sample Request

```http
GET /api/v1/auth/me
Authorization: Bearer <JWT_ACCESS_TOKEN>
Content-Type: application/json
```

---

## Success Response

**HTTP Status:** `200 OK`

```json
{
  "success": true,
  "message": "User details retrieved successfully.",
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@finguard.com",
    "role": "Admin",
    "status": "Active",
    "lastLogin": "2026-03-26T09:30:15Z",
    "createdAt": "2025-08-12T11:15:42Z"
  }
}
```

---

## Success Response Fields

| Field     | Description                                  |
| --------- | -------------------------------------------- |
| success   | Indicates whether the request was successful |
| message   | Human-readable success message               |
| id        | Unique user identifier                       |
| firstName | User's first name                            |
| lastName  | User's last name                             |
| email     | Registered email address                     |
| role      | Assigned application role                    |
| status    | Current account status                       |
| lastLogin | Timestamp of the previous successful login   |
| createdAt | User account creation timestamp              |

---

## Error Responses

### Unauthorized

**HTTP Status:** `401 Unauthorized`

```json
{
  "success": false,
  "code": "UNAUTHORIZED",
  "message": "Authentication required.",
  "errors": []
}
```

---

### Invalid or Expired Token

**HTTP Status:** `401 Unauthorized`

```json
{
  "success": false,
  "code": "INVALID_TOKEN",
  "message": "The access token is invalid or has expired.",
  "errors": []
}
```

---

### User Not Found

**HTTP Status:** `404 Not Found`

```json
{
  "success": false,
  "code": "USER_NOT_FOUND",
  "message": "The requested user could not be found.",
  "errors": []
}
```

---

### Internal Server Error

**HTTP Status:** `500 Internal Server Error`

```json
{
  "success": false,
  "code": "INTERNAL_SERVER_ERROR",
  "message": "An unexpected error occurred.",
  "errors": []
}
```

---

## Validation Rules

| Field                | Rule                          |
| -------------------- | ----------------------------- |
| Authorization Header | Mandatory                     |
| JWT Token            | Must be valid and not expired |
| Request Body         | Not allowed                   |
| Query Parameters     | Not supported                 |
| Path Parameters      | Not supported                 |

---

## Processing Flow

1. Receive the request.
2. Validate the Authorization header.
3. Verify the JWT access token.
4. Extract the authenticated user's identifier from the token.
5. Retrieve the user's profile from the database.
6. Exclude sensitive information from the response.
7. Return the authenticated user's profile.

---

## Security Considerations

* This endpoint is accessible only to authenticated users.
* JWT validation must occur before processing the request.
* Sensitive information such as password hash, refresh tokens, security answers, or internal system attributes must never be returned.
* All communication must use HTTPS in production environments.
* Access attempts should be logged for audit purposes.

---

## Dependencies

* JWT Authentication Middleware
* User Service
* User Repository / Database
* Authentication Service
* Audit Logging Service

---

## Business Rules

* Only authenticated users can access this endpoint.
* Users can retrieve only their own profile information.
* Sensitive fields must never be exposed in the API response.
* The API returns only active profile information required by the application.
* The endpoint follows the standard FinGuard response structure.

---

## Notes

* This endpoint is typically called immediately after a successful login or when the application is refreshed to restore the user's session.
* Future versions may include additional user preferences, notification settings, profile image, and organization details.
* This endpoint serves as the primary source of authenticated user information throughout the application.
