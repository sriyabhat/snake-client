

const  connect  = require('./client');

console.log('Connecting ...');

let directions = ['Move: up','Move: left','Move: left','Move: down','Move: left'];
const connection = connect(directions);

connection.on('data',(data) => {
  console.log(data);
 });

 