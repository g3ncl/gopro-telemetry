// Lets other processes run to avoid blocking the server or browser for too long

// I made this function ineffective because will be running in a worker.

/** @type {() => Promise<void>} */
module.exports = function () {
  return Promise.resolve();
};
