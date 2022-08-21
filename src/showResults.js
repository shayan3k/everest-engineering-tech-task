const chalk = require("chalk");

async function showResults({ results_to_be_printed }) {
  // show the results in a table format
  console.table(results_to_be_printed);
}
// export function
module.exports = { showResults };
