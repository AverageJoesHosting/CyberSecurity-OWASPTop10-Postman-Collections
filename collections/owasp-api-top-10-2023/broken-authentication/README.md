# Broken Authentication Postman Tests

This folder contains Postman collections designed to test for **Broken Authentication** vulnerabilities, as outlined in the [OWASP API Top 10 (2023)](https://owasp.org/API-Security/). These collections help identify weaknesses in authentication mechanisms, session management, and multi-factor authentication (MFA) enforcement.

---

## What is Broken Authentication?

Broken Authentication occurs when APIs have weak or improperly implemented authentication mechanisms, allowing attackers to:
- Exploit weak password policies.
- Bypass authentication due to improper session or token handling.
- Leverage vulnerabilities in multi-factor authentication (MFA).
- Abuse password reset functionalities.

---

## Test Scenarios Covered

### 1. **Authentication Tests**
- Validate login flows with:
  - **Valid Credentials**: Ensure legitimate users can log in successfully.
  - **Invalid Credentials**: Confirm login fails for invalid credentials.
  - **Missing Credentials**: Verify login fails when required inputs are missing.
- Test adherence to password policies to prevent weak or guessable passwords.

### 2. **Session Management Tests**
- Validate session handling, including:
  - **Expired Tokens**: Ensure expired tokens are invalidated.
  - **Token Reuse**: Test that old session tokens are denied.
  - **Concurrent Sessions**: Validate how the API handles multiple active sessions.

### 3. **Forgot/Reset Password Tests**
- Test password reset functionality for security:
  - Ensure password resets require authentication or proper validation.
  - Validate strong, time-limited reset tokens to prevent abuse.

### 4. **Multi-Factor Authentication (MFA) Tests**
- Test MFA enforcement and robustness:
  - Validate MFA is required for applicable accounts.
  - Test for bypass attempts, such as using tokens without MFA verification.
  - Confirm proper handling of valid and invalid MFA codes.

---

## Collections Included

### **1. Authentication Tests**
- File: `auth-tests.json`
- Scenarios:
  - Login with valid and invalid credentials.
  - Validate handling of missing credentials.
  - Password policy validation.

### **2. Session Management Tests**
- File: `session-tests.json`
- Scenarios:
  - Validate session token expiration.
  - Test token reuse after logout.
  - Handling of concurrent sessions.

### **3. Forgot/Reset Password Tests**
- File: `reset-password-tests.json`
- Scenarios:
  - Password reset without authentication.
  - Testing for weak reset token vulnerabilities.

### **4. Multi-Factor Authentication (MFA) Tests**
- File: `mfa-tests.json`
- Scenarios:
  - Login with and without MFA.
  - Validate proper MFA enforcement.
  - Test MFA bypass attempts.

---

## How to Use the Collections

### Prerequisites
1. Install [Postman](https://www.postman.com/downloads/) if not already installed.
2. Import the relevant JSON files into your Postman workspace:
   - `auth-tests.json`
   - `session-tests.json`
   - `reset-password-tests.json`
   - `mfa-tests.json`
3. Configure the necessary environment variables.

---

### Environment Variables
The following environment variables are required:
- `baseUrl`: The base URL of your API (e.g., `https://example.com`).
- `expiredToken`: A token that has been expired for testing session expiration.
- `accessTokenWithoutMFA`: A token obtained without MFA verification for testing bypass.

---

### Steps
1. **Import Collections**:
   - Use the **Import** button in Postman to upload the JSON files.
2. **Set Variables**:
   - Configure `baseUrl` and other required variables in your environment.
3. **Run Tests**:
   - Execute individual requests or use the **Collection Runner** to validate multiple scenarios.

---

## Expected Results

### Authentication Tests
- **Valid Login**:
  - Status Code: `200 OK`
  - Response includes a valid session token.
- **Invalid Login**:
  - Status Code: `401 Unauthorized`
  - Response includes an error message like `Invalid credentials`.
- **Missing Credentials**:
  - Status Code: `400 Bad Request` or `401 Unauthorized`.

### Session Management Tests
- **Expired Tokens**:
  - Status Code: `401 Unauthorized`
  - Response includes an error like `Session expired`.
- **Token Reuse**:
  - Status Code: `401 Unauthorized`
  - Response denies access with reused tokens.

### Forgot/Reset Password Tests
- **Reset Without Authentication**:
  - Status Code: `403 Forbidden`
  - Response includes an error indicating authentication is required.
- **Weak Tokens**:
  - Test fails if expired or brute-forceable tokens can reset passwords.

### Multi-Factor Authentication (MFA) Tests
- **Login Without MFA**:
  - Status Code: `403 Forbidden`
  - Response includes an error like `MFA required`.
- **Valid MFA Code**:
  - Status Code: `200 OK`
  - Response includes a valid session token.
- **Invalid MFA Code**:
  - Status Code: `401 Unauthorized`
  - Response includes an error like `Invalid MFA code`.
- **MFA Bypass**:
  - Status Code: `403 Forbidden`
  - Response denies access without MFA.

---

## Contribution and Support

We welcome contributions to improve or expand these collections. You can:
- **Report Issues**: [Open an issue](https://github.com/AverageJoesHosting/CyberSecurity-OWASPTop10-Postman-Collections/issues).
- **Submit Improvements**: Create a pull request with your updates or suggestions.

For further assistance, contact [Average Joe's Hosting](https://averagejoeshosting.com/):
- **Website**: [averagejoeshosting.com](https://averagejoeshosting.com/)
- **Email**: [helpme@averagejoeshosting.com](mailto:helpme@averagejoeshosting.com)
- **Phone**: (888) 563-1216

---

## About Average Joe's Hosting

This collection is proudly developed and maintained by [Average Joe's Hosting](https://averagejoeshosting.com/). We are committed to providing accessible, high-quality technology solutions. Explore more of our cybersecurity resources and secure your APIs with confidence.

