
# UI Automation Framework

Selenium Test Framework to encourage the adoption of BDD and automated acceptance testing. Copy this repo into your existing project to be able to include acceptance tests for your source code.

Run `npm i` to install packages

On CLI run `npm run test` to run the cucumber tests

Following outlines BDD and how to start automating acceptance tests.

# Tools

Node.js

Selenium

Cucumber.js / Gherkin

# Design

This framework follows the Page Object Model (POM). The main aims of the POM is:

1) Create clear extrapolated layers where each layer has a specific purpose
2) Remove duplication of test code by storing common locators into "Page Objects" (these do not have to be gathered by pages but rather common components)
3) Reduce the complexity of writing tests - complex helpers are kept away from the tests which means the tests themselves are simple and easy to write and understand
4) Improve maintenance by adhering to the layers

# How To Automate

1) Grab the scenarios as per BDD
2) Either create a new feature file or add to an existing feature. How you split tests by their features is up to you and your team. One example is splitting features by common components of the UI - that way the feature file maps to Page Object files.
3) Copy your scenario in to the feature file - don't forget to add the user story and feature title if creating the feature file from scratch
4) Run `npm run test` which will provide you the boilerplate step definitions
5) Copy the steps and add them into a step definitions file - the one provided as default by this framework has segregated the steps by their Gherkin contexts i.e. preconditions, actions and assertions. This may make it easier to keep track of steps.
6) You are now ready to start writing automated test scripts :)

# What Is BDD? 

At the core of Behaviour Driven Development, is understanding - the intention is to provide everyone (BA / PO, QA, Dev) an understanding of the system under test. It is not a testing methodology, rather a development approach. It builds upon the core practices of TDD - that is create failing tests BEFORE any code, build the software to pass the failing tests, refactor and repeat - however when employing BDD, rather than focus on the low level details of the system it focuses on the high level aka the behaviour. 

Done right, BDD will PREVENT bugs rather than force you to REACT to them, by ironing out common miscommunications between teams at the start. The benefits are:

- Less uneccessary refactoring
- Accessible interface to the system under test
- A direct map between the system and requirements
- A more cohesive development approach
- A better system overall, which saves time and costs

## BDD For Dummies

The Three-Pronged Approach is generally accepted as the best way to implement BDD in your software:

1) Collaboration
    - Discussions with BA/PO, QA, Dev BEFORE any software development about the feature to be developed. Missing out a key role in these discussions i.e. BA, QA increases the risk of miscommunication.

2) Documenation
    - Scenarios are captured and documented (in this case we use Jira. Powered with plugins such as BehavePro we get even more BDD integration meaning that Jira becomes the single source of truth for all requirements. Avoids cowboy requirements and YOLO merges as everything must come via collaboration first)

3) Automation
    - Following TDD practices, export the scenarios to your test framework and develop the glue and source code in parallel to satisfy the acceptance tests until they pass. Refactor and repeat.

## What are BDD acceptance tests? 

Automated tests which evaluate the behaviour of the system and validate what is being developed against the original intended functionality as specified by the business acceptance criteria, in the form of scenarios. High level syntax.

Follows the same practice as TDD - failing tests written first, source code written to pass the tests, refactor and repeat.

In this framework the acceptance tests are presented as feature files, written in a plain english Gherkin syntax to ensure an easy to understand interface.

# Tips:

Download the `Cucumber Full Support Extension` (if using VSCode)

Add the following settings to your workspace: 

```
{
    "cucumberautocomplete.steps": [
        "automation/stepDefinitions/*.js",
        "automation/stepDefinitions/**/*.js",
    ],
    "cucumberautocomplete.syncfeatures": "automation/features/",
    "cucumberautocomplete.strictGherkinCompletion": true
}
```

This will allow you to click to the relevant step definition directly from the feature file

Use the include `dotenv` package to create a `.env` file and store all sensitive data such as environemnt variables and API keys. This is by default gitignored so there is no risk of commiting this file to the remote

Be smart, be efficient - where possible, re-use existing steps to avoid uncecessary / duplicate tests. The common steps file is your friend!

Add specific scenario tags for debugging purposes e.g. @scn1, @scn2 etc. Cucumber allows you to run multiple tags using the operators "and", "or" i.e. --tags="@VSTD-100 and @scn1" will run the first scenario of the feature VSTD-100 only (make sure it is in double quotes).

See Cucumber docs for more info: https://cucumber.io/docs/cucumber/api/#tags

NOTES:
Please note this framework is a work in progress and as such this document is likely to change. 
