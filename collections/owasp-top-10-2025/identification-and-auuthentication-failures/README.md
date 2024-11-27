# Identification and Authentication Failures Postman Collections

This section contains Postman collections for testing **Identification and Authentication Failures**, a critical risk identified in the **OWASP Top 10 (2025)**. These failures often result in unauthorized access to user accounts, sensitive data, or application functionality, making robust authentication and session management essential.

---

## 📂 **Included Collections**

### **1. Weak Password Policy**
- **File**: `weak-password-policy.json`
- **Purpose**:
  - Detect insufficient password complexity or length requirements.
- **Test Scenarios**:
  - Attempt to register an account with a weak password (e.g., `12345`).
  - Ensure weak passwords are rejected and proper error messages are returned.

---

### **2. Missing Multi-Factor Authentication (MFA)**
- **File**: `missing-mfa.json`
- **Purpose**:
  - Identify sensitive actions or accounts that lack MFA enforcement.
- **Test Scenarios**:
  - Execute high-risk actions (e.g., fund transfers) without MFA and validate that access is denied.
  - Confirm that MFA is required for sensitive operations.

---

### **3. Session Management Flaws**
- **File**: `session-management.json`
- **Purpose**:
  - Validate session management practices, including secure cookie attributes and session expiration.
- **Test Scenarios**:
  - Verify that sessions expire after a defined period of inactivity.
  - Check that session cookies have `Secure` and `HttpOnly` flags enabled.

---

## 🚀 **How to Use**

### **1. Import Collections**
- Import the desired JSON file(s) from this directory into Postman.

### **2. Configure Environment Variables**
- Set up required variables in your Postman environment:
  - `baseUrl`: The API's base URL (e.g., `https://api.example.com`).
  - `authToken`: Authentication token for authorized API requests.

### **3. Run Tests**
- Execute tests using Postman’s **Collection Runner** or via Newman CLI:
  ```bash
  newman run collection.json --environment environment.json
  ```

### **4. Analyze Results**
- Review test results to identify weak authentication mechanisms or session management flaws.
- Implement necessary improvements, such as stronger password policies, MFA, and secure cookie configurations.

---

## 🛠️ **Key Features**

### **Password Policy Validation**
- Ensures that weak passwords are rejected.
- Promotes best practices for password complexity and length.

### **Multi-Factor Authentication (MFA) Enforcement**
- Validates that MFA is required for sensitive operations.
- Detects potential bypass scenarios for high-risk actions.

### **Session Security**
- Checks for proper session expiration and secure cookie attributes (`Secure`, `HttpOnly`).
- Identifies vulnerabilities that could allow session hijacking or unauthorized access.

---

## 📄 **Best Practices for Mitigation**

1. **Enforce Strong Password Policies**:
   - Require minimum password length, complexity, and rotation.
   - Prevent commonly used or breached passwords.
2. **Implement Multi-Factor Authentication**:
   - Use MFA for sensitive actions, administrative accounts, and user logins.
3. **Enhance Session Management**:
   - Set proper session expiration times and enforce reauthentication for high-risk actions.
   - Use `Secure` and `HttpOnly` flags for cookies.
4. **Monitor Authentication Events**:
   - Log and alert on suspicious login attempts or session anomalies.

---

## 🤝 **Contributing**

We welcome contributions to expand this section. You can:
- Submit new collections for additional authentication scenarios.
- Report issues or suggest improvements via [GitHub Issues](https://github.com/AverageJoesHosting/CyberSecurity-OWASPTop10-Postman-Collections/issues).

---

## 📞 **Support**

For questions or support, contact **Average Joe's Hosting**:
- 🌐 **Website**: [averagejoeshosting.com](https://averagejoeshosting.com/)
- 📧 **Email**: [helpme@averagejoeshosting.com](mailto:helpme@averagejoeshosting.com)
- ☎️ **Phone**: (888) 563-1216

---

## 👋 **About Average Joe's Hosting**

This collection is maintained by **Average Joe's Hosting**, a company dedicated to providing affordable, high-quality technology solutions for small businesses. Learn more about our work at [averagejoeshosting.com](https://averagejoeshosting.com/).

