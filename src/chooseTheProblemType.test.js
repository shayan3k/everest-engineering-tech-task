const inquirer = require("inquirer");
const { chooseTheProblemType } = require("./chooseTheProblemType.js");

describe("check choose the problem type", () => {
  it("should equal First Problem", async () => {
    // define the assertion count
    expect.assertions(1);

    // mock the inquirer asnwer
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ problem_id: "First Problem" });

    // make the assertion
    await expect(chooseTheProblemType()).resolves.toEqual("First Problem");
  });

  it("should equal Second Problem", async () => {
    // define the assertion count
    expect.assertions(1);

    // mock the inquirer asnwer
    inquirer.prompt = jest
      .fn()
      .mockResolvedValue({ problem_id: "Second Problem" });

    // make
    await expect(chooseTheProblemType()).resolves.toEqual("Second Problem");
  });

  it("should equal Exit", async () => {
    // define the assertion count
    expect.assertions(1);

    // mock the inquirer asnwer
    inquirer.prompt = jest.fn().mockResolvedValue({ problem_id: "Exit" });

    // make the assertions
    await expect(chooseTheProblemType()).resolves.toEqual("Exit");
  });
});
