# General API Security Postman Tests

This folder contains Postman collections designed to validate **general API security best practices**. These tests cover essential security mechanisms that every API should implement, regardless of platform or technology stack.

---

## Security Categories

### **1. Authentication and Authorization**
- **Collection**: `auth-authorization.json`
- **Scenarios**:
  - Validate token-based authentication.
  - Test API key enforcement.
  - Check role-based access controls (RBAC) to ensure unauthorized users cannot access restricted resources.

### **2. Input Validation and Injection Prevention**
- **Collection**: `input-validation.json`
- **Scenarios**:
  - Test for SQL and NoSQL injection vulnerabilities.
  - Validate input sanitization and encoding.
  - Check for command and LDAP injection prevention.

### **3. Rate Limiting and Throttling**
- **Collection**: `rate-limiting.json`
- **Scenarios**:
  - Validate API rate limiting and throttling mechanisms.
  - Ensure the system gracefully handles abuse attempts.
  - Check responses for exceeded rate limits.

### **4. Error Handling and Information Disclosure**
- **Collection**: `error-handling.json`
- **Scenarios**:
  - Validate proper error responses for invalid requests.
  - Ensure sensitive information is not disclosed in error messages.
  - Check for potential leakage of internal system details (e.g., stack traces, SQL errors).

### **5. Transport Security**
- **Collection**: `transport-security.json`
- **Scenarios**:
  - Validate HTTPS enforcement and redirection.
  - Ensure secure TLS configurations are used.
  - Test for proper handling of certificates and secure communication.

---

## How to Use the Collections

### Prerequisites
1. Install [Postman](https://www.postman.com/downloads/) if not already installed.
2. Import the relevant JSON files for your tests:
   - `auth-authorization.json`
   - `input-validation.json`
   - `rate-limiting.json`
   - `error-handling.json`
   - `transport-security.json`
3. Configure the required environment variables.

---

### Environment Variables
Each collection requires specific variables to run effectively. Common variables include:
- `baseUrl`: API base URL (e.g., `https://api.example.com`).
- `authToken`: A valid authentication token for testing.
- `apiKey`: API key for key-based authorization.

---

### Steps
1. **Import Collections**:
   - Use the **Import** button in Postman to upload the JSON files.
2. **Set Variables**:
   - Configure the required variables in your Postman environment.
3. **Run Tests**:
   - Execute individual requests or use the **Collection Runner** to validate multiple scenarios in bulk.

---

## Expected Results

### **Authentication and Authorization**
- Token authentication should grant access only to valid tokens.
- Unauthorized users or invalid tokens should receive a `401 Unauthorized` response.
- Role-based access controls should enforce proper restrictions (`403 Forbidden` for unauthorized roles).

### **Input Validation**
- Inputs containing malicious payloads (e.g., SQL injection, command injection) should be blocked.
- Responses should indicate a `400 Bad Request` or other appropriate status without exposing sensitive system details.

### **Rate Limiting**
- Excessive requests beyond allowed limits should result in a `429 Too Many Requests` response.
- Rate limiting should protect APIs from abuse without impacting legitimate users.

### **Error Handling**
- Error messages should be generic and user-friendly.
- Internal system details such as stack traces, SQL errors, or debug information should not be exposed.

### **Transport Security**
- All communications should occur over HTTPS.
- TLS configurations should meet industry standards (e.g., TLS 1.2 or higher).

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

This collection is proudly developed and maintained by [Average Joe's Hosting](https://averagejoeshosting.com/). We are committed to providing accessible, high-quality technology solutions. Explore more of our API security resources to secure your applications with confidence.
