
let connection;

const handleUserInput = function(data) {
  if(data === '\u0003'){
    process.exit();
  }

  if(data === 'w') {
    connection.write('Move: up')
  }
  if(data === 'a') {
    connection.write('Move: left')
  }
  if(data === 's') {
    connection.write('Move: down')
  }
  if(data === 'd') {
    connection.write('Move: right')
  }

};

const setUpInput = function(conn){
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  connection = conn;

  stdin.on('data',(data) => {
    handleUserInput(data)
  });
  return stdin;
}



 module.exports = { setUpInput };