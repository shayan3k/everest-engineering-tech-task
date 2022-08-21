const { getTheDiscountPercentage } = require("./getTheDiscountPercentage.js");

describe("check the discount percentage functionality", () => {
  it("should return the discount percentage 5 5 OFR001", async () => {
    // define fixture data
    const pkg_weight_in_kg = 5,
      distance_in_km = 5,
      offer_code = "OFR001";

    // make the assertions
    expect(
      getTheDiscountPercentage({ pkg_weight_in_kg, distance_in_km, offer_code })
    ).toBe(0);
  });
  it("should return the discount percentage 15 5 OFR002", async () => {
    // define fixture data
    const pkg_weight_in_kg = 15,
      distance_in_km = 5,
      offer_code = "OFR002";

    // make the assertions
    expect(
      getTheDiscountPercentage({ pkg_weight_in_kg, distance_in_km, offer_code })
    ).toBe(0);
  });
  it("should return the discount percentage 10 100 OFR003", async () => {
    //  define fixture data
    const pkg_weight_in_kg = 10,
      distance_in_km = 100,
      offer_code = "OFR003";

    // make the assertions
    expect(
      getTheDiscountPercentage({ pkg_weight_in_kg, distance_in_km, offer_code })
    ).toBe(5);
  });
  it("should return the discount percentage 50 30 OFR001", async () => {
    // define the fixture data
    const pkg_weight_in_kg = 50,
      distance_in_km = 30,
      offer_code = "OFR001";

    // make the assertions
    expect(
      getTheDiscountPercentage({ pkg_weight_in_kg, distance_in_km, offer_code })
    ).toBe(0);
  });
  it("should return the discount percentage 75 125 OFR008", async () => {
    // define fixture data
    const pkg_weight_in_kg = 75,
      distance_in_km = 125,
      offer_code = "OFR008";

    // make the assertions
    expect(
      getTheDiscountPercentage({ pkg_weight_in_kg, distance_in_km, offer_code })
    ).toBe(0);
  });
  it("should return the discount percentage 175 100 OFR003", async () => {
    //  define fixture data
    const pkg_weight_in_kg = 175,
      distance_in_km = 100,
      offer_code = "OFR003";

    // make the assertions
    expect(
      getTheDiscountPercentage({ pkg_weight_in_kg, distance_in_km, offer_code })
    ).toBe(0);
  });
  it("should return the discount percentage 110 60 OFR002", async () => {
    // define fixture data
    const pkg_weight_in_kg = 110,
      distance_in_km = 60,
      offer_code = "OFR002";

    // make the assertions
    expect(
      getTheDiscountPercentage({ pkg_weight_in_kg, distance_in_km, offer_code })
    ).toBe(7);
  });
  it("should return the discount percentage 155 95 NA", async () => {
    // define fixture data
    const pkg_weight_in_kg = 115,
      distance_in_km = 95,
      offer_code = "NA";

    // make the assertions
    expect(
      getTheDiscountPercentage({ pkg_weight_in_kg, distance_in_km, offer_code })
    ).toBe(0);
  });
});
