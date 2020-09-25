const { controls , messages } = require('./constants');

const messageKeys = Object.keys(messages);
const controlKeys = Object.keys(controls);


let connection;


const handleUserInput = function(data) {
  if(data === '\u0003'){
    process.exit();
  }

  for(var item of controlKeys){
    if(data === controls[item]) {
      connection.write(`Move: ${item}`);
    }
  }

  

  for(var item of messageKeys){
    if(data === messages[item]) {
      connection.write(`Say: ${item}`);
    }
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