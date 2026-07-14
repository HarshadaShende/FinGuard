# API-001: User Login
| Field          | Value                |
| -------------- | -------------------- |
| API ID         | API-001              |
| Feature        | FG-AUTH-001          |
| Name           | User Login           |
| Method         | POST                 |
| Endpoint       | `/api/v1/auth/login` |
| Authentication | Not Required         |
| Content Type   | `application/json`   |

# Purpose
Authenticates a registered user using their email address and password. On successful authentication, the API returns a JWT access token along with the authenticated user's basic profile information.

# Request Headers
| Header       | Required | Value            |
| ------------ | -------- | ---------------- |
| Content-Type | Yes      | application/json |

# Request Body
| Field    | Type   | Required | Validation                                          |
| -------- | ------ | -------- | --------------------------------------------------- |
| email    | String | Yes      | Valid email format, trimmed, converted to lowercase |
| password | String | Yes      | Case-sensitive, minimum 8 characters                |

# Sample Request
POST /api/v1/auth/login
Content-Type: application/json
{
  "email": "john.doe@finguard.com",
  "password": "Password@123"
}

# Success Response

HTTP Status: 200 OK

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

# Success Response Fields
| Field       | Description                               |
| ----------- | ----------------------------------------- |
| accessToken | JWT token used for authenticated requests |
| tokenType   | Authentication scheme (`Bearer`)          |
| expiresIn   | Token expiry time in seconds              |
| user        | Logged-in user's basic profile            |

# Error Responses

## Invalid Credentials
HTTP Status: 401 Unauthorized
{
  "success": false,
  "code": "INVALID_CREDENTIALS",
  "message": "Invalid email or password.",
  "errors": []
}

## Validation Error
HTTP Status: 400 Bad Request
{
  "success": false,
  "code": "VALIDATION_ERROR",
  "message": "Validation failed.",
  "errors": [
    {
      "field": "email",
      "code": "INVALID_EMAIL_FORMAT"
    }
  ]
}

# Internal Server Error
HTTP Status: 500 Internal Server Error
{
  "success": false,
  "code": "INTERNAL_SERVER_ERROR",
  "message": "An unexpected error occurred.",
  "errors": []
}

# Validation Rules
| Field        | Rule                                         |
| ------------ | -------------------------------------------- |
| Email        | Mandatory                                    |
| Email        | Must be a valid email format                 |
| Email        | Leading/trailing spaces removed              |
| Email        | Converted to lowercase before authentication |
| Password     | Mandatory                                    |
| Password     | Minimum 8 characters                         |
| Password     | Case-sensitive                               |
| Request Body | Only JSON accepted                           |

# Processing Flow
1. Receive login request.
2. Validate request body.
3. Normalize the email address (trim and lowercase).
4. Find the user by email.
5. Verify the password against the stored password hash.
6. If authentication fails, return 401 Unauthorized.
7. Generate a JWT access token.
8. Return the authenticated user's profile and token.

# Security Considerations
* Passwords are never stored or transmitted in plain text.
* Password verification must use a secure password hashing algorithm (e.g., bcrypt).
* JWT must contain only the minimum claims required for authentication and authorization.
* Passwords must never be included in any API response.
* Error messages must not reveal whether the email or password was incorrect, reducing the risk of user enumeration attacks.

# Dependencies
* User repository/database
* Password hashing service (bcrypt)
* JWT service
* Authentication middleware (for protected APIs)

