const inquirer = require("inquirer");
const {
  askNoOfVehiclesMaxSpeedMaxCarriableWeight,
  validator,
} = require("./askNoOfVehiclesMaxSpeedMaxCarriableWeight.js");

describe("check choose the problem type", () => {
  it("should equal correct answer", async () => {
    // define the assertion counts
    expect.assertions(1);

    // mock the inquirer inputs
    inquirer.prompt = jest.fn().mockResolvedValue({ answers: "2 70 200" });

    // assert the results
    await expect(askNoOfVehiclesMaxSpeedMaxCarriableWeight()).resolves.toEqual([
      2, 70, 200,
    ]);
  });
});

describe("check choose the problem type validator", () => {
  it("check the function with validation inputs", async () => {
    expect.assertions(1);

    await expect(validator("2 70 200")).resolves.toEqual(true);
  });

  it("check the function with validation inputs", async () => {
    expect.assertions(1);

    await expect(validator("PKGS PKGS")).resolves.toEqual(
      "Incorrect asnwer, Please check your asnwer:"
    );
  });
  it("check the function with validation inputs", async () => {
    expect.assertions(1);

    await expect(validator("PKGS PKGS 12")).resolves.toEqual(
      "Incorrect asnwer, Please check your asnwer:"
    );
  });
  it("check the function with validation inputs", async () => {
    expect.assertions(1);

    await expect(validator("PKGS 12 PKGS")).resolves.toEqual(
      "Incorrect asnwer, Please check your asnwer:"
    );
  });
});
