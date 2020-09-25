

const  connect  = require('./client');

console.log('Connecting ...');

let directions = ['Move: up','Move: left','Move: left','Move: down','Move: left'];

const connection = connect(directions);


const handleUserInput = function(data) {
  if(data === '\u0003'){
    process.exit();
  }
};

const setUpInput = function(){
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data',(data) => {
    handleUserInput(data)
  });
  return stdin;
}



connection.on('data',(data) => {
  console.log(data);
 });

 setUpInput();

 
 