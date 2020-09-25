const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function(directions) {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect',() => {
    console.log("Successfully connected to the game server");    
    conn.write('Name: SSB')
    
    /*i = 3000;
    for(let item of directions) {
      setTimeout(() => {
        console.log(item);  
        conn.write(item);      
      },i);
    
      i += 1000;  
    }  
    
    for(let item of directions) {
      setInterval(() => {
        console.log(item);  
        conn.write(item);      
      },i);
    
      i += 500;  
    }
    */
    
  });

  
  return conn;
}

module.exports = connect;