Here’s the updated **`running-tests.md`** with branding and Average Joe's Hosting information:

---

# Running Postman Tests

This guide, provided by [Average Joe's Hosting](https://averagejoeshosting.com/), explains how to execute tests within the Cybersecurity Postman Collections and analyze the results. These steps will help you validate the security of your applications efficiently.

---

## Step 1: Prepare Your Setup
1. Import the desired collection into Postman (refer to the [Importing Collections guide](importing-collections.md)).
2. Ensure the necessary environment variables are configured:
   - Navigate to the **Environments** tab.
   - Verify or set variables like `baseUrl`, `userToken`, or `adminToken`.

---

## Step 2: Run Individual Requests
1. Open the collection from the **Collections** tab.
2. Expand the collection to see its requests.
3. Click on a request to open it in the editor.
4. Click the **Send** button to execute the request.
5. Review the response in the lower pane and check the test results.

---

## Step 3: Run the Collection
1. Click on the collection’s name to open its details.
2. Click the **Run** button (usually found at the top-right or next to the collection name).
3. The **Collection Runner** window will open:
   - Select the environment to use for the tests.
   - Adjust iteration settings if needed (e.g., running multiple times with different data).
4. Click **Run Collection**.

---

## Step 4: Analyze Test Results
1. After running a request or collection, Postman displays the test results.
2. Check the **Tests** tab in the response section to see passed or failed tests.
   - Green checks indicate passed tests.
   - Red crosses indicate failed tests.
3. For failed tests, review the request, environment variables, and endpoint behavior to debug.

---

## Step 5: Automate Test Execution
1. Export the collection and environment as JSON files.
2. Use a tool like [Newman](https://github.com/postmanlabs/newman) to run the collections programmatically:
   - Install Newman: `npm install -g newman`
   - Run the collection: `newman run path/to/collection.json -e path/to/environment.json`
3. Integrate the Newman command into your CI/CD pipelines for automated testing.

---

## Need Assistance?

If you encounter any challenges while running tests or setting up automation, feel free to reach out to [Average Joe's Hosting](https://averagejoeshosting.com/) for expert guidance:

- **Website**: [averagejoeshosting.com](https://averagejoeshosting.com/)
- **Email**: [helpme@averagejoeshosting.com](mailto:helpme@averagejoeshosting.com)
- **Phone**: (888) 563-1216

Explore more of our services and resources to enhance your security testing workflows and ensure robust protection for your applications.