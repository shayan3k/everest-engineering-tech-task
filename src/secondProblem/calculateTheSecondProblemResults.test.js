const {
  calculateTheSecondProblemResults,
} = require("./calculateTheSecondProblemResults.js");

describe("check the second problem result calculation", () => {
  it("should return the result for the second problem with five packages", async () => {
    //  define the assertions counts
    expect.assertions(1);

    // define the fixture data
    const packages_to_deliver = [
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
      max_carriable_weight = 200,
      no_of_vehicles = 2,
      max_speed = 70,
      base_delivery_cost = 100;

    // make the assertions
    expect(
      await calculateTheSecondProblemResults({
        packages_to_deliver,
        max_carriable_weight,
        no_of_vehicles,
        max_speed,
        base_delivery_cost,
      })
    ).toStrictEqual([
      ["PKG1", 0, 750, 3.98],
      ["PKG2", 0, 1475, 1.78],
      ["PKG3", 0, 2350, 1.42],
      ["PKG4", 105, 1395, 0.85],
      ["PKG5", 0, 2125, 4.19],
    ]);
  });
});
