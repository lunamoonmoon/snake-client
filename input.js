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
  switch (key) {
    case '\u0003': //if ctrl c
      process.exit(); //exit game
      break;
    case 'w':
      connection.write("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    case 'p':
      connection.write("Say: Pet me!");
      break;
    case 'h':
      connection.write("Say: I\'m hungry :<");
      break;
  }
};

module.exports = setupInput;
