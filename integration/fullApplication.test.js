"use strict";

describe("check the functionality of the whole application", function () {
  const run = require("inquirer-test");
  const { UP, DOWN, ENTER } = run;

  const cliPath = `${__dirname}/../src/index.js`;

  it("check the first part of the application", async () => {
    // define the application inputs
    const INPUTS = [
      ENTER,
      "100 3",
      ENTER,
      "PKG1 5 5 OFR001",
      ENTER,
      "PKG2 15 5 OFR002",
      ENTER,
      "PKG3 10 100 OFR003",
      ENTER,
    ];

    // define the answers
    const ANSWER1 = "│    0    │ 'PKG1' │    0     │    175     │";
    const ANSWER2 = "│    1    │ 'PKG2' │    0     │    275     │";
    const ANSWER3 = "│    2    │ 'PKG3' │    35    │    665     │";

    // run the application
    let result = await run([cliPath], INPUTS);

    // assertions the result
    expect(result).toMatch(ANSWER1);
    expect(result).toMatch(ANSWER2);
    expect(result).toMatch(ANSWER3);
  });

  it("check the second part of the application", async () => {
    // define the inputs
    const INPUTS = [
      DOWN,
      ENTER,
      "100 5",
      ENTER,
      "PKG1 50 30 OFR001",
      ENTER,
      "PKG2 75 125 OFR008",
      ENTER,
      "PKG3 175 100 OFR003",
      ENTER,
      "PKG4 110 60 OFR002",
      ENTER,
      "PKG5 155 95 NA",
      ENTER,
      "2 70 200",
      ENTER,
    ];

    // define the asnwers
    const ANSWER1 =
      "│    0    │ 'PKG1' │    0     │    750     │        3.98        │";
    const ANSWER2 =
      "│    1    │ 'PKG2' │    0     │    1475    │        1.78        │";
    const ANSWER3 =
      "│    2    │ 'PKG3' │    0     │    2350    │        1.42        │";
    const ANSWER4 =
      "│    3    │ 'PKG4' │   105    │    1395    │        0.85        │";
    const ANSWER5 =
      "│    4    │ 'PKG5' │    0     │    2125    │        4.19        │";

    // run the application
    let result = await run([cliPath], INPUTS);

    // make the assertions
    expect(result).toMatch(ANSWER1);
    expect(result).toMatch(ANSWER2);
    expect(result).toMatch(ANSWER3);
    expect(result).toMatch(ANSWER4);
    expect(result).toMatch(ANSWER5);
  });
});
