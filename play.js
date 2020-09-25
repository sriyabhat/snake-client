

const  connect  = require('./client');

console.log('Connecting ...');

let directions = ['Move: up','Move: left','Move: left','Move: down','Move: left'];

const connection = connect(directions);



const setUpInput = function(){
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  

  stdin.on('data',(data) => {
    if(data === '\u0003'){
      process.exit();
    }
    else {
      stdin.resume();
    }
  });
  return stdin;
}



connection.on('data',(data) => {
  console.log(data);
 });

 setUpInput();

 
 