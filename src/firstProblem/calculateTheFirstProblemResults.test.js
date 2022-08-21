const {
  calculateTheFirstProblemResults,
} = require("./calculateTheFirstProblemResults.js");

describe("check the first problem result calculation", () => {
  it("should return the result for the first problem with three packages", async () => {
    // define assertion count
    expect.assertions(1);

    // define fixture data
    const packages_to_deliver = [
        {
          distance_in_km: 5,
          offer_code: "OFR001",
          pkg_id: "PKG1",
          pkg_weight_in_kg: 5,
        },
        {
          distance_in_km: 5,
          offer_code: "OFR002",
          pkg_id: "PKG2",
          pkg_weight_in_kg: 15,
        },
        {
          distance_in_km: 100,
          offer_code: "OFR003",
          pkg_id: "PKG3",
          pkg_weight_in_kg: 10,
        },
      ],
      base_delivery_cost = 100;

    // check the assertion
    expect(
      await calculateTheFirstProblemResults({
        packages_to_deliver,
        base_delivery_cost,
      })
    ).toStrictEqual([
      ["PKG1", 0, 175],
      ["PKG2", 0, 275],
      ["PKG3", 35, 665],
    ]);
  });
});
