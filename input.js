

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



 module.exports = { setUpInput };