# 🚀 Cybersecurity Postman Collections

This repository provides a comprehensive suite of **Postman collections** for testing, auditing, and enhancing the security of applications, APIs, and cloud environments. These collections are designed to align with the latest **OWASP standards** and other security frameworks, making it easier to identify and mitigate vulnerabilities.

---

## 📌 **Overview**

### What You’ll Find Here:
- **OWASP Top 10 (2025)**: Collections to test critical web application risks.
- **OWASP API Security Top 10 (2023)**: API-specific security testing collections.
- **General API Security**: Validate authentication, input validation, transport security, and more.
- **Cloud Security**: Collections to detect misconfigurations in AWS, Azure, GCP, and IBM Cloud.
- **Compliance Validation**: Preconfigured collections for SOC 2, HIPAA, PCI-DSS, and GDPR.
- **CI/CD Integration**: Scripts and workflows to integrate these tests into your pipelines.

🎯 **Goal**: Provide a one-stop solution for security testing across multiple domains, with easy-to-use collections that integrate seamlessly into your workflows.

---

## 📂 **Categories**

### 🔒 **OWASP Top 10 (2025)**
The OWASP Top 10 highlights the most critical web application risks. This repository includes collections for:

1. **Broken Access Control**
2. **Cryptographic Failures**
3. **Injection**
4. **Insecure Design**
5. **Security Misconfiguration**
6. **Vulnerable and Outdated Components**
7. **Identification and Authentication Failures**
8. **Software and Data Integrity Failures**
9. **Security Logging and Monitoring Failures**
10. **Server-Side Request Forgery (SSRF)**

Learn more: [OWASP Top 10 (2025)](https://owasp.org/www-project-top-ten/)

---

### 🛡️ **OWASP API Security Top 10 (2023)**
APIs are a major attack vector in modern applications. Our collections cover:

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

Learn more: [OWASP API Security Top 10 (2023)](https://owasp.org/API-Security/editions/2023/en/0x00-header/)

---

### 🌐 **General API Security**
This category includes reusable tests for:
- **Authentication and Authorization**: Validate tokens, API keys, and RBAC.
- **Input Validation**: Prevent SQL, NoSQL, and XSS injection.
- **Rate Limiting and Abuse Prevention**: Test throttling and response handling.
- **Transport Security**: Validate HTTPS and TLS configurations.
- **Error Handling**: Ensure no sensitive details are leaked.

---

### ☁️ **Cloud Security**
Collections tailored for popular cloud platforms:
- **AWS**: Test IAM roles, S3 bucket ACLs, and AWS KMS.
- **Azure**: Validate resource group access, Key Vault settings, and storage configurations.
- **Google Cloud (GCP)**: Check IAM policies, bucket security, and encryption keys.
- **IBM Cloud**: Test COS bucket ACLs and resource access policies.

Also includes **General Cloud Security** collections for:
- **Data Security**
- **Logging & Monitoring**
- **Secure Configurations**

---

### 📜 **Compliance Validation**
Preconfigured collections for testing against industry standards:
- **SOC 2**: Security, availability, and confidentiality controls.
- **HIPAA**: Privacy and security for healthcare data.
- **PCI-DSS**: Payment card industry compliance.
- **GDPR**: Privacy for personal data.

---

### 🔄 **CI/CD Integration**
Automate security testing as part of your CI/CD workflows:
- **Scripts**:
  - `run-collections.js`: Automates collection execution with Newman.
- **Workflows**:
  - GitHub Actions and Jenkins pipeline examples.
- **Reports**:
  - JSON and HTML output for easy analysis.

Explore the `/scripts/ci-cd-integration/README.md` for detailed instructions.

---

## 💻 **How to Use**

### 1. **Import Collections**
- Navigate to the `/collections/` directory.
- Import your desired collections into Postman.

### 2. **Configure Environments**
- Use environment files from `/environments/` (`staging` or `production`).
- Set variables like `baseUrl`, `authToken`, and `apiKey`.

### 3. **Run Tests**
- Execute tests using:
  - Postman’s **Collection Runner**.
  - The `run-collections.js` script via Newman.

### 4. **Review Results**
- Analyze results in CLI, JSON, or HTML formats.
- Use CI/CD workflows for automated test execution.

---

## 🤝 **Contributing**

We welcome contributions to improve the project:
- **Submit Issues**: Report bugs or suggest new test cases.
- **Add Templates**: Enhance the `/templates/` folder with reusable tests.
- **Improve Scripts**: Update automation workflows for CI/CD integration.

See the [Contributing Guidelines](CONTRIBUTING.md) for more details.

---

## 📜 **License**

This project is licensed under the [MIT License](LICENSE).

---

## 📞 **Support**

For questions or assistance, reach out to **Average Joe's Hosting**:
- 🌐 **Website**: [averagejoeshosting.com](https://averagejoeshosting.com/)
- 📧 **Email**: [helpme@averagejoeshosting.com](mailto:helpme@averagejoeshosting.com)
- ☎️ **Phone**: (888) 563-1216

---

## 👋 **About Average Joe's Hosting**

[Average Joe's Hosting](https://averagejoeshosting.com/) specializes in delivering affordable, high-quality technology solutions to small businesses and organizations. Our mission is to make security and technology accessible to everyone.

Let’s work together to secure the web, one test at a time! 🌟

