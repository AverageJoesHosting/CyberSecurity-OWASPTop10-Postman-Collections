# Security Misconfigurations Postman Collections

This section contains Postman collections to test for **Security Misconfigurations**, a critical risk outlined in the **OWASP Top 10 (2025)**. Security misconfigurations occur when systems, applications, or infrastructure are improperly configured, exposing vulnerabilities that attackers can exploit.

---

## 📂 **Included Collections**

### **1. Default Configuration Checks**
- **File**: `default-configuration.json`
- **Purpose**:
  - Detect default or insecure configurations in applications, such as default credentials or API keys.
- **Test Scenarios**:
  - Verify that default administrator credentials are rejected.
  - Confirm that default API keys are disabled or restricted.

---

### **2. Open Ports and Services**
- **File**: `open-ports.json`
- **Purpose**:
  - Identify unnecessary or exposed services running on open ports.
- **Test Scenarios**:
  - Ensure non-critical services (e.g., development or debug endpoints) are not accessible on production systems.

---

### **3. Missing Security Headers**
- **File**: `missing-security-headers.json`
- **Purpose**:
  - Validate that critical HTTP security headers are present and properly configured.
- **Test Scenarios**:
  - Check for missing `Content-Security-Policy` (CSP) and `Strict-Transport-Security` (HSTS) headers.

---

### **4. Weak SSL/TLS Configuration**
- **File**: `weak-ssl-tls.json`
- **Purpose**:
  - Identify weak or outdated SSL/TLS protocols and configurations.
- **Test Scenarios**:
  - Ensure that only secure versions of TLS (e.g., 1.2 or 1.3) are used.
  - Verify that deprecated protocols (e.g., SSL 3.0, TLS 1.0) are not supported.

---

### **5. Sensitive Files Exposure**
- **File**: `sensitive-files.json`
- **Purpose**:
  - Detect publicly accessible sensitive files, such as `.env` files, backups, or source code.
- **Test Scenarios**:
  - Confirm that `.env` and backup files are inaccessible to unauthorized users.

---

### **6. Mismanaged Permissions**
- **File**: `mismanaged-permissions.json`
- **Purpose**:
  - Identify resources or endpoints with overly permissive access controls.
- **Test Scenarios**:
  - Validate that sensitive admin endpoints are protected by authentication.
  - Ensure that regular users cannot access resources requiring elevated privileges.

---

## 🚀 **How to Use**

### **1. Import Collections**
- Import the desired JSON file(s) into Postman.

### **2. Configure Environment Variables**
- Set up required variables in your Postman environment:
  - `baseUrl`: The API's base URL (e.g., `https://api.example.com`).
  - `userToken`: Authentication token for testing role-based access control.

### **3. Run Tests**
- Execute tests using Postman’s **Collection Runner** or via Newman CLI:
  ```bash
  newman run collection.json --environment environment.json
  ```

### **4. Analyze Results**
- Review test results to identify and remediate security misconfigurations.

---

## 🛠️ **Key Features**

### **Configuration Hardening**
- Ensure insecure defaults (e.g., default credentials, API keys) are eliminated.

### **Service Exposure**
- Detect open ports or exposed services that could be exploited.

### **Secure Communication**
- Validate SSL/TLS protocols and configurations to ensure encrypted communication.

### **Access Control**
- Identify overly permissive roles or unprotected resources that could lead to unauthorized access.

### **Sensitive Data Protection**
- Verify that sensitive files and backups are not publicly accessible.

---

## 📄 **Best Practices for Mitigation**

1. **Remove Default Credentials and API Keys**:
   - Require unique credentials and rotate keys regularly.
2. **Close Open Ports and Services**:
   - Limit services to only what is necessary and block unnecessary ports.
3. **Enforce Security Headers**:
   - Use headers like `CSP`, `HSTS`, and `X-Content-Type-Options` to harden HTTP responses.
4. **Secure Communication**:
   - Disable outdated protocols (e.g., SSL 3.0) and enforce TLS 1.2 or higher.
5. **Protect Sensitive Files**:
   - Restrict access to `.env`, backup, and configuration files.

---

## 🤝 **Contributing**

We welcome contributions to expand this section. You can:
- Submit new collections for additional security misconfiguration scenarios.
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

