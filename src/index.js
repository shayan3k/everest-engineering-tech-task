#!/usr/bin/env node

const { welcome } = require("./welcome.js");
const { goodbye } = require("./goodbye.js");
const { chooseTheProblemType } = require("./chooseTheProblemType.js");
const {
  askBaseDeliverCostAndNumberOfPackages,
} = require("./askBaseDeliverCostAndNumberOfPackages.js");
const { getPackagesInformation } = require("./getPackagesInformation.js");
const {
  calculateTheFirstProblemResults,
} = require("./firstProblem/calculateTheFirstProblemResults.js");
const {
  calculateTheSecondProblemResults,
} = require("./secondProblem/calculateTheSecondProblemResults.js");
const {
  askNoOfVehiclesMaxSpeedMaxCarriableWeight,
} = require("./secondProblem/askNoOfVehiclesMaxSpeedMaxCarriableWeight.js");
const { showResults } = require("./showResults.js");

// define a self invoking function to have simulate a async operation
(async () => {
  // clear the console of everthing
  console.clear();

  // display welcome message
  await welcome();

  // show the options while user choose to
  while (true) {
    // ask the user what problem to excute
    const problem_type = await chooseTheProblemType();

    // choose excution path based on user answer
    if (problem_type == "First Problem") {
      // get the base delivery cost and number of packages available
      let [base_delivery_cost, no_of_packges] =
        await askBaseDeliverCostAndNumberOfPackages();

      // get the packages info based on the number of packages
      let packages_to_deliver = await getPackagesInformation({ no_of_packges });

      // calcualte the final results to be printed
      const calculated_results = await calculateTheFirstProblemResults({
        packages_to_deliver,
        base_delivery_cost,
      });

      // define the display structure
      function showResultStructure(pkg_id, discount, total_cost) {
        this.pkg_id = pkg_id;
        this.discount = discount;
        this.total_cost = total_cost;
      }

      // populate the display structure with the results
      const results_to_be_printed = calculated_results.map(
        (item) => new showResultStructure(...item)
      );

      // print the results to the console
      await showResults({ results_to_be_printed });
    } else if (problem_type == "Second Problem") {
      // get the packages info based on the number of packages
      let [base_delivery_cost, no_of_packges] =
        await askBaseDeliverCostAndNumberOfPackages();

      // get the packages info based on the number of packages
      let packages_to_deliver = await getPackagesInformation({ no_of_packges });
      // get the number of vehicle, max speed and max carriable weight
      let [no_of_vehicles, max_speed, max_carriable_weight] =
        await askNoOfVehiclesMaxSpeedMaxCarriableWeight();

      // calcualte the final results to be printed
      const calculated_results = await calculateTheSecondProblemResults({
        packages_to_deliver,
        max_carriable_weight,
        no_of_vehicles,
        max_speed,
        base_delivery_cost,
      });

      // define the display structure
      function showResultStructure(
        pkg_id,
        discount,
        total_cost,
        estimated_delivery
      ) {
        this.pkg_id = pkg_id;
        this.discount = discount;
        this.total_cost = total_cost;
        this.estimated_delivery = estimated_delivery;
      }
      // populate the display structure with the results

      const results_to_be_printed = calculated_results.map(
        (item) => new showResultStructure(...item)
      );

      // print the results to the console
      await showResults({ results_to_be_printed });
    } else if (problem_type == "Exit") {
      // print the goodbye message
      await goodbye();
      // terimate the process
      process.exit();
    }
  }
})();
