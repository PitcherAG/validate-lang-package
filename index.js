const core = require('@actions/core');
const validateJSONs = require('./validateJsons')
const validateCSVs = require('./validateCSVs')

async function run() {
  try {
    validateJSONs()
    validateCSVs()
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();