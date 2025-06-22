OrangeHRM Playwright Automation Framework 🧪
Automated end-to-end testing of the OrangeHRM demo application using Playwright, TypeScript, and Node.js. Supports both positive and negative test scenarios, following a Page Object Model structure.


About
This framework sets up an automated testing environment for OrangeHRM, covering:

Admin login (valid and invalid credentials)

Employee creation via the PIM module

Assertion checks for successful and unsuccessful flows 

Built for maintainability, scalability, and CI/CD integration.

Features
Playwright + TypeScript for powerful browser automation

Page Object Model (POM) design pattern for reusable UI interactions

Supports both positive and negative scenarios

Auto-generated HTML test reports (Playwright default)

Configurable via playwright.config.ts

Easy addition of new test suites

Prerequisites
Node.js v20.x or higher

npm (bundled with Node.js)

Setup & Installation
# 1. Clone the repository
git clone https://github.com/rishikeshyadav735/OrangeHRM_PlaywrightFramework.git
cd OrangeHRM_PlaywrightFramework

# 2. Install dependencies
npm install
Project Structure
bash
Copy
Edit
├── pages/            # Page Object Model classes (LoginPage, DashboardPage, etc.)
├── tests/            # Test suites (e.g., login.spec.ts, pim.spec.ts)
├── utils/            # Helper utilities (e.g., data generators, custom commands)
├── playwright.config.ts  # Playwright configuration
├── package.json          # Project metadata & scripts
└── README.md             # You are here

How to Run Tests
Run all tests: npx playwright test
Run a specific test file: npx playwright test tests/login.spec.ts
Run with HTML report view: npx playwright show-report

Reports & Screenshots
Test results are available in the default Playwright report directory (playwright-report/).

Any failed test will auto-generate a screenshot/video under test-results/.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a branch (git checkout -b feature/my-new-test)

Make your changes & add relevant tests

Commit your changes (git commit -am 'Add employee management tests')

Push (git push origin feature/my-new-test)

Open a pull request


🚀 Want to Extend?
Add more modules like Leave, Admin, Dashboard

Integrate with CI/CD pipelines (GitHub Actions, Jenkins)

Add cross-browser testing, mobile viewports, parallelization

Add visual regression or accessibility testing layers
