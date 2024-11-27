# Broken Object Property Level Authorization Postman Collections

This section contains Postman collections for testing **Broken Object Property Level Authorization**, a critical risk identified in the **OWASP API Security Top 10 (2023)**. These vulnerabilities occur when APIs fail to enforce proper access control at the property level, allowing users to manipulate or view object fields they are not authorized to access.

---

## 📂 **Included Collections**

### **1. Unauthorized Property Modification**
- **File**: `unauthorized-property-modification.json`
- **Purpose**:
  - Validate that users cannot modify object properties they do not have access to.
- **Test Scenarios**:
  - Attempt to modify admin-only fields, such as `isAdmin`.
  - Ensure unauthorized modifications are rejected with proper error messages.

---

### **2. Unauthorized Property Access**
- **File**: `unauthorized-property-access.json`
- **Purpose**:
  - Verify that users cannot view restricted object properties.
- **Test Scenarios**:
  - Attempt to access sensitive fields, such as `isAdmin`, and ensure they are not included in the API response.

---

### **3. Property Authorization Bypass**
- **File**: `property-authorization-bypass.json`
- **Purpose**:
  - Detect vulnerabilities that allow bypassing property-level authorization through tampering or unintended behavior.
- **Test Scenarios**:
  - Attempt to update sensitive fields, such as `isVerified`, using parameter tampering or direct modification.

---

## 🚀 **How to Use**

### **1. Import Collections**
- Import the desired JSON file(s) from this directory into Postman.

### **2. Configure Environment Variables**
- Set up the following variables in your Postman environment:
  - `baseUrl`: The API's base URL (e.g., `https://api.example.com`).
  - `userToken`: Authentication token for testing with user-level access.

### **3. Run Tests**
- Execute tests using Postman’s **Collection Runner** or via Newman CLI:
  ```bash
  newman run collection.json --environment environment.json
  ```

### **4. Analyze Results**
- Review test results to ensure that property-level access control is enforced.
- Address any issues by implementing strict property-level authorization checks.

---

## 🛠️ **Key Features**

### **Access Control Validation**
- Ensures that users cannot access or modify object properties they do not have permissions for.

### **Property-Level Security**
- Tests for unauthorized access to sensitive fields, such as admin flags or verification statuses.

### **Authorization Bypass Detection**
- Identifies vulnerabilities where property-level authorization checks can be bypassed through tampering.

---

## 📄 **Best Practices for Mitigation**

1. **Implement Property-Level Access Control**:
   - Enforce strict authorization checks for each object property based on user roles and permissions.
2. **Validate Input**:
   - Sanitize and validate user inputs to ensure unauthorized fields are not processed.
3. **Use Allowlists**:
   - Define a property allowlist for each API endpoint, restricting which fields can be modified or accessed.
4. **Log Access Attempts**:
   - Monitor and log unauthorized access or modification attempts for audit and alerting purposes.

---

## 🤝 **Contributing**

We welcome contributions to expand this section. You can:
- Submit new collections for additional test scenarios.
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

