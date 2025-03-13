// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LabTestResults {
    struct TestResult {
        string patientName;
        string testName;
        string result;
        string date;
        bool isVerified;
    }

    mapping(address => TestResult) private testResults;
    address public owner;
    event TestAdded(address indexed patient, string testName);
    event TestVerified(address indexed patient);

    constructor() {
        owner = msg.sender; // Lab admin as owner
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the lab can add results");
        _;
    }

    function addTestResult(
        address patient,
        string memory patientName,
        string memory testName,
        string memory result,
        string memory date
    ) public onlyOwner {
        testResults[patient] = TestResult(patientName, testName, result, date, false);
        emit TestAdded(patient, testName);
    }

    function verifyTest(address patient) public {
        testResults[patient].isVerified = true;
        emit TestVerified(patient);
    }

    function getTestResult() public view returns(string memory, string memory, string memory, string memory, bool) {
        TestResult memory result = testResults[msg.sender];
        return (result.patientName, result.testName, result.result, result.date, result.isVerified);
    }
}