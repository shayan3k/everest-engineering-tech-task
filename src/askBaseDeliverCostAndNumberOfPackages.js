const inquirer = require("inquirer");
const { createSpinner } = require("nanospinner");
const chalk = require("chalk");
const { sleep } = require("./sleep.js");

// validator
const validator = async (input) => {
  // destructure inputs
  let [base_delivery_cost_local, no_of_packges_local] = input.split(" ");

  // parse inputs to integer values
  base_delivery_cost_local = parseInt(base_delivery_cost_local);
  no_of_packges_local = parseInt(no_of_packges_local);

  // check if the inputs are valid or not
  if (
    typeof base_delivery_cost_local !== "number" ||
    typeof no_of_packges_local !== "number" ||
    isNaN(base_delivery_cost_local) ||
    isNaN(no_of_packges_local)
  )
    return "Incorrect asnwer, Please check your asnwer:";

  // return true if data is valid
  return true;
};

async function askBaseDeliverCostAndNumberOfPackages() {
  // inquirer the delivery cost and numbe of packages
  const { answers } = await inquirer.prompt({
    name: "answers",
    type: "input",
    message: "What is the base delivery cost and the number of packages?",
    default() {
      return "100 5";
    },
    validate: validator,
  });

  // destructure the inputs
  let [base_delivery_cost_local, no_of_packges_local] = answers.split(" ");

  // parse the inputs to integer values
  base_delivery_cost_local = parseInt(base_delivery_cost_local);
  no_of_packges_local = parseInt(no_of_packges_local);

  // define a spinner instance
  const spinner = createSpinner("Checking answer...").start();

  // invoke sleep function
  await sleep();

  // show the spinner message
  spinner.success({
    text: `
        ${chalk.bgGreen("Great!")}
        Base Delivery Cost: ${base_delivery_cost_local}\n
        Number of Packages: ${no_of_packges_local}\n 
      `,
  });

  // return the inputs
  return [base_delivery_cost_local, no_of_packges_local];
}

// export the functions
module.exports = { askBaseDeliverCostAndNumberOfPackages, validator };
