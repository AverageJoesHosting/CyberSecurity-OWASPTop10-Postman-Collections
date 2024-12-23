# Unrestricted Resource Consumption Postman Collections

This section contains Postman collections for testing **Unrestricted Resource Consumption**, a critical risk identified in the **OWASP API Security Top 10 (2023)**. These vulnerabilities occur when APIs fail to implement adequate controls, allowing excessive resource use that can lead to denial of service (DoS) or degraded performance.

---

## 📂 **Included Collections**

### **1. Excessive API Requests**
- **File**: `excessive-requests.json`
- **Purpose**:
  - Detect vulnerabilities where APIs do not enforce rate limits, allowing attackers to overwhelm the system with requests.
- **Test Scenarios**:
  - Simulate multiple requests to the same endpoint.
  - Validate that the API enforces rate limits and responds with appropriate status codes (e.g., `429 Too Many Requests`).

---

### **2. Oversized Payloads**
- **File**: `oversized-payloads.json`
- **Purpose**:
  - Identify vulnerabilities where APIs accept excessively large payloads, potentially leading to resource exhaustion.
- **Test Scenarios**:
  - Send a payload exceeding the maximum allowable size.
  - Ensure the API rejects oversized payloads with proper error messages (e.g., `413 Payload Too Large`).

---

### **3. Inefficient Query Handling**
- **File**: `inefficient-query-handling.json`
- **Purpose**:
  - Test APIs for vulnerabilities where inefficient queries consume excessive resources.
- **Test Scenarios**:
  - Send queries designed to perform expensive operations (e.g., searching a non-indexed column).
  - Validate that such queries are either blocked or handled efficiently.

---

## 🚀 **How to Use**

### **1. Import Collections**
- Import the desired JSON file(s) from this directory into Postman.

### **2. Configure Environment Variables**
- Set up the following variables in your Postman environment:
  - `baseUrl`: The API's base URL (e.g., `https://api.example.com`).
  - `authToken`: Authentication token for API requests.

### **3. Run Tests**
- Execute tests using Postman’s **Collection Runner** or via Newman CLI:
  ```bash
  newman run collection.json --environment environment.json
  ```

### **4. Analyze Results**
- Review test results to identify resource consumption vulnerabilities.
- Implement necessary changes, such as rate limits, payload restrictions, and query optimizations, to mitigate the risks.

---

## 🛠️ **Key Features**

### **Rate-Limiting Validation**
- Ensures APIs enforce rate-limiting policies to prevent excessive requests from overwhelming the system.

### **Payload Size Restrictions**
- Validates that APIs reject oversized payloads that could exhaust server resources.

### **Efficient Query Handling**
- Detects inefficient query processing vulnerabilities, ensuring APIs handle database queries efficiently.

---

## 📄 **Best Practices for Mitigation**

1. **Implement Rate-Limiting**:
   - Restrict the number of requests a client can make within a given timeframe.
   - Return status codes like `429 Too Many Requests` when limits are exceeded.
2. **Enforce Payload Size Limits**:
   - Define maximum payload sizes for each endpoint and reject oversized requests.
3. **Optimize Database Queries**:
   - Use indexed columns and efficient query structures to reduce resource consumption.
4. **Monitor and Log Resource Usage**:
   - Continuously monitor API resource usage and log anomalies for further investigation.
5. **Introduce Resource Quotas**:
   - Limit resource usage per user, tenant, or session to prevent abuse.

---

## 🤝 **Contributing**

We welcome contributions to expand this section. You can:
- Submit new collections for additional resource consumption scenarios.
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

