//file for config constants
const IP = "localhost";
const PORT = 50541;
const initials = "LMM";
const movements = { //obj for movement keys
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
};
const chat = { //obj for chats to appear onscreen
  p: "Say: Pet me!",
  h: "Say: I\'m hungry :<",
};

module.exports = {
  IP,
  PORT,
  initials,
  movements,
  chat,
};
