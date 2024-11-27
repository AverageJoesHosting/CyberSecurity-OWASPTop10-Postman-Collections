# CI/CD Integration for API Security Tests

This folder contains tools and scripts to integrate **Postman collections** into your CI/CD pipelines. These integrations ensure that your API security tests are automated and continuously monitored as part of your development lifecycle.

---

## Overview

The provided script, `run-collections.js`, leverages **Newman** (Postman’s CLI tool) to execute API security tests in a consistent, repeatable manner. It is designed to:
- Run all Postman collections in the `/collections/` folder.
- Use environment configurations from `/environments/`.
- Generate test reports for analysis.
- Support integration with popular CI/CD tools like **GitHub Actions**, **Jenkins**, and more.

---

## Files in this Directory

### **1. `run-collections.js`**
- **Purpose**:
  - Executes all Postman collections in the `/collections/` directory.
  - Leverages the specified environment file (default: `staging-environment.json`).
  - Generates JSON reports in the `/results/` directory for each collection.

- **Features**:
  - Error handling: Alerts on failures or invalid test results.
  - Flexible environment configurations: Easily switch between staging and production environments.
  - CI/CD ready: Can be integrated into any pipeline setup.

---

## Prerequisites

### 1. Install Node.js and Newman
Ensure you have **Node.js** installed on your system. Install Newman globally:
```bash
npm install -g newman
npm install
```

### 2. Directory Structure
Ensure your project structure aligns with the following:
```
/collections/          # Contains all Postman collections (*.json)
/environments/         # Contains environment files (*.json)
/results/              # Stores generated test reports (*.json and *.html)
/scripts/ci-cd-integration/ # Contains the CI/CD integration scripts
```

### 3. Environment Files
Configure the appropriate environment file in `/environments/` (e.g., `staging-environment.json` or `production-environment.json`).

---

## Running the Script Locally

You can run the script manually to validate collections locally:
```bash
node scripts/ci-cd-integration/run-collections.js
```

---

## CI/CD Integration

### **1. GitHub Actions**

#### Workflow File Example
Create `.github/workflows/api-security-tests.yml`:
```yaml
name: API Security Tests

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  run-tests:
    name: Run API Security Tests
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 16

    - name: Install Dependencies
      run: |
        npm install -g newman
        npm install

    - name: Run Postman Collections
      run: node scripts/ci-cd-integration/run-collections.js

    - name: Upload Test Reports
      if: always()
      uses: actions/upload-artifact@v3
      with:
        name: test-results
        path: results/
```

### **2. Jenkins Pipeline**

#### Pipeline Script Example
Add the following to your `Jenkinsfile`:
```groovy
pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install -g newman'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'node scripts/ci-cd-integration/run-collections.js'
            }
        }

        stage('Archive Results') {
            steps {
                archiveArtifacts artifacts: 'results/*.json', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Tests completed.'
        }
        failure {
            echo 'Tests failed! Please check the results.'
        }
    }
}
```

---

## Enhancements

### **Parallel Execution**
Run collections in parallel to improve execution time:
- **GitHub Actions**:
  Use a matrix strategy to execute each collection in a separate job.
  ```yaml
  strategy:
    matrix:
      collection: [auth-tests.json, input-validation-tests.json]
  ```
- **Jenkins**:
  Use parallel stages for each collection:
  ```groovy
  stage('Run Tests') {
      parallel {
          stage('Authentication Tests') {
              steps {
                  sh 'newman run collections/auth-tests.json'
              }
          }
          stage('Input Validation Tests') {
              steps {
                  sh 'newman run collections/input-validation-tests.json'
              }
          }
      }
  }
  ```

### **Slack Notifications**
Notify your team of test results using Slack integrations:
- **GitHub Actions**:
  Use the [Slack Notify Action](https://github.com/rtCamp/action-slack-notify).
- **Jenkins**:
  Use the Jenkins Slack Plugin to send a message on build success or failure.

### **HTML Reporting**
Leverage Newman’s HTML reporter for visually rich reports:
1. Install the reporter:
   ```bash
   npm install -g newman-reporter-html
   ```
2. Add the reporter to the script:
   ```bash
   newman run collections/${collectionFile} --reporters cli,json,html --reporter-html-export results/${collectionFile}-report.html
   ```
3. Upload the reports to your CI/CD pipeline artifacts for review.

---

## Contribution and Support

We welcome contributions to enhance these scripts. You can:
- **Report Issues**: [Open an issue](https://github.com/AverageJoesHosting/CyberSecurity-OWASPTop10-Postman-Collections/issues).
- **Submit Improvements**: Create a pull request with updates or new features.

For further assistance, contact [Average Joe's Hosting](https://averagejoeshosting.com/):
- **Website**: [averagejoeshosting.com](https://averagejoeshosting.com/)
- **Email**: [helpme@averagejoeshosting.com](mailto:helpme@averagejoeshosting.com)
- **Phone**: (888) 563-1216

---

## About Average Joe's Hosting

This project is proudly developed and maintained by [Average Joe's Hosting](https://averagejoeshosting.com/). We specialize in creating accessible, high-quality technology solutions for small businesses and organizations. Explore our resources to enhance your CI/CD pipelines and secure your APIs effectively.

