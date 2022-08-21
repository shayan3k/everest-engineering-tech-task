function calculateDeliveryEstimation({
  package_routes,
  no_of_vehicles,
  max_speed,
}) {
  // create vehicle status array and initialize based on vehicle number
  const vehicle_status_array = [];
  for (let i = 0; i < no_of_vehicles; i++) vehicle_status_array.push(0);

  // loop over all packages combinations
  const pkgs_with_estimation = package_routes.map((pkg) => {
    // get the estiamtion time
    const all_estimations = pkg.itemsArr.map(
      (item) => parseInt((item.distance_in_km / max_speed) * 100) / 100
    );

    // allocate a vehicle
    const available_vehicle = Math.min(...vehicle_status_array);

    // get the index of vehicle
    const available_vehicle_index =
      vehicle_status_array.indexOf(available_vehicle);

    // time to travel and come back to office
    const time_to_travel = Math.max(...all_estimations) * 2;

    // change the vehicle status
    vehicle_status_array[available_vehicle_index] =
      available_vehicle + time_to_travel;

    // return the data with apropriate structure
    return {
      total_weight: pkg.total_weight,
      itemsArr: pkg.itemsArr.map((item) => {
        const total_estimated_time =
          parseFloat((item.distance_in_km / max_speed) * 100) / 100 +
          available_vehicle;

        const result = {
          ...item,
          total_estimated_time: Math.floor(total_estimated_time * 100) / 100,
        };

        return result;
      }),
    };
  });

  // return data
  return pkgs_with_estimation;
}

// export function
module.exports = { calculateDeliveryEstimation };
