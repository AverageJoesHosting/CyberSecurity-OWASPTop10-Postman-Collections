const newman = require('newman');
const fs = require('fs');

// Configuration: Update these paths as needed
const collectionsDir = './collections/';
const environmentsDir = './environments/';
const resultsDir = './results/';
const environmentFile = `${environmentsDir}staging-environment.json`;

// Ensure results directory exists
if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
}

// Function to run a single collection
function runCollection(collectionFile) {
    return new Promise((resolve, reject) => {
        const collectionName = collectionFile.replace('.json', '');
        const resultsFile = `${resultsDir}${collectionName}-report.json`;

        console.log(`Running collection: ${collectionFile}...`);

        newman.run(
            {
                collection: `${collectionsDir}${collectionFile}`,
                environment: environmentFile,
                reporters: ['cli', 'json'],
                reporter: { json: { export: resultsFile } },
            },
            (err, summary) => {
                if (err) {
                    console.error(`Collection failed: ${collectionFile}`, err);
                    reject(err);
                } else if (summary.run.failures.length > 0) {
                    console.error(
                        `Collection ${collectionFile} completed with errors:`,
                        summary.run.failures
                    );
                    reject(new Error(`Test failures in ${collectionFile}`));
                } else {
                    console.log(`Collection ${collectionFile} completed successfully.`);
                    resolve(summary);
                }
            }
        );
    });
}

// Function to run all collections in the collections folder
async function runAllCollections() {
    try {
        const collectionFiles = fs.readdirSync(collectionsDir).filter((file) => file.endsWith('.json'));
        
        if (collectionFiles.length === 0) {
            console.log('No collections found in the collections directory.');
            return;
        }

        console.log('Starting to run all collections...');

        for (const file of collectionFiles) {
            await runCollection(file);
        }

        console.log('All collections have been executed successfully.');
    } catch (err) {
        console.error('Error during collection execution:', err);
        process.exit(1);
    }
}

// Execute the script
runAllCollections();
