# Cloud Security Postman Tests

This folder contains Postman collections designed to validate the **security configurations and compliance** of cloud resources. The tests include **general cloud security best practices** as well as platform-specific configurations for **AWS**, **Azure**, **Google Cloud Platform (GCP)**, and **IBM Cloud**.

---

## Cloud Security Categories

### **1. Data Security**
- **Collection**: `data-security.json`
- **Scenarios**:
  - Validate encryption for data at rest.
  - Check secure data transmission (HTTPS).
  - Test Key Management Service (KMS) configurations.

### **2. Logging and Monitoring**
- **Collection**: `logging-monitoring.json`
- **Scenarios**:
  - Retrieve and validate audit logs for access events.
  - Trigger and test real-time alerts for unauthorized access.

### **3. Secure Configurations**
- **Collection**: `secure-configurations.json`
- **Scenarios**:
  - Identify publicly exposed cloud resources.
  - Validate firewall rules and security group configurations.

---

## Cloud Platforms Covered

### **4. AWS Security**
- **Collection**: `aws-security.json`
- **Scenarios**:
  - Validate IAM role and policy enforcement.
  - Check S3 bucket configurations for secure access.
  - Test AWS Key Management Service (KMS) key status.

### **5. Azure Security**
- **Collection**: `azure-security.json`
- **Scenarios**:
  - Validate resource group access control.
  - Test secure storage account configurations.
  - Validate Azure Key Vault settings, including soft delete and purge protection.

### **6. Google Cloud Platform (GCP) Security**
- **Collection**: `gcp-security.json`
- **Scenarios**:
  - Validate IAM policies for projects.
  - Check cloud storage bucket configurations.
  - Validate encryption key states in Google Cloud KMS.

### **7. IBM Cloud Security**
- **Collection**: `ibm-cloud-security.json`
- **Scenarios**:
  - Validate resource access policies.
  - Test Cloud Object Storage (COS) bucket ACLs.
  - Validate encryption key states in IBM Key Protect.

---

## How to Use the Collections

### Prerequisites
1. Install [Postman](https://www.postman.com/downloads/) if not already installed.
2. Import the relevant JSON files for your tests:
   - `data-security.json`
   - `logging-monitoring.json`
   - `secure-configurations.json`
   - Cloud provider-specific collections:
     - `aws-security.json`
     - `azure-security.json`
     - `gcp-security.json`
     - `ibm-cloud-security.json`
3. Configure required environment variables based on the selected collection.

---

### Environment Variables

#### General:
- `baseUrl`: API base URL.
- `adminToken`, `userToken`: Authentication tokens for testing permissions.

#### Platform-Specific:
- **AWS**:
  - `awsBaseUrl`, `awsSignature`, `bucketName`, etc.
- **Azure**:
  - `azureBaseUrl`, `azureToken`, `subscriptionId`, etc.
- **GCP**:
  - `gcpToken`, `projectId`, `bucketName`, etc.
- **IBM Cloud**:
  - `ibmToken`, `accountId`, `bucketName`, etc.

---

### Steps
1. **Import Collections**:
   - Use the **Import** button in Postman to upload the JSON files.
2. **Set Variables**:
   - Configure required variables in your Postman environment.
3. **Run Tests**:
   - Execute individual requests or use the **Collection Runner** to validate multiple scenarios in bulk.

---

## Expected Results

### **Data Security**
- **Encryption at Rest**:
  - Status Code: `200 OK`
  - Encryption is enabled for all resources.
- **Encryption in Transit**:
  - All communications are secured over HTTPS.

### **Logging and Monitoring**
- **Audit Logs**:
  - Logs are accessible and include all relevant security events.
- **Real-Time Alerts**:
  - Alerts are triggered for unauthorized or suspicious activities.

### **Secure Configurations**
- **Firewall Rules**:
  - No insecure configurations (e.g., `0.0.0.0/0`) are found in security groups.
- **Publicly Accessible Resources**:
  - No critical resources are publicly exposed.

### **Cloud Platform-Specific**
- Each cloud platform collection validates configurations and security settings unique to that environment (e.g., S3 bucket ACLs for AWS, Key Vault settings for Azure).

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

This collection is proudly developed and maintained by [Average Joe's Hosting](https://averagejoeshosting.com/). We are committed to providing accessible, high-quality technology solutions. Explore more of our cloud security resources and secure your multi-cloud environments with confidence.

