

const  connect  = require('./client');

console.log('Connecting ...');
const connection = connect();

connection.on('data',(data) => {
  console.log(data);
 });

 