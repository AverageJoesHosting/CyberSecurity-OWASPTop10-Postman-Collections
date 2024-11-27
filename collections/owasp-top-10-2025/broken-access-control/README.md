# Broken Access Control Postman Tests

This folder contains Postman collections specifically designed to test **Broken Access Control** vulnerabilities as outlined in the [OWASP Top 10 (2025)](https://owasp.org/www-project-top-ten/). These collections aim to identify misconfigurations and weaknesses in enforcing access restrictions on sensitive resources.

---

## What is Broken Access Control?

Broken Access Control occurs when an application does not properly restrict user access to resources or operations. Attackers can exploit this to:
- Access resources they do not own.
- Modify or delete data they are unauthorized to access.
- Perform privileged actions as a regular user.

---

## Test Scenarios Covered

### 1. **Get Resource Tests**
- **Unauthorized Access**:
  - Simulates a user attempting to access a resource they don’t own.
- **Missing Token**:
  - Ensures the API rejects requests without authentication tokens.
- **Admin Access**:
  - Confirms that authorized users (e.g., admins) can access the resource.

### 2. **Delete Resource Tests**
- **Unauthorized Access**:
  - Validates that users cannot delete resources they don’t own.
- **Missing Token**:
  - Ensures the API rejects requests without authentication tokens.
- **Admin Access**:
  - Confirms that authorized users (e.g., admins) can delete the resource.

---

## How to Use the Collections

### Prerequisites
1. Install [Postman](https://www.postman.com/downloads/) if not already installed.
2. Import the `get-resource.json` and `delete-resource.json` collections into your Postman workspace.
3. Set up the necessary environment variables.

### Environment Variables
These collections use the following environment variables:
- `baseUrl`: The base URL of your API (e.g., `https://example.com`).
- `apiVersion`: The version of your API (e.g., `v1`).
- `resourceId`: The ID of the resource to test (e.g., `123`).
- `userToken`: The access token for a regular user.
- `adminToken`: The access token for an admin user.

### Steps
1. **Import Collections**:
   - Open Postman and import `get-resource.json` and `delete-resource.json`.
2. **Configure Variables**:
   - Go to **Environments** in Postman and set the required variables.
3. **Run Tests**:
   - Execute individual requests or use the **Collection Runner** for batch execution.

---

## Expected Results

### For Unauthorized Access:
- **Status Code**: `403 Forbidden` or `401 Unauthorized`.
- **Error Messages**: Contains text like `Access Denied`, `Unauthorized`, or `Forbidden`.

### For Missing Token:
- **Status Code**: `401 Unauthorized`.
- **Error Messages**: Indicates missing or invalid authentication.

### For Admin Access:
- **Status Code**: `200 OK` or `204 No Content`.
- **Success**: Confirms authorized access or operation.

---

## Contribution and Support

We welcome contributions to improve or expand these collections. Feel free to:
- **Report Issues**: [Open an issue](https://github.com/AverageJoesHosting/CyberSecurity-OWASPTop10-Postman-Collections/issues).
- **Submit Improvements**: Create a pull request with your updates or suggestions.

For additional support, contact [Average Joe's Hosting](https://averagejoeshosting.com/):
- **Website**: [averagejoeshosting.com](https://averagejoeshosting.com/)
- **Email**: [helpme@averagejoeshosting.com](mailto:helpme@averagejoeshosting.com)
- **Phone**: (888) 563-1216

---

## About Average Joe's Hosting

This collection is proudly developed by [Average Joe's Hosting](https://averagejoeshosting.com/), committed to providing affordable, high-quality technology solutions. Explore more of our cybersecurity resources and secure your applications with confidence.

