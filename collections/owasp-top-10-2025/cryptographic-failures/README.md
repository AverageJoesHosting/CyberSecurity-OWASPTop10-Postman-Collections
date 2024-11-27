# Cryptographic Failures Postman Tests

This folder contains Postman collections specifically designed to test for **Cryptographic Failures**, as outlined in the [OWASP Top 10 (2025)](https://owasp.org/www-project-top-ten/). These tests help identify vulnerabilities caused by improper or outdated cryptographic implementations, ensuring sensitive data is protected in transit and at rest.

---

## What Are Cryptographic Failures?

Cryptographic failures occur when:
- Sensitive data (e.g., passwords, tokens, personal information) is not properly encrypted.
- Outdated or weak cryptographic protocols are used (e.g., TLS 1.0, RC4, or NULL ciphers).
- SSL/TLS configurations are misconfigured, exposing APIs to attacks like Man-in-the-Middle (MITM).
- Sensitive information is exposed in plain text during communication or in API responses.

---

## Test Scenarios Covered

### 1. **Weak or Deprecated Cipher Suites**
- Ensures only secure protocols like TLS 1.2 and TLS 1.3 are used.
- Validates response headers for the absence of weak ciphers (e.g., RC4, NULL).

### 2. **Unencrypted Data**
- Detects sensitive data like passwords or tokens being sent in plain text.
- Ensures HTTPS is used for secure data transmission.

### 3. **TLS Configuration**
- Validates that the API enforces secure transport with HTTP Strict Transport Security (HSTS).
- Ensures cookies are marked as secure and transmitted only over encrypted channels.
- Prompts for manual validation of certificate configurations and TLS protocol compliance.

### 4. **Key Exposure**
- Ensures API keys, access tokens, or secrets are not exposed in:
  - Response bodies.
  - Response headers.
  - Cookies.

---

## How to Use the Collections

### Prerequisites
1. Install [Postman](https://www.postman.com/downloads/) if not already installed.
2. Import the relevant JSON files into your Postman workspace:
   - `weak-ciphers.json`
   - `unencrypted-data.json`
   - `tls-configuration.json`
   - `key-exposure.json`
3. Set up the necessary environment variables.

---

### Environment Variables
The following environment variables are required:
- `baseUrl`: The base URL of your API (e.g., `https://example.com`).
- `apiVersion`: (Optional) API versioning for endpoints (e.g., `v1`).

---

### Steps
1. **Import Collections**:
   - Use the **Import** button in Postman to upload the JSON files.
2. **Set Variables**:
   - Configure `baseUrl` and other necessary variables in your environment.
3. **Run Tests**:
   - Execute individual requests or use the **Collection Runner** for batch testing.

---

## Expected Results

### Weak or Deprecated Cipher Suites
- **Pass**: Only TLS 1.2 or TLS 1.3 is allowed.
- **Fail**: Protocols like TLS 1.0, TLS 1.1, or ciphers like RC4 and NULL are detected.

### Unencrypted Data
- **Pass**: Sensitive data is encrypted and HTTPS is enforced.
- **Fail**: Passwords, tokens, or personal data are transmitted in plain text or over HTTP.

### TLS Configuration
- **Pass**: HSTS is enforced, and cookies are marked as secure.
- **Fail**: HSTS header is missing, or cookies are transmitted without the `Secure` attribute.

### Key Exposure
- **Pass**: No sensitive information (e.g., API keys, secrets) is exposed in responses, headers, or cookies.
- **Fail**: Any sensitive information is detected.

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
