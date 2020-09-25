const IP = '10.0.2.15';
const port = 50541;
const controls = {
  up : 'w',
  down : 's',
  left : 'a',
  right : 'd'
}

const messages = {
  Hello : '1',
  ThankYou : '2',
  WellPlayed : '3',
  oops : '4'
}

const name = 'SSB'


module.exports = {
  IP,
  port,
  controls,
  messages,
  name
}