# Server-Side Request Forgery (SSRF) Postman Collections

This section contains Postman collections for testing **Server-Side Request Forgery (SSRF)** vulnerabilities, a critical risk identified in the **OWASP API Security Top 10 (2023)**. SSRF vulnerabilities allow attackers to make unauthorized requests from a server to internal resources or sensitive endpoints, such as cloud provider metadata services.

---

## 📂 **Included Collections**

### **1. General SSRF Detection**
- **File**: `general-ssrf.json`
- **Purpose**:
  - Test for SSRF vulnerabilities by attempting to access internal network resources.
- **Test Scenarios**:
  - Attempt to access localhost (`127.0.0.1`) or other internal network addresses.
  - Validate that the API blocks requests to restricted resources.

---

### **2. SSRF Targeting AWS**
- **File**: `aws-ssrf.json`
- **Purpose**:
  - Detect SSRF vulnerabilities targeting AWS-specific resources, such as the EC2 metadata service.
- **Test Scenarios**:
  - Attempt to access `http://169.254.169.254/latest/meta-data/`.
  - Validate that unauthorized access to AWS metadata is denied.

---

### **3. SSRF Targeting GCP**
- **File**: `gcp-ssrf.json`
- **Purpose**:
  - Test for SSRF vulnerabilities targeting GCP metadata services.
- **Test Scenarios**:
  - Attempt to access `http://metadata.google.internal/computeMetadata/v1/`.
  - Ensure the API blocks access to GCP metadata endpoints.

---

### **4. SSRF Targeting Azure**
- **File**: `azure-ssrf.json`
- **Purpose**:
  - Detect SSRF vulnerabilities targeting Azure metadata endpoints.
- **Test Scenarios**:
  - Attempt to access `http://169.254.169.254/metadata/instance?api-version=2021-02-01`.
  - Validate that unauthorized access to Azure metadata is blocked.

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
- Review test results to ensure SSRF attempts to internal or cloud-specific resources are blocked.
- Address identified vulnerabilities by implementing proper input validation and access controls.

---

## 🛠️ **Key Features**

### **General SSRF Detection**
- Tests whether APIs block requests to internal or unauthorized resources, such as localhost or internal network addresses.

### **Cloud-Specific SSRF Detection**
- Validates that APIs are protected against attacks targeting AWS, GCP, and Azure metadata services.

### **Input Validation and Access Control Testing**
- Ensures that user-provided input, such as URLs, is validated and restricted to safe and expected patterns.

---

## 📄 **Best Practices for Mitigation**

1. **Input Validation**:
   - Validate user-supplied URLs to ensure they conform to an allowlist.
   - Reject requests containing IP addresses or hostnames pointing to internal resources.
2. **Restrict Outgoing Requests**:
   - Limit the server's ability to make outgoing requests, especially to internal network addresses or cloud metadata services.
3. **Cloud Provider Metadata Protection**:
   - Use cloud-specific configurations to block unauthorized metadata access.
     - AWS: Instance metadata service version 2 (IMDSv2).
     - GCP: Restrict access to `computeMetadata/v1`.
     - Azure: Deny access to metadata APIs at the virtual network level.
4. **Use a Secure Proxy**:
   - Route all outgoing requests through a secure proxy to filter and block malicious requests.
5. **Monitor for Anomalous Traffic**:
   - Set up logging and alerting for unusual patterns of server-initiated traffic.

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

