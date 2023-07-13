const connect = function () { //establish connect function
  const conn = net.createConnection({ //create new connection object
    host: "localhost", //IP address
    port: 50541, //port number
  });

  conn.setEncoding("utf8"); //interpret data as text

  conn.on("data", function(data) {
    console.log(data);
  });

  return conn;
};
