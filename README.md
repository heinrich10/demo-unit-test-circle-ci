# Demo unit test using Circle-CI

[![CircleCI](https://circleci.com/gh/heinrich10/demo-unit-test-circle-ci.svg?style=svg)](https://circleci.com/gh/heinrich10/demo-unit-test-circle-ci)  [![codecov](https://codecov.io/gh/heinrich10/demo-unit-test-circle-ci/branch/master/graph/badge.svg)](https://codecov.io/gh/heinrich10/demo-unit-test-circle-ci)

This is a demo of using Circle-CI for continuous integration.

## How to run locally:
run ```npm test```
ignore the failure in codecov token

## Essential components
- [mocha](https://mochajs.org/)
test runner
- [istanbul](https://github.com/gotwarlost/istanbul)
code coverage report
- [codecov](https://codecov.io)
code coverage badge
- [circle-ci](https://circleci.com/)
continuous integration

## Note
- circle.yml
this is the file used for configuring circle-ci. configured it to use node 7.10.0 and generate code coverage artifact, then send it to codecov.io
- npm test command
this invokes istanbul, mocha, and codecov library. configurations are in their corresponding yml files
- coverage report
open ./coverage/lcov-report/index.html file after running the test to view code coverage
