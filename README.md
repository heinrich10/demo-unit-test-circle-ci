# Demo unit test using Circle-CI

[![CircleCI](https://circleci.com/gh/heinrich10/demo-unit-test-circle-ci.svg?style=svg)](https://circleci.com/gh/heinrich10/demo-unit-test-circle-ci)  [![codecov](https://codecov.io/gh/heinrich10/demo-unit-test-circle-ci/branch/master/graph/badge.svg)](https://codecov.io/gh/heinrich10/demo-unit-test-circle-ci)
[![dependencies Status](https://david-dm.org/heinrich10/demo-unit-test-circle-ci/status.svg)](https://david-dm.org/heinrich10/demo-unit-test-circle-ci)
[![Known Vulnerabilities](https://snyk.io/test/github/heinrich10/demo-unit-test-circle-ci/badge.svg?targetFile=package.json)](https://snyk.io/test/github/heinrich10/demo-unit-test-circle-ci?targetFile=package.json)

>archiving this as it is quite old, and more people are using `github-actions`

This is a demo of using Circle-CI for continuous integration.

## How to run locally:
run ``` npm test ```
ignore the failure in codecov token

## Essential components
- [mocha](https://mochajs.org/) -
test runner
- [nyc](https://github.com/istanbuljs/nyc) -
code coverage report
- [codecov](https://codecov.io) -
code coverage badge
- [circle-ci](https://circleci.com/) -
continuous integration

## Note
- circle.yml -
this is the file used for configuring circle-ci. configured it to use node 8.11.4 and generate code coverage artifact, then send it to codecov.io
- npm test command -
this invokes nyc, mocha, and codecov library. configurations are in their corresponding yml files
- coverage report -
open `./coverage/lcov-report/index.html` file after running the test to view code coverage
