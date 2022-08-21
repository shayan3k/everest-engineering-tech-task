const inquirer = require("inquirer");
const {
  getPackagesInformation,
  validator,
} = require("./getPackagesInformation.js");
const { sleep } = require("./sleep.js");

describe("check choose the problem type", () => {
  it("check the function with no iterations", async () => {
    // define the assertions count
    expect.assertions(1);

    // define number of iterations
    const no_of_packges = 0;

    // mock the inquirer asnwer
    inquirer.prompt = jest.fn().mockResolvedValue({});

    // make the assertions count
    await expect(getPackagesInformation({ no_of_packges })).resolves.toEqual(
      []
    );
  });
  it("check the function over one argument and one input", async () => {
    // define the assertions count
    expect.assertions(1);

    // define number of iterations
    const no_of_packges = 1;

    // mock the inquirer asnwer
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ answers: "PKG1 5 5 OFR001" });

    //  make the assertions
    await expect(getPackagesInformation({ no_of_packges })).resolves.toEqual([
      {
        distance_in_km: 5,
        offer_code: "OFR001",
        pkg_id: "PKG1",
        pkg_weight_in_kg: 5,
      },
    ]);
  });
  it("check the function over three argument and three input", async () => {
    // make the assertions
    expect.assertions(1);

    // define number of iterations
    const no_of_packges = 3;

    // mock the inquirer asnwer
    inquirer.prompt = jest
      .fn()
      .mockResolvedValueOnce({ answers: "PKG1 5 5 OFR001" })
      .mockResolvedValueOnce({ answers: "PKG2 15 5 OFR002" })
      .mockResolvedValueOnce({ answers: "PKG3 10 100 OFR003" });

    //  make the assertions
    await expect(getPackagesInformation({ no_of_packges })).resolves.toEqual([
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
    ]);
  });
  it("check the function over five argument and five input", async () => {
    // define the assertions count
    expect.assertions(1);

    // define number of iterations
    const no_of_packges = 5;

    // mock the inquirer asnwer
    inquirer.prompt = jest
      .fn()
      .mockResolvedValueOnce({ answers: "PKG1 50 30 OFR001" })
      .mockResolvedValueOnce({ answers: "PKG2 75 125 OFR008" })
      .mockResolvedValueOnce({ answers: "PKG3 175 100 OFR003" })
      .mockResolvedValueOnce({ answers: "PKG4 110 60 OFR002" })
      .mockResolvedValueOnce({ answers: "PKG5 155 95 NA" });

    // make the assertions
    await expect(getPackagesInformation({ no_of_packges })).resolves.toEqual([
      {
        distance_in_km: 30,
        offer_code: "OFR001",
        pkg_id: "PKG1",
        pkg_weight_in_kg: 50,
      },
      {
        distance_in_km: 125,
        offer_code: "OFR008",
        pkg_id: "PKG2",
        pkg_weight_in_kg: 75,
      },
      {
        distance_in_km: 100,
        offer_code: "OFR003",
        pkg_id: "PKG3",
        pkg_weight_in_kg: 175,
      },
      {
        distance_in_km: 60,
        offer_code: "OFR002",
        pkg_id: "PKG4",
        pkg_weight_in_kg: 110,
      },
      {
        distance_in_km: 95,
        offer_code: "NA",
        pkg_id: "PKG5",
        pkg_weight_in_kg: 155,
      },
    ]);
  });
});

describe("check choose the problem type validator", () => {
  it("check the function with validation inputs", async () => {
    // define the assertion count
    expect.assertions(1);

    // mock the inquirer asnwer
    inquirer.prompt = jest.fn().mockResolvedValue({});
    // make the assertions
    await expect(validator("PKG1 5 5 OFR001")).resolves.toEqual(true);
  });

  it("check the function with validation inputs", async () => {
    // define the assertions count
    expect.assertions(1);

    // mock the inquirer asnwer
    inquirer.prompt = jest.fn().mockResolvedValue({});

    // make the assertions
    await expect(validator("PKG1 PKG1 PKG1 PKG1")).resolves.toEqual(
      "Incorrect asnwer, Please check your asnwer:"
    );
  });
});
