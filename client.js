const net = require("net");

const connect = function () { //establish connect function
  const conn = net.createConnection({ //create new connection object
    host: "localhost", //IP address
    port: 50541, //port number
  });

  conn.setEncoding("utf8"); //interpret data as text

  conn.on("connect", () => {
    console.log("Successfully connected to game server!")
    conn.write("Name: CNM");
  })

  conn.on("data", data => { //when data sent
    console.log(data); //log data
  });

  return conn;
};

module.exports = connect;
