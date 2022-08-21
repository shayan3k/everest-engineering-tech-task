const {
  getTheOptimizedPackageRoutes,
} = require("./getTheOptimizedPackageRoutes.js");
const {
  calculateDeliveryEstimation,
} = require("./calculateDeliveryEstimation.js");
const { getTheDiscountPercentage } = require("../getTheDiscountPercentage.js");

async function calculateTheSecondProblemResults({
  packages_to_deliver,
  max_carriable_weight,
  no_of_vehicles,
  max_speed,
  base_delivery_cost,
}) {
  // get the most optimze packages combinations and calculate the times
  const package_routes = getTheOptimizedPackageRoutes({
    packages_to_deliver,
    max_carriable_weight,
  });

  // calculate the delivery estimation amount
  const package_routes_with_estimation = calculateDeliveryEstimation({
    no_of_vehicles,
    package_routes,
    max_speed,
    base_delivery_cost,
  });

  // define variable to hold sorted values
  let sorted_package_routes = [];

  // destructure data to have a stable structure - Loadash could be useful in these lines
  package_routes_with_estimation.map((item) => {
    sorted_package_routes = [...sorted_package_routes, ...item.itemsArr];
  });

  // sort the data based on the packages ids
  sorted_package_routes = sorted_package_routes.sort((a, b) => {
    let fa = a.pkg_id.toLowerCase(),
      fb = b.pkg_id.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  // add discount amount to the current packages variable
  const results_to_be_printed = sorted_package_routes.map((el) => {
    const {
      pkg_id,
      pkg_weight_in_kg,
      distance_in_km,
      offer_code,
      total_estimated_time,
    } = el;

    // calculate the cost
    const result =
      base_delivery_cost + pkg_weight_in_kg * 10 + distance_in_km * 5;

    // get the discount
    let pkg_discount_percent = getTheDiscountPercentage({
      pkg_weight_in_kg,
      distance_in_km,
      offer_code,
    });

    // calculate the discount amount
    const pkg_discount = (result * pkg_discount_percent) / 100;

    // return data
    return [pkg_id, pkg_discount, result - pkg_discount, total_estimated_time];
  });

  // return data
  return results_to_be_printed;
}

// export function
module.exports = { calculateTheSecondProblemResults };
