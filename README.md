# 🚀 Cybersecurity Postman Collections

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![GitHub Issues](https://img.shields.io/github/issues/AverageJoesHosting/CyberSecurity-OWASPTop10-Postman-Collections.svg)
![GitHub Stars](https://img.shields.io/github/stars/AverageJoesHosting/CyberSecurity-OWASPTop10-Postman-Collections.svg)

## Overview

**Cybersecurity Postman Collections** is a comprehensive suite developed by **Average Joe's Hosting LLC** that provides a collection of **Postman collections** tailored for testing, auditing, and enhancing the security of applications, APIs, and cloud environments. These collections are meticulously designed to align with the latest **OWASP standards** and other prominent security frameworks, enabling users to efficiently identify and mitigate vulnerabilities within their systems.

## 📌 Features

### 🔒 Comprehensive Security Testing
- **OWASP Top 10 (2025):** Collections to test critical web application risks.
- **OWASP API Security Top 10 (2023):** API-specific security testing collections.
- **General API Security:** Validate authentication, input validation, transport security, and more.
- **Cloud Security:** Collections to detect misconfigurations in AWS, Azure, GCP, and IBM Cloud.
- **Compliance Validation:** Preconfigured collections for SOC 2, HIPAA, PCI-DSS, and GDPR.

### ⚙️ CI/CD Integration
- **Automation Scripts:** Seamlessly integrate security tests into your CI/CD pipelines using scripts and workflows.
- **Newman Support:** Execute Postman collections via Newman for automated testing.
- **Reporting:** Generate JSON and HTML reports for easy analysis and documentation.

### 🛡️ Benchmarking and Scoring
- **OWASP Alignment:** Ensure your security measures meet the latest OWASP standards.
- **Custom Scoring:** Implement scoring mechanisms to prioritize vulnerabilities based on severity and impact.

### 📂 Organized Structure
- **Modular Collections:** Each security category is organized into separate Postman collections for targeted testing.
- **Reusable Components:** Utilize shared environments and variables across multiple collections to streamline testing processes.

### 📝 Documentation and Support
- **Detailed README:** Comprehensive instructions and guidelines to help you get started quickly.
- **Support Scripts:** Helper scripts to facilitate environment setup and test execution.

## 📂 Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AverageJoesHosting/CyberSecurity-OWASPTop10-Postman-Collections.git
   ```

2. **Navigate to the Directory:**
   ```bash
   cd CyberSecurity-OWASPTop10-Postman-Collections
   ```

3. **Install Dependencies:**
   Ensure you have [Postman](https://www.postman.com/downloads/) installed. For CI/CD integration, install [Newman](https://www.npmjs.com/package/newman):
   ```bash
   npm install -g newman
   ```

## 💻 Usage

Execute the Postman collections using the Postman interface or automate them with Newman.

### 1. **Import Collections**
- Open Postman.
- Click on **Import** and select the desired collections from the `/collections/` directory.

### 2. **Configure Environments**
- Import environment files located in the `/environments/` directory (`staging`, `production`, etc.).
- Set variables such as `baseUrl`, `authToken`, and `apiKey` as required.

### 3. **Run Tests**
- **Via Postman:**
  - Use the **Collection Runner** to execute the imported collections.
- **Via Newman:**
  - Execute collections from the command line for automation:
    ```bash
    newman run /path/to/collection.json -e /path/to/environment.json -r html,json
    ```

### 4. **Review Results**
- Analyze results directly in Postman or review the generated JSON and HTML reports for comprehensive insights.

## 🔖 Example Commands

- **Run OWASP Top 10 Collection with Newman:**
  ```bash
  newman run collections/OWASP_Top_10_Postman_Collection.json -e environments/staging.postman_environment.json -r html,json
  ```

- **Run API Security Top 10 Collection in Production:**
  ```bash
  newman run collections/OWASP_API_Security_Top_10_Postman_Collection.json -e environments/production.postman_environment.json -r html,json
  ```

- **Automate Tests in CI/CD Pipeline:**
  Integrate the following script into your GitHub Actions or Jenkins pipeline to automate security testing:
  ```bash
  newman run collections/OWASP_Top_10_Postman_Collection.json -e environments/staging.postman_environment.json -r html,json --reporter-html-export reports/owasp_top10_report.html --reporter-json-export reports/owasp_top10_report.json
  ```

## 📂 Output Structure

```
<output_dir>/
├── reports/
│   ├── owasp_top10_report.html
│   ├── owasp_top10_report.json
│   ├── api_security_top10_report.html
│   ├── api_security_top10_report.json
│   └── ...
├── environments/
│   ├── staging.postman_environment.json
│   ├── production.postman_environment.json
│   └── ...
├── collections/
│   ├── OWASP_Top_10_Postman_Collection.json
│   ├── OWASP_API_Security_Top_10_Postman_Collection.json
│   ├── General_API_Security_Postman_Collection.json
│   ├── Cloud_Security_Postman_Collection.json
│   ├── Compliance_Validation_Postman_Collection.json
│   └── CI_CD_Integration_Postman_Collection.json
└── scripts/
    └── ci-cd-integration/
        └── run-collections.sh
```

## 🛠️ Logging

**Cybersecurity Postman Collections** maintains detailed logs to assist with debugging and tracking. Logs are saved in the `reports/` directory in both JSON and HTML formats for comprehensive analysis.

## 🤝 Contributing

We welcome contributions to enhance and expand our security testing capabilities:

1. **Fork the Repository:**
   Click the "Fork" button at the top right of the repository page.

2. **Clone Your Fork:**
   ```bash
   git clone https://github.com/YourUsername/CyberSecurity-OWASPTop10-Postman-Collections.git
   cd CyberSecurity-OWASPTop10-Postman-Collections
   ```

3. **Create a New Branch:**
   ```bash
   git checkout -b feature/YourFeatureName
   ```

4. **Make Your Changes:**
   - Add new Postman collections or update existing ones.
   - Enhance scripts for better CI/CD integration.
   - Improve documentation and guidelines.

5. **Commit Your Changes:**
   ```bash
   git commit -m "Add your commit message"
   ```

6. **Push to Your Fork:**
   ```bash
   git push origin feature/YourFeatureName
   ```

7. **Create a Pull Request:**
   Go to the original repository and click "Compare & pull request" to submit your changes.

For detailed contribution guidelines, see the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 📞 Support

For questions or assistance, reach out to **Average Joe's Hosting**:

- 🌐 **Website:** [AverageJoesHosting.com](https://averagejoeshosting.com/)
- 📧 **Email:** [helpme@averagejoeshosting.com](mailto:helpme@averagejoeshosting.com)
- ☎️ **Phone:** (888) 563-1216

## 👋 About Average Joe's Hosting

[Average Joe's Hosting](https://averagejoeshosting.com/) specializes in delivering affordable, high-quality technology solutions to small businesses and organizations. Our mission is to make security and technology accessible to everyone.

Let’s work together to secure the web, one test at a time! 🌟

## Follow Us on Social Media

- 🐦 **Twitter:** [@AverageJoesHost](https://twitter.com/AverageJoesHost)
- 🎥 **YouTube:** [Average Joe's Hosting on YouTube](https://www.youtube.com/channel/YourChannel)
- 👥 **Facebook:** [Average Joe's Hosting on Facebook](https://www.facebook.com/AverageJoesHostingLLC)
- 💼 **LinkedIn:** [Average Joe's Hosting on LinkedIn](https://www.linkedin.com/company/averagejoeshostingllc)

🎉 Get started with Automation Booster and let your Discord server do the work for you!

---

> **Note:** Ensure all placeholder URLs and contact information are updated with your actual details to maintain accurate and professional communication channels.