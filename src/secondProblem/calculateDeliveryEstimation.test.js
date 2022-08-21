const {
  calculateDeliveryEstimation,
} = require("./calculateDeliveryEstimation.js");

describe("check the delivery estiamtion calculation", () => {
  it("should return the result for delivery estimation calculation with five inputs", async () => {
    // define the assertion counts
    expect.assertions(1);

    // define the fixtures
    let package_routes = [
        {
          total_weight: 25,
          itemsArr: [
            {
              pkg_id: "PKG1",
              pkg_weight_in_kg: 50,
              distance_in_km: 30,
              offer_code: "OFR001",
            },
            {
              pkg_id: "PKG2",
              pkg_weight_in_kg: 75,
              distance_in_km: 125,
              offer_code: "OFR008",
            },
            {
              pkg_id: "PKG3",
              pkg_weight_in_kg: 175,
              distance_in_km: 100,
              offer_code: "OFR003",
            },
            {
              pkg_id: "PKG4",
              pkg_weight_in_kg: 110,
              distance_in_km: 60,
              offer_code: "OFR002",
            },
            {
              pkg_id: "PKG5",
              pkg_weight_in_kg: 155,
              distance_in_km: 95,
              offer_code: "NA",
            },
          ],
        },
      ],
      no_of_vehicles = 2,
      max_speed = 70;

    // make the assertions
    expect(
      await calculateDeliveryEstimation({
        package_routes,
        no_of_vehicles,
        max_speed,
      })
    ).toStrictEqual([
      {
        total_weight: 25,
        itemsArr: [
          {
            pkg_id: "PKG1",
            pkg_weight_in_kg: 50,
            distance_in_km: 30,
            offer_code: "OFR001",
            total_estimated_time: 0.42,
          },
          {
            pkg_id: "PKG2",
            pkg_weight_in_kg: 75,
            distance_in_km: 125,
            offer_code: "OFR008",
            total_estimated_time: 1.78,
          },
          {
            pkg_id: "PKG3",
            pkg_weight_in_kg: 175,
            distance_in_km: 100,
            offer_code: "OFR003",
            total_estimated_time: 1.42,
          },
          {
            distance_in_km: 60,
            offer_code: "OFR002",
            pkg_id: "PKG4",
            pkg_weight_in_kg: 110,
            total_estimated_time: 0.85,
          },
          {
            distance_in_km: 95,
            offer_code: "NA",
            pkg_id: "PKG5",
            pkg_weight_in_kg: 155,
            total_estimated_time: 1.35,
          },
        ],
      },
    ]);
  });
  it("should return the result for delivery estimation calculation with three inputs", async () => {
    // define the assertions counts
    expect.assertions(1);

    // define the fixture data
    let package_routes = [
        {
          total_weight: 25,
          itemsArr: [
            {
              pkg_id: "PKG1",
              pkg_weight_in_kg: 5,
              distance_in_km: 5,
              offer_code: "OFR001",
            },
            {
              pkg_id: "PKG1",
              pkg_weight_in_kg: 5,
              distance_in_km: 5,
              offer_code: "OFR001",
            },
            {
              pkg_id: "PKG1",
              pkg_weight_in_kg: 5,
              distance_in_km: 5,
              offer_code: "OFR001",
            },
            {
              pkg_id: "PKG1",
              pkg_weight_in_kg: 5,
              distance_in_km: 5,
              offer_code: "OFR001",
            },
            {
              pkg_id: "PKG1",
              pkg_weight_in_kg: 5,
              distance_in_km: 5,
              offer_code: "OFR001",
            },
          ],
        },
      ],
      no_of_vehicles = 2,
      max_speed = 70;

    // make the assertions
    expect(
      await calculateDeliveryEstimation({
        package_routes,
        no_of_vehicles,
        max_speed,
      })
    ).toStrictEqual([
      {
        total_weight: 25,
        itemsArr: [
          {
            pkg_id: "PKG1",
            pkg_weight_in_kg: 5,
            distance_in_km: 5,
            offer_code: "OFR001",
            total_estimated_time: 0.07,
          },
          {
            pkg_id: "PKG1",
            pkg_weight_in_kg: 5,
            distance_in_km: 5,
            offer_code: "OFR001",
            total_estimated_time: 0.07,
          },
          {
            pkg_id: "PKG1",
            pkg_weight_in_kg: 5,
            distance_in_km: 5,
            offer_code: "OFR001",
            total_estimated_time: 0.07,
          },
          {
            pkg_id: "PKG1",
            pkg_weight_in_kg: 5,
            distance_in_km: 5,
            offer_code: "OFR001",
            total_estimated_time: 0.07,
          },
          {
            pkg_id: "PKG1",
            pkg_weight_in_kg: 5,
            distance_in_km: 5,
            offer_code: "OFR001",
            total_estimated_time: 0.07,
          },
        ],
      },
    ]);
  });
});
