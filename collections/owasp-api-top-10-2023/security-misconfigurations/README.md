# Security Misconfiguration Postman Collections

This section contains Postman collections for testing **Security Misconfiguration**, a critical risk identified in the **OWASP API Security Top 10 (2023)**. These vulnerabilities arise from insecure default configurations, lack of proper security hardening, or unintended exposure of sensitive configurations.

---

## 📂 **Included Collections**

### **1. Default Credentials Usage**
- **File**: `default-credentials.json`
- **Purpose**:
  - Validate that APIs and systems reject default or commonly used credentials.
- **Test Scenarios**:
  - Attempt to authenticate with default admin credentials (e.g., `admin:admin`).
  - Ensure unauthorized access is denied with appropriate error messages.

---

### **2. Open API Endpoints**
- **File**: `open-endpoints.json`
- **Purpose**:
  - Detect API endpoints that are accessible without authentication.
- **Test Scenarios**:
  - Attempt to access admin-only endpoints or dashboards without a token.
  - Validate that public access to restricted endpoints is denied.

---

### **3. Unrestricted Cross-Origin Requests**
- **File**: `cors-misconfiguration.json`
- **Purpose**:
  - Test if the API allows overly permissive cross-origin requests, which can lead to data theft.
- **Test Scenarios**:
  - Simulate requests from untrusted origins and validate CORS restrictions.
  - Ensure that `Access-Control-Allow-Origin` headers are properly set and do not allow `*`.

---

### **4. Directory Listing Exposure**
- **File**: `directory-listing.json`
- **Purpose**:
  - Validate that directory listings are disabled to prevent exposing sensitive files or configurations.
- **Test Scenarios**:
  - Attempt to access directories like `/uploads/` or `/config/`.
  - Ensure that directory listing responses are blocked with `403 Forbidden` or similar status codes.

---

## 🚀 **How to Use**

### **1. Import Collections**
- Import the desired JSON file(s) from this directory into Postman.

### **2. Configure Environment Variables**
- Set up the following variables in your Postman environment:
  - `baseUrl`: The API's base URL (e.g., `https://api.example.com`).

### **3. Run Tests**
- Execute tests using Postman’s **Collection Runner** or via Newman CLI:
  ```bash
  newman run collection.json --environment environment.json
  ```

### **4. Analyze Results**
- Review test results to identify security misconfigurations.
- Apply the recommended mitigations to address identified vulnerabilities.

---

## 🛠️ **Key Features**

### **Default Credential Validation**
- Ensures APIs reject default or common credentials to prevent unauthorized access.

### **Authentication Enforcement**
- Validates that sensitive endpoints require authentication and are not publicly accessible.

### **Cross-Origin Resource Sharing (CORS) Testing**
- Tests for overly permissive CORS policies to prevent unauthorized data access.

### **Directory Listing Detection**
- Identifies if sensitive directories are unintentionally exposed, which could lead to data leakage.

---

## 📄 **Best Practices for Mitigation**

1. **Change Default Credentials**:
   - Always replace default or weak credentials during deployment.
   - Enforce strong password policies.
2. **Secure CORS Policies**:
   - Use an allowlist for trusted origins.
   - Avoid using `*` in the `Access-Control-Allow-Origin` header.
3. **Disable Directory Listings**:
   - Ensure web servers are configured to block directory listings.
   - Use `403 Forbidden` or similar responses for directory access attempts.
4. **Enforce Authentication**:
   - Require authentication for all sensitive or admin-specific endpoints.
   - Implement role-based access controls (RBAC) for granular permissions.

---

## 🤝 **Contributing**

We welcome contributions to expand this section. You can:
- Submit new collections for additional misconfiguration scenarios.
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

