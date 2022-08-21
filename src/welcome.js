const figlet = require("figlet");
const gradient = require("gradient-string");
const chalk = require("chalk");
const { sleep } = require("./sleep.js");

async function welcome() {
  // display the welcome message
  figlet(`Kiki Courier Service`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + "\n");
  });

  // inwoke a sleep method
  await sleep();

  // display additional instructions
  console.log(`
        ${chalk.bgBlue("HOW IT WORKS")}
        Welcome to Delivery Cost Estimation with Offers
        Please fill the ${chalk.bgRed("required information")} bellow ...
        `);
}

// export functions
module.exports = { welcome };
