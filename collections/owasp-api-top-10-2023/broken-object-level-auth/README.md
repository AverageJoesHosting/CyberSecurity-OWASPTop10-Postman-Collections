# Broken Object Level Authorization (BOLA) Postman Collection

This Postman collection is designed to help identify **Broken Object Level Authorization (BOLA)** vulnerabilities in APIs. BOLA vulnerabilities occur when an API fails to properly enforce access control, allowing unauthorized users to access or modify resources they don't own.

---

## Key Features

- **Comprehensive Tests**: Includes tests for common HTTP methods such as `GET`, `POST`, and `DELETE`.
- **Dynamic Variables**: Leverages variables like `{{baseUrl}}`, `{{resourceId}}`, and `{{userToken}}` for flexibility across different environments.
- **Customizable Assertions**: Tests for status codes (`401`, `403`) and error messages (`Unauthorized`, `Forbidden`, `Access Denied`).
- **Reusability**: Easily adaptable for APIs with versioning and various access control implementations.

---

## Usage

### Prerequisites
1. Install [Postman](https://www.postman.com/downloads/) if you don’t have it already.
2. Import the collection JSON file into your Postman workspace.
3. Set up the necessary environment variables.

---

### Environment Variables
This collection uses the following variables:
- `baseUrl`: The base URL of your API (e.g., `https://example.com`).
- `apiVersion`: The version of your API (e.g., `v1`).
- `resourceId`: The ID of the resource to test (e.g., `123`).
- `userToken`: The access token of a standard user.
- `adminToken`: The access token of an admin user (optional, for comparison).

---

### Steps to Use
1. **Import the Collection**:
   - Download and import the `bola-collection.json` file into Postman.
2. **Configure Environment Variables**:
   - Go to the **Environments** tab in Postman.
   - Create or edit an environment with the required variables.
3. **Run Individual Requests**:
   - Expand the collection in Postman to see individual requests.
   - Execute each request manually or modify it as needed.
4. **Run the Entire Collection**:
   - Use the **Collection Runner** in Postman to run all tests automatically.
   - Analyze the results to identify potential vulnerabilities.

---

## Test Scenarios Covered

1. **Get Resource (Unauthorized Access)**:
   - Validates that a user cannot fetch a resource they don't own.

2. **Create Resource (Unauthorized Access)**:
   - Checks if unauthorized users can create a resource.

3. **Delete Resource (Unauthorized Access)**:
   - Ensures unauthorized users cannot delete someone else’s resource.

---

## Results Analysis

- **Status Codes**:
  - `403`: Forbidden (expected for unauthorized access).
  - `401`: Unauthorized (if applicable for missing or invalid tokens).
- **Error Messages**:
  - Matches phrases like `Unauthorized`, `Forbidden`, or `Access Denied`.

Review failed tests for specific details about vulnerabilities in your API.

---

## Support and Contribution

If you encounter issues or have suggestions for improving this collection, feel free to:
- **Report Issues**: [Open an issue](https://github.com/AverageJoesHosting/CyberSecurity-OWASPTop10-Postman-Collections/issues).
- **Contribute**: Submit a pull request to enhance the collection.

For further assistance, contact [Average Joe's Hosting](https://averagejoeshosting.com/):
- **Website**: [averagejoeshosting.com](https://averagejoeshosting.com/)
- **Email**: [helpme@averagejoeshosting.com](mailto:helpme@averagejoeshosting.com)
- **Phone**: (888) 563-1216

---

## About Average Joe's Hosting

This collection is proudly developed and maintained by [Average Joe's Hosting](https://averagejoeshosting.com/), committed to providing accessible, high-quality technology solutions. Explore more of our cybersecurity resources to keep your applications secure and reliable.

