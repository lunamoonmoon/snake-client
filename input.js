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
  if ( key === '\u0003' ) { //if ctrl c
    process.exit(); //exit game
  } else if (movements.hasOwnProperty(key)) { //checks if key is in movement obj
    connection.write(movements[key]); //sends move to server
  } else if (chat.hasOwnProperty(key)) { //check if chat key is pressed
    connection.write(chat[key]); //sends chat to server to display
  }
};

module.exports = setupInput;
