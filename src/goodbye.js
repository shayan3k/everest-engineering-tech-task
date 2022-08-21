const chalk = require("chalk");

async function goodbye() {
  // print the goodbye message
  console.log(`
        ${chalk.magentaBright(
          "THANKS FOR USING THIS APPLICATION \n \t HOPE TO SEE YOU SOON ♡ ♥💕❤"
        )}`);
}

// export function
module.exports = { goodbye };
