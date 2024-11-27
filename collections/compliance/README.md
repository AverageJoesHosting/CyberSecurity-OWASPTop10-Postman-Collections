# Compliance Postman Tests

This folder contains Postman collections designed to test for **API Compliance** with security and privacy standards such as **GDPR**, **HIPAA**, **PCI DSS**, **SOC 2**, and **CMMC**. These tests ensure APIs adhere to regulations for secure data handling, access control, and audit logging.

---

## Compliance Standards Covered

### **1. GDPR (General Data Protection Regulation)**
- **Key Focus**:
  - Data Subject Access Requests (DSARs).
  - Data deletion requests.
  - Data breach notifications.
- **Collection**: `gdpr-compliance.json`

### **2. HIPAA (Health Insurance Portability and Accountability Act)**
- **Key Focus**:
  - Secure handling of Protected Health Information (PHI).
  - Access controls for PHI.
  - Audit trail validation.
- **Collection**: `hipaa-compliance.json`

### **3. PCI DSS (Payment Card Industry Data Security Standard)**
- **Key Focus**:
  - Secure transmission of payment card data.
  - Tokenization and masking of sensitive payment information.
- **Collection**: `pci-compliance.json`

### **4. SOC 2 (System and Organization Controls 2)**
- **Key Focus**:
  - Access control enforcement.
  - Secure transmission of data.
  - Comprehensive audit logging.
- **Collection**: `soc2-compliance.json`

### **5. CMMC (Cybersecurity Maturity Model Certification)**
- **Key Focus**:
  - Controlled Unclassified Information (CUI) security.
  - Encryption and secure transmission of CUI.
  - Unauthorized access prevention.
- **Collection**: `cmmc-compliance.json`

---

## How to Use the Collections

### Prerequisites
1. Install [Postman](https://www.postman.com/downloads/) if not already installed.
2. Import the relevant JSON files into your Postman workspace:
   - `gdpr-compliance.json`
   - `hipaa-compliance.json`
   - `pci-compliance.json`
   - `soc2-compliance.json`
   - `cmmc-compliance.json`
3. Configure the required environment variables.

---

### Environment Variables
Each collection uses a set of environment variables for flexibility. These include:
- `baseUrl`: The base URL of your API (e.g., `https://example.com`).
- `userToken`: Token for a regular authenticated user.
- `adminToken`: Token for an admin user (if applicable).
- `documentId`: Identifier for specific resources like CUI data.
- `validApiKey`: A valid API key for accessing secured endpoints.

---

### Steps
1. **Import Collections**:
   - Use the **Import** button in Postman to upload the JSON files.
2. **Set Variables**:
   - Configure the required variables in your environment.
3. **Run Tests**:
   - Execute individual requests or use the **Collection Runner** to validate multiple scenarios in a batch.

---

## Expected Results

### GDPR Compliance
- **DSARs**:
  - Status Code: `200 OK`
  - Response indicates request processing.
- **Data Deletion Requests**:
  - Status Code: `200 OK`
  - Response confirms request is accepted.

### HIPAA Compliance
- **PHI Access**:
  - Status Code: `200 OK` for authorized users.
  - Status Code: `403 Forbidden` or `401 Unauthorized` for unauthorized access.
- **Audit Logging**:
  - Logs should capture all access and modification events for PHI.

### PCI DSS Compliance
- **Secure Payment Data Transmission**:
  - Data is transmitted over HTTPS only.
- **Tokenization**:
  - Sensitive payment data is replaced with a token in the response.

### SOC 2 Compliance
- **Access Control**:
  - Status Code: `200 OK` for authorized users.
  - Status Code: `401 Unauthorized` or `403 Forbidden` for unauthorized requests.
- **Audit Logs**:
  - Logs are available for admin users and detail access events.

### CMMC Compliance
- **CUI Security**:
  - Status Code: `200 OK` for authorized users.
  - Status Code: `401 Unauthorized` for unauthorized requests.
- **Encryption**:
  - Data is transmitted over secure channels (HTTPS).

---

## Contribution and Support

We welcome contributions to improve or expand these collections. You can:
- **Report Issues**: [Open an issue](https://github.com/AverageJoesHosting/CyberSecurity-OWASPTop10-Postman-Collections/issues).
- **Submit Improvements**: Create a pull request with your updates or suggestions.

For further assistance, contact [Average Joe's Hosting](https://averagejoeshosting.com/):
- **Website**: [averagejoeshosting.com](https://averagejoeshosting.com/)
- **Email**: [helpme@averagejoeshosting.com](mailto:helpme@averagejoeshosting.com)
- **Phone**: (888) 563-1216

---

## About Average Joe's Hosting

This collection is proudly developed and maintained by [Average Joe's Hosting](https://averagejoeshosting.com/). We are committed to providing accessible, high-quality technology solutions. Explore more of our cybersecurity resources and secure your APIs with confidence.
