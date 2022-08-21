// define sleep function
// const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const sleep = (ms = 0) => new Promise((r) => setTimeout(r, ms));

// export functions
module.exports = { sleep };
