const {
  getTheOptimizedPackageRoutes,
} = require("./getTheOptimizedPackageRoutes.js");

describe("check the second problem result calculation", () => {
  it("should return the result for the second problem with five packages", async () => {
    // define the assertion counts
    expect.assertions(1);

    // define the fixture
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
      max_carriable_weight = 200;

    // make the assertions
    expect(
      await getTheOptimizedPackageRoutes({
        packages_to_deliver,
        max_carriable_weight,
      })
    ).toStrictEqual([
      {
        itemsArr: [
          {
            distance_in_km: 60,
            offer_code: "OFR002",
            pkg_id: "PKG4",
            pkg_weight_in_kg: 110,
          },
          {
            distance_in_km: 125,
            offer_code: "OFR008",
            pkg_id: "PKG2",
            pkg_weight_in_kg: 75,
          },
        ],
        total_weight: 185,
      },

      {
        itemsArr: [
          {
            distance_in_km: 100,
            offer_code: "OFR003",
            pkg_id: "PKG3",
            pkg_weight_in_kg: 175,
          },
        ],
        total_weight: 175,
      },
      {
        itemsArr: [
          {
            distance_in_km: 95,
            offer_code: "NA",
            pkg_id: "PKG5",
            pkg_weight_in_kg: 155,
          },
        ],
        total_weight: 155,
      },
      {
        itemsArr: [
          {
            distance_in_km: 30,
            offer_code: "OFR001",
            pkg_id: "PKG1",
            pkg_weight_in_kg: 50,
          },
        ],
        total_weight: 50,
      },
    ]);
  });
});
