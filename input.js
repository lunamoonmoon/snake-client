const { movements, chat } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //calls movement function
  return stdin;
};

const handleUserInput = function (key) { //movement for wasd keys
  if ( key === '\u0003' ) {
    process.exit();
  } else if (movements.hasOwnProperty(key)) {
    connection.write(movements[key]);
  } else if (chat.hasOwnProperty(key)) {
    connection.write(chat[key]);
  }
};

module.exports = setupInput;
