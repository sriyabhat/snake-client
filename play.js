

const  connect  = require('./client');

const {setUpInput} = require('./input');

console.log('Connecting ...');

let directions = ['Move: up','Move: left','Move: left','Move: down','Move: left'];

const connection = connect(directions);
setUpInput(connection);




 
 