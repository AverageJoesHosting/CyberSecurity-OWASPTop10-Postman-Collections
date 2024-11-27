# Injection Postman Tests

This folder contains Postman collections specifically designed to test for **Injection** vulnerabilities, as outlined in the [OWASP Top 10 (2025)](https://owasp.org/www-project-top-ten/). These collections ensure APIs are protected against malicious inputs that exploit vulnerabilities in database queries, system commands, or script execution.

---

## What Is Injection?

Injection vulnerabilities occur when untrusted data is sent to an interpreter as part of a command or query. This can result in unauthorized access, data exposure, or execution of malicious actions. Common types of injection include:
- **SQL Injection**
- **Command Injection**
- **NoSQL Injection**
- **LDAP Injection**
- **Cross-Site Scripting (XSS)**

---

## Test Scenarios Covered

### 1. **SQL Injection**
- Tests for injection of malicious SQL queries in parameters and payloads.
- Prevents unauthorized data access or manipulation in SQL-based databases.

### 2. **Command Injection**
- Ensures APIs do not allow untrusted inputs to execute operating system commands.

### 3. **NoSQL Injection**
- Tests for manipulation of NoSQL databases like MongoDB with queries like `$ne` or `$gt`.

### 4. **LDAP Injection**
- Validates that untrusted inputs do not compromise LDAP queries or expose sensitive directory data.

### 5. **Cross-Site Scripting (XSS)**
- Tests for injection of malicious scripts in inputs, ensuring proper input sanitization to prevent XSS attacks.

---

## How to Use the Collections

### Prerequisites
1. Install [Postman](https://www.postman.com/downloads/) if not already installed.
2. Import the relevant JSON files into your Postman workspace:
   - `sql-injection.json`
   - `command-injection.json`
   - `nosql-injection.json`
   - `ldap-injection.json`
   - `xss-injection.json`
3. Set up the necessary environment variables.

---

### Environment Variables
The following environment variables are required:
- `baseUrl`: The base URL of your API (e.g., `https://example.com`).
- `apiVersion`: (Optional) The version of your API endpoints (e.g., `v1`).

---

### Steps
1. **Import Collections**:
   - Use the **Import** button in Postman to upload the JSON files.
2. **Set Variables**:
   - Configure `baseUrl` and any required variables in your environment.
3. **Run Tests**:
   - Execute individual requests or use the **Collection Runner** to validate multiple scenarios in a batch.

---

## Expected Results

### SQL Injection
- **Pass**: No unauthorized access or data manipulation occurs.
- **Fail**: Queries like `' OR '1'='1` return unauthorized results.

### Command Injection
- **Pass**: Untrusted inputs do not execute system commands.
- **Fail**: Inputs like `; rm -rf /` trigger unintended actions.

### NoSQL Injection
- **Pass**: Inputs like `{ "$ne": null }` do not manipulate NoSQL queries.
- **Fail**: Data is exposed or unauthorized actions are performed.

### LDAP Injection
- **Pass**: Malicious inputs do not compromise LDAP directory queries.
- **Fail**: Filters like `*)(|(objectClass=*))` return sensitive information.

### Cross-Site Scripting (XSS)
- **Pass**: Inputs like `<script>alert('XSS')</script>` are sanitized or ignored.
- **Fail**: The API reflects or executes malicious scripts.

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

