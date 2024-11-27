# Insecure Design Postman Collections

This section contains Postman collections to test for **Insecure Design** vulnerabilities as outlined in the **OWASP Top 10 (2025)**. Insecure Design refers to architectural and logical flaws in an application that could lead to security vulnerabilities, even if implemented as intended.

---

## 📂 **Included Collections**

### **1. Insecure Workflow Validation**
- **File**: `insecure-workflow.json`
- **Purpose**:
  - Identify flaws in workflows that allow privilege escalation or unverified critical actions.
- **Test Scenarios**:
  - Attempt to escalate privileges to an unauthorized role.
  - Execute critical actions without verification or additional security checks.

---

### **2. Missing Rate-Limiting Checks**
- **File**: `missing-rate-limiting.json`
- **Purpose**:
  - Detect endpoints that lack rate-limiting protections, making them susceptible to abuse.
- **Test Scenarios**:
  - Simulate abuse of endpoints (e.g., password reset) to validate rate-limiting.
  - Ensure the system responds with `429 Too Many Requests` when limits are exceeded.

---

### **3. Lack of Secure Defaults**
- **File**: `lack-of-secure-defaults.json`
- **Purpose**:
  - Test for insecure default configurations, such as default passwords or API keys.
- **Test Scenarios**:
  - Attempt login with default administrator credentials.
  - Test access to secure endpoints using default or insecure API keys.

---

## 🚀 **How to Use**

### **1. Import Collections**
- Import the desired JSON file(s) from this directory into Postman.

### **2. Configure Environment Variables**
- Set up required variables in your Postman environment:
  - `baseUrl`: The API's base URL (e.g., `https://api.example.com`).
  - `authToken`, `userToken`: Authentication tokens for testing access control.

### **3. Run Tests**
- Execute the tests using Postman’s **Collection Runner** or Newman via CLI.
- Analyze test results to identify potential design flaws.

---

## 🛠️ **Key Features**

### **Privilege Escalation Tests**
- Detects if users can escalate privileges to unauthorized roles (e.g., a regular user becoming an admin).

### **Critical Action Verification**
- Ensures critical actions (e.g., deleting all users) require verification steps like multi-factor authentication (MFA).

### **Abuse Prevention**
- Validates the presence of rate-limiting mechanisms to prevent brute force or denial-of-service attempts.

### **Secure Defaults**
- Confirms that default credentials and configurations are disabled or restricted by default.

---

## 📄 **Best Practices for Mitigation**

1. **Secure Workflow Design**:
   - Incorporate role-based access control (RBAC) and principle of least privilege (PoLP) during design.
2. **Implement Rate Limiting**:
   - Use rate-limiting techniques (e.g., IP throttling) to prevent abuse of public-facing endpoints.
3. **Enforce Secure Defaults**:
   - Ensure default credentials, keys, or configurations are disabled or changed during deployment.
4. **Critical Action Verification**:
   - Add additional security checks (e.g., reauthentication or MFA) for sensitive operations.

---

## 🤝 **Contributing**

We welcome contributions to expand this section. You can:
- Submit new collections for additional insecure design scenarios.
- Report issues or suggest improvements via [GitHub Issues](https://github.com/AverageJoesHosting/CyberSecurity-OWASPTop10-Postman-Collections/issues).

---

## 📞 **Support**

For questions or support, contact **Average Joe's Hosting**:
- 🌐 **Website**: [averagejoeshosting.com](https://averagejoeshosting.com/)
- 📧 **Email**: [helpme@averagejoeshosting.com](mailto:helpme@averagejoeshosting.com)
- ☎️ **Phone**: (888) 563-1216

---

## 👋 **About Average Joe's Hosting**

This collection is maintained by **Average Joe's Hosting**, a company committed to providing affordable, high-quality technology solutions for small businesses. Learn more about our work at [averagejoeshosting.com](https://averagejoeshosting.com/).

