# CI/CD Testing Demo

![CI/CD Pipeline](https://github.com/${{ github.repository }}/workflows/CI/CD%20Pipeline/badge.svg)

Demonstration of automated testing and building with GitHub Actions.

## Features

- Automated testing on every commit
- Code coverage reporting
- Matrix builds across Node versions
- Production-ready build artifacts

## Running Locally

```bash
npm install
npm test
npm start
```

## CI/CD

This project uses GitHub Actions for:
- Running test suite on every push/PR
- Generating code coverage reports
- Building production bundles
- Testing across multiple Node.js versions
