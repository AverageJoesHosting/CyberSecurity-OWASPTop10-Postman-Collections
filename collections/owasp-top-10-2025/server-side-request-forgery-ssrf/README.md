# Server-Side Request Forgery (SSRF) Postman Collections

This section contains Postman collections for testing **Server-Side Request Forgery (SSRF)** vulnerabilities, a critical risk identified in the **OWASP Top 10 (2025)**. SSRF vulnerabilities allow attackers to make requests from a server to unauthorized resources, potentially accessing sensitive internal or cloud-specific resources.

---

## 📂 **Included Collections**

### **1. General SSRF Detection**
- **File**: `ssrf-detection.json`
- **Purpose**:
  - Test for SSRF vulnerabilities by attempting to access internal network resources or unauthorized endpoints.
- **Test Scenarios**:
  - Access local network resources (e.g., `http://127.0.0.1:80`).
  - Attempt to retrieve data from the AWS metadata service.

---

### **2. SSRF in AWS Services**
- **File**: `ssrf-aws.json`
- **Purpose**:
  - Test for SSRF vulnerabilities targeting AWS-specific resources.
- **Test Scenarios**:
  - Attempt to access the AWS EC2 metadata service to retrieve sensitive IAM role credentials.

---

### **3. SSRF in GCP Services**
- **File**: `ssrf-gcp.json`
- **Purpose**:
  - Test for SSRF vulnerabilities targeting GCP-specific resources.
- **Test Scenarios**:
  - Attempt to access the GCP metadata service to retrieve sensitive instance metadata.

---

### **4. SSRF in Azure Services**
- **File**: `ssrf-azure.json`
- **Purpose**:
  - Test for SSRF vulnerabilities targeting Azure-specific resources.
- **Test Scenarios**:
  - Attempt to access the Azure metadata service for instance details and sensitive configurations.

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
- Verify that SSRF attempts to internal or cloud-specific endpoints are blocked.
- Address any failures by implementing robust input validation and allowlist mechanisms.

---

## 🛠️ **Key Features**

### **General SSRF Detection**
- Validates whether internal resources (e.g., localhost, internal IPs) can be accessed through the server.

### **Cloud-Specific SSRF Testing**
- Ensures that AWS, GCP, and Azure metadata endpoints are protected from unauthorized access.
- Tests common SSRF vectors targeting cloud environments.

### **Prevention Validation**
- Checks if input validation and request filtering mechanisms are in place to prevent SSRF attempts.

---

## 📄 **Best Practices for Mitigation**

1. **Input Validation**:
   - Validate all user-provided URLs to ensure they conform to expected patterns.
   - Use allowlists for URLs or IP ranges.
2. **Restrict Network Access**:
   - Block access to internal resources (e.g., `169.254.169.254`, `127.0.0.1`) from APIs handling user-supplied URLs.
3. **Metadata Service Protection**:
   - Use cloud provider-specific mechanisms to restrict metadata service access.
4. **Monitoring and Alerts**:
   - Log all server-side requests and set up alerts for suspicious patterns (e.g., requests to metadata endpoints).
5. **Use Proxy Servers**:
   - Route all outgoing requests through a secure proxy to enforce additional checks.

---

## 🤝 **Contributing**

We welcome contributions to expand this section. You can:
- Submit new collections for additional SSRF scenarios.
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

