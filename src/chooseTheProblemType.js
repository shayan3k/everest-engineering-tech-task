const inquirer = require("inquirer");

async function chooseTheProblemType() {
  // inquirer for the problem type
  const { problem_id } = await inquirer.prompt({
    name: "problem_id",
    type: "list",
    message: "Please Choose the Problem Type\n",
    choices: ["First Problem", "Second Problem", "Exit"],
  });

  // return the problem type
  return problem_id;
}

// export function
module.exports = { chooseTheProblemType };
