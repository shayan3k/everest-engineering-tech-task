const inquirer = require("inquirer");
const {
  askBaseDeliverCostAndNumberOfPackages,
  validator,
} = require("./askBaseDeliverCostAndNumberOfPackages.js");

describe("check choose askBaseDeliverCostAndNumberOfPackages functionality", () => {
  it("should equal the default value", async () => {
    // define the assertion counts
    expect.assertions(1);

    // mock the inquirer asnwer
    inquirer.prompt = jest.fn().mockResolvedValue({ answers: "100 5" });

    // make the assertions
    await expect(askBaseDeliverCostAndNumberOfPackages()).resolves.toEqual([
      100, 5,
    ]);
  });
  it("should equal the base delivery cost and number of packages first test", async () => {
    // define the assertion counts
    expect.assertions(1);

    // mock the inquirer asnwer
    inquirer.prompt = jest.fn().mockResolvedValue({ answers: "100 5" });

    // make the assertions
    await expect(askBaseDeliverCostAndNumberOfPackages()).resolves.toEqual([
      100, 5,
    ]);
  });
  it("should equal the base delivery cost and number of packages second test", async () => {
    // define the assertion counts
    expect.assertions(1);

    // mock the inquirer asnwer
    inquirer.prompt = jest.fn().mockResolvedValue({ answers: "50 3" });

    // make the assertions
    await expect(askBaseDeliverCostAndNumberOfPackages()).resolves.toEqual([
      50, 3,
    ]);
  });
});

describe("check choose the problem type validator", () => {
  it("check the function with validation inputs", async () => {
    // define the assertion count
    expect.assertions(1);

    // make the assertions
    await expect(validator("50 3")).resolves.toEqual(true);
  });

  it("check the function with validation inputs", async () => {
    // define the assertion count
    expect.assertions(1);

    // make the assertions
    await expect(validator("PKGS PKGS")).resolves.toEqual(
      "Incorrect asnwer, Please check your asnwer:"
    );
  });
});
