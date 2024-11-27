# Broken Function Level Authorization Postman Collections

This section contains Postman collections for testing **Broken Function Level Authorization**, a critical risk identified in the **OWASP API Security Top 10 (2023)**. These vulnerabilities occur when APIs fail to properly enforce authorization at the function level, allowing users to access or execute privileged functions they are not authorized to use.

---

## 📂 **Included Collections**

### **1. Unauthorized Function Access**
- **File**: `unauthorized-function-access.json`
- **Purpose**:
  - Validate that users cannot access functions or endpoints that are restricted to higher privilege levels.
- **Test Scenarios**:
  - Attempt to execute admin-only operations, such as deleting a user account, with a non-privileged token.
  - Ensure unauthorized function calls are denied with proper error messages (e.g., `403 Forbidden`).

---

### **2. Privilege Escalation Function Abuse**
- **File**: `privilege-escalation.json`
- **Purpose**:
  - Detect privilege escalation attempts where users try to elevate their roles or permissions through unauthorized function calls.
- **Test Scenarios**:
  - Attempt to update a user's role to `admin` without proper authorization.
  - Validate that role changes are blocked for unauthorized users.

---

### **3. Functionality Access via Parameter Tampering**
- **File**: `parameter-tampering.json`
- **Purpose**:
  - Ensure that users cannot access restricted functionality by tampering with parameters.
- **Test Scenarios**:
  - Modify request parameters to invoke privileged functions (e.g., accessing an admin dashboard).
  - Validate that tampering attempts are denied with appropriate error responses.

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
- Review test results to ensure function-level authorization controls are enforced.
- Address any vulnerabilities by implementing proper role-based access controls (RBAC) or permission checks.

---

## 🛠️ **Key Features**

### **Function Access Control**
- Validates that only authorized users can access specific API functions.
- Ensures admin-only or sensitive operations are restricted to privileged accounts.

### **Privilege Escalation Prevention**
- Detects unauthorized attempts to elevate roles or permissions through API calls.

### **Tampering Detection**
- Identifies vulnerabilities where functionality can be accessed through manipulated parameters.

---

## 📄 **Best Practices for Mitigation**

1. **Implement Role-Based Access Control (RBAC)**:
   - Restrict access to functions based on user roles or permissions.
   - Enforce function-level authorization checks on every request.
2. **Validate Input Parameters**:
   - Sanitize and validate request parameters to prevent unauthorized functionality access.
3. **Deny by Default**:
   - Default to denying access unless explicitly allowed based on roles and permissions.
4. **Log and Monitor Function Access**:
   - Log all function calls and unauthorized access attempts for auditing and anomaly detection.

---

## 🤝 **Contributing**

We welcome contributions to expand this section. You can:
- Submit new collections for additional function-level authorization scenarios.
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

