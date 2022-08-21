const inquirer = require("inquirer");
const { createSpinner } = require("nanospinner");
const chalk = require("chalk");
const { sleep } = require("./sleep.js");

// inquirer validation function
const validator = async (input) => {
  // distrcture inputs
  let [pkg_id, pkg_weight_in_kg, distance_in_km, ...rest] = input.split(" ");

  // parse inputs to integer values
  pkg_weight_in_kg = parseInt(pkg_weight_in_kg);
  distance_in_km = parseInt(distance_in_km);

  // check if the data is valid
  if (
    !pkg_id ||
    !pkg_weight_in_kg ||
    !distance_in_km ||
    typeof pkg_weight_in_kg !== "number" ||
    typeof distance_in_km !== "number" ||
    isNaN(pkg_weight_in_kg) ||
    isNaN(distance_in_km)
  )
    return "Incorrect asnwer, Please check your asnwer:";

  // return true if data is valid
  return true;
};

async function getPackagesInformation({ no_of_packges }) {
  // define variable to hold the packages information
  let packages_to_deliver = [];

  // get the packages information based on the number packages
  for (let i = 0; i < no_of_packges; i++) {
    // ask user for the input
    const { answers } = await inquirer.prompt({
      name: "answers",
      type: "input",
      message:
        "What is the package ID, weight, distance and please provide offer code if exists?",
      default() {
        return "PKG1 5 5 OFR001";
      },
      validate: validator,
    });

    // destrcture the inputs
    let [pkg_id, pkg_weight_in_kg, distance_in_km, offer_code] =
      answers.split(" ");

    // parse the inputs to integer values
    pkg_weight_in_kg = parseInt(pkg_weight_in_kg);
    distance_in_km = parseInt(distance_in_km);

    // create spinner instance
    const spinner = createSpinner("Checking answer...").start();

    // invoke sleep function
    await sleep();

    // show the successful parsed data
    spinner.success({
      text: `
        ${chalk.bgGreen("Item was added!")}
        package ID: ${pkg_id}\n
        Weight: ${pkg_weight_in_kg} KG\n
        Distance: ${distance_in_km} KM\n
        Offer code: ${offer_code ?? "NA"}\n
      `,
    });

    // push data to the current array
    packages_to_deliver = [
      ...packages_to_deliver,
      {
        pkg_id,
        pkg_weight_in_kg,
        distance_in_km,
        offer_code,
      },
    ];
  }

  // return data
  return packages_to_deliver;
}

// export function
module.exports = { getPackagesInformation, validator };
