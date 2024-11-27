# Cybersecurity Postman Collections

This repository provides a comprehensive suite of **Postman collections** for testing, auditing, and enhancing the security of applications, APIs, and cloud environments. Each collection is meticulously designed to align with the latest **OWASP standards** and other security frameworks, enabling developers, security engineers, and DevOps teams to identify and mitigate vulnerabilities effectively.

---

## **Overview**

This project is a centralized hub for:
- **OWASP Top 10 (2025)**: Testing the most critical web application security risks.
- **OWASP API Security Top 10 (2023)**: Addressing the latest API-specific vulnerabilities.
- **General API Security**: Validating common security measures like authentication, input validation, and transport security.
- **Cloud Security**: Detecting misconfigurations in popular cloud platforms (AWS, Azure, GCP, IBM).
- **Compliance Validation**: Ensuring adherence to standards like SOC 2, HIPAA, PCI-DSS, and GDPR.
- **CI/CD Integration**: Automating security testing as part of your development pipeline.

Each collection includes pre-configured test cases, detailed documentation, and examples for seamless integration and customization.

---

## **Categories**

### **1. OWASP Top 10 (2025)**

The OWASP Top 10 identifies the most critical security risks to web applications. This repository includes collections for each of the following risks:
1. **Broken Access Control**: Testing role- and object-based access controls.
2. **Cryptographic Failures**: Validating encryption configurations, key management, and sensitive data protection.
3. **Injection**: Detecting vulnerabilities like SQL, NoSQL, LDAP, and XSS injection.
4. **Insecure Design**: Identifying architectural flaws and insecure workflows.
5. **Security Misconfiguration**: Checking for default credentials, open ports, and unnecessary services.
6. **Vulnerable and Outdated Components**: Ensuring third-party dependencies are secure and up-to-date.
7. **Identification and Authentication Failures**: Testing multi-factor authentication, session management, and credential validation.
8. **Software and Data Integrity Failures**: Validating the integrity of software packages and data pipelines.
9. **Security Logging and Monitoring Failures**: Ensuring proper logging and alerting for suspicious activities.
10. **Server-Side Request Forgery (SSRF)**: Identifying SSRF vulnerabilities in API and backend calls.

For more details, visit the [OWASP Top 10 (2025)](https://owasp.org/www-project-top-ten/) documentation.

---

### **2. OWASP API Security Top 10 (2023)**

APIs are a critical attack surface in modern applications. This repository includes collections for the following API-specific vulnerabilities:
1. **Broken Object Level Authorization (BOLA)**
2. **Broken Authentication**
3. **Broken Object Property Level Authorization**
4. **Unrestricted Resource Consumption**
5. **Broken Function Level Authorization**
6. **Unrestricted Access to Sensitive Business Flows**
7. **Server-Side Request Forgery (SSRF)**
8. **Security Misconfiguration**
9. **Improper Inventory Management**
10. **Unsafe Consumption of APIs**

Learn more about these vulnerabilities at the [OWASP API Security Top 10 (2023)](https://owasp.org/API-Security/editions/2023/en/0x00-header/).

---

### **3. General API Security**

This category includes templates and tests for common API security measures:
- **Authentication and Authorization**:
  - Validate token-based and API key-based access controls.
  - Test multi-factor authentication (MFA) and role-based access (RBAC).
- **Input Validation and Injection Prevention**:
  - Detect SQL, NoSQL, LDAP, and command injection vulnerabilities.
  - Validate input sanitization and encoding.
- **Rate Limiting and Abuse Prevention**:
  - Test rate-limiting mechanisms and responses to excessive requests.
- **Error Handling and Information Disclosure**:
  - Ensure error responses do not expose sensitive details.
- **Transport Security**:
  - Validate HTTPS enforcement and proper TLS configurations.

---

### **4. Cloud Security**

This section provides collections to test security configurations across popular cloud platforms:
1. **AWS Security**:
   - Validate IAM roles, S3 bucket ACLs, and AWS KMS key configurations.
2. **Azure Security**:
   - Test resource group access, storage account configurations, and Key Vault security.
3. **Google Cloud Platform (GCP) Security**:
   - Validate IAM policies, storage bucket settings, and encryption key management.
4. **IBM Cloud Security**:
   - Test resource access policies, COS bucket ACLs, and encryption configurations.

Additionally, general collections for **Data Security**, **Logging & Monitoring**, and **Secure Configurations** ensure broader cloud security validation.

---

### **5. Compliance Validation**

Pre-configured collections for testing against industry standards:
- **SOC 2**: Ensure data security, availability, and confidentiality requirements are met.
- **HIPAA**: Validate compliance with healthcare security and privacy rules.
- **PCI-DSS**: Test configurations for payment card data security.
- **GDPR**: Ensure data handling meets privacy and security requirements for personal data.

---

### **6. CI/CD Integration**

The repository includes scripts and workflows to automate security testing as part of CI/CD pipelines. The `/scripts/ci-cd-integration/` folder provides:
- **`run-collections.js`**:
  - Automates the execution of Postman collections with Newman.
  - Generates JSON and HTML reports for analysis.
- **GitHub Actions Workflow**:
  - Example configuration for running tests on every commit or pull request.
- **Jenkins Pipeline Script**:
  - Parallel execution of collections with reporting and Slack notifications.

Refer to the `/scripts/ci-cd-integration/README.md` for detailed setup instructions.

---

## **Usage**

### **1. Import Collections**
- Navigate to the `/collections/` directory and download the desired collections.
- Import them into Postman using the **Import** feature.

### **2. Configure Environments**
- Use the environment files from the `/environments/` directory (`production-environment.json`, `staging-environment.json`).
- Configure variables such as:
  - `baseUrl`: API base URL.
  - `authToken`, `apiKey`: Credentials for authentication.
  - Cloud-specific variables (e.g., `bucketName`, `subscriptionId`).

### **3. Run Tests**
- Execute collections individually or batch-run them using:
  - Postman’s **Collection Runner**.
  - The provided `run-collections.js` script with Newman.

### **4. Analyze Results**
- Review test results in CLI, JSON, or HTML formats.
- Use reporting tools to identify and address vulnerabilities.

---

## **Contributing**

We welcome contributions to enhance these collections, scripts, and templates:
- **Submit Issues**: Report bugs or suggest new test cases.
- **Contribute Templates**: Add reusable test cases to the `/templates/` folder.
- **Enhance Scripts**: Improve automation workflows in `/scripts/ci-cd-integration/`.

Refer to the [Contributing Guidelines](CONTRIBUTING.md) for more details.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Support**

For questions or assistance, contact **Average Joe's Hosting**:
- **Website**: [averagejoeshosting.com](https://averagejoeshosting.com/)
- **Email**: [helpme@averagejoeshosting.com](mailto:helpme@averagejoeshosting.com)
- **Phone**: (888) 563-1216

---

## **About Average Joe's Hosting**

This repository is maintained by [Average Joe's Hosting](https://averagejoeshosting.com/), a company dedicated to providing affordable, high-quality technology solutions. We specialize in supporting small businesses with the tools they need to enhance security, compliance, and efficiency in their technology stacks.

Explore our resources and join us in securing the web, one application at a time!

