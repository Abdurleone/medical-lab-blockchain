const hre = require("hardhat");

async function main() {
    const LabTestResults = await hre.ethers.getContractFactory("LabTestResults");

    // Deploy contract
    const labTestResults = await LabTestResults.deploy();
    await labTestResults.deployed(); // Ensure it's properly deployed

    console.log("LabTestResults deployed to:", labTestResults.address);
}

main().catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
});