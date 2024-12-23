# Improper Inventory Management Postman Collections

This section contains Postman collections for testing **Improper Inventory Management**, a critical risk identified in the **OWASP API Security Top 10 (2023)**. These vulnerabilities occur when APIs fail to properly manage their inventory, exposing deprecated or undocumented endpoints, shadow APIs, and insecure or outdated versions.

---

## 📂 **Included Collections**

### **1. Accessing Deprecated Endpoints**
- **File**: `deprecated-endpoints.json`
- **Purpose**:
  - Test for access to deprecated API endpoints that should be removed or disabled.
- **Test Scenarios**:
  - Attempt to call a deprecated endpoint and validate that it is inaccessible or returns appropriate error messages.

---

### **2. Discovering Shadow APIs**
- **File**: `shadow-apis.json`
- **Purpose**:
  - Identify shadow APIs (undocumented or unintended endpoints) that may expose sensitive resources.
- **Test Scenarios**:
  - Attempt to access an undocumented API and validate that it is restricted or inaccessible.

---

### **3. API Version Mismatch**
- **File**: `api-version-mismatch.json`
- **Purpose**:
  - Validate that outdated or unsupported API versions are properly handled.
- **Test Scenarios**:
  - Attempt to call outdated API versions and ensure they return appropriate responses (e.g., `410 Gone`).

---

### **4. Excessively Permissive APIs**
- **File**: `excessive-permissions.json`
- **Purpose**:
  - Test APIs for excessive permissions or unrestricted access to resources.
- **Test Scenarios**:
  - Attempt to access resources outside the authorized scope and validate that access is denied.

---

## 🚀 **How to Use**

### **1. Import Collections**
- Import the desired JSON file(s) from this directory into Postman.

### **2. Configure Environment Variables**
- Set up the following variables in your Postman environment:
  - `baseUrl`: The API's base URL (e.g., `https://api.example.com`).
  - `userToken`: Authentication token for user-level access.

### **3. Run Tests**
- Execute tests using Postman’s **Collection Runner** or via Newman CLI:
  ```bash
  newman run collection.json --environment environment.json
  ```

### **4. Analyze Results**
- Review test results to identify and address vulnerabilities related to API inventory management.
- Apply the recommended mitigations to secure your API inventory.

---

## 🛠️ **Key Features**

### **Deprecated Endpoint Testing**
- Validates that APIs properly disable or secure deprecated endpoints.

### **Shadow API Discovery**
- Detects undocumented or hidden APIs that could expose sensitive resources.

### **Version Control Validation**
- Ensures that outdated API versions return appropriate error responses and do not expose vulnerabilities.

### **Access Control for API Scopes**
- Tests for excessive permissions to ensure that APIs enforce proper access control for resources.

---

## 📄 **Best Practices for Mitigation**

1. **Maintain an Accurate API Inventory**:
   - Regularly document and review all API endpoints and versions.
   - Remove or disable unused or deprecated endpoints.
2. **Implement Strict Access Controls**:
   - Enforce authentication and authorization for all APIs, including shadow APIs.
3. **Use Versioning for APIs**:
   - Ensure clients are using supported API versions.
   - Deprecate older versions with clear communication and enforce their removal.
4. **Monitor and Log API Usage**:
   - Continuously monitor API usage to detect unauthorized access to shadow APIs or deprecated endpoints.

---

## 🤝 **Contributing**

We welcome contributions to expand this section. You can:
- Submit new collections for additional inventory management scenarios.
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
