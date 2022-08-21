const inquirer = require("inquirer");
const { createSpinner } = require("nanospinner");
const chalk = require("chalk");
const { sleep } = require("../sleep.js");

// validation functions
const validator = async (input) => {
  // distructure inputs
  let [no_of_vehicles_local, max_speed_local, max_carriable_weight_local] =
    input.split(" ");

  // parse the inputs
  no_of_vehicles_local = parseInt(no_of_vehicles_local);
  max_speed_local = parseInt(max_speed_local);
  max_carriable_weight_local = parseInt(max_carriable_weight_local);

  // check if inputs are valid
  if (
    !no_of_vehicles_local ||
    !max_speed_local ||
    !max_carriable_weight_local ||
    typeof no_of_vehicles_local !== "number" ||
    typeof max_speed_local !== "number" ||
    typeof max_carriable_weight_local !== "number" ||
    isNaN(no_of_vehicles_local) ||
    isNaN(max_speed_local) ||
    isNaN(max_carriable_weight_local)
  )
    return "Incorrect asnwer, Please check your asnwer:";

  // return true if data is valid
  return true;
};

async function askNoOfVehiclesMaxSpeedMaxCarriableWeight() {
  // inquirer for the number of vehicle, max speed and carriable weight value
  const { answers } = await inquirer.prompt({
    name: "answers",
    type: "input",
    message:
      "What is the Number Of Vehicles, Maximum Speed, and Maximum Carriable Weight?",
    default() {
      return "2 70 200";
    },
    validate: validator,
  });

  // destructure the answer message
  let [no_of_vehicles_local, max_speed_local, max_carriable_weight_local] =
    answers.split(" ");

  // parse the inputs to integer values
  no_of_vehicles_local = parseInt(no_of_vehicles_local);
  max_speed_local = parseInt(max_speed_local);
  max_carriable_weight_local = parseInt(max_carriable_weight_local);

  // create spinner instance
  const spinner = createSpinner("Checking answer...").start();

  // invoke sleep function
  await sleep();

  // this line should be revised
  spinner.success({
    text: `
        ${chalk.bgGreen("Great!")}
        Number of Vehicles: ${no_of_vehicles_local}\n
        Max Speed Local: ${max_speed_local}\n 
        Max Carriable Weight: ${max_carriable_weight_local}\n 
      `,
  });

  // return data
  return [no_of_vehicles_local, max_speed_local, max_carriable_weight_local];
}

// export function
module.exports = { askNoOfVehiclesMaxSpeedMaxCarriableWeight, validator };
