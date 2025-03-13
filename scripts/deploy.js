const hre = require("hardhat");

async function main() {
    const LabTestResults = await hre.ethers.getContractFactory("LabTestResults");

    console.log("Deploying LabTestResults contract...");

    // Deploy the contract
    const labTestResults = await LabTestResults.deploy();
    await labTestResults.deployTransaction.wait(); // Wait for the contract to be deployed

    console.log("LabTestResults deployed to:", labTestResults.address);
}

// Run the script and catch errors
main().catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
});