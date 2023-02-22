// const handleUserInput = require ("./play")
let connection

const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin
  stdin.setRawMode(true)
  stdin.setEncoding("utf8")
  stdin.resume
  stdin.on ("data" , handleUserInput);
  return stdin
}

const handleUserInput = function (data) {
  if (data === `\u0003`) {
    //console.log ("CONTROL C WORKS")
    process.exit()
  }
  if (data === '\u0077') {
    //console.log ("Up!")
    connection.write ("Move: up")
  }
  if (data === '\u0061') {
    //console.log ("Left")
    connection.write ("Move: left")
  }
  if (data === '\u0073') {
    //console.log ("Down")
    connection.write ("Move: down")
  }
  if (data === '\u0064') {
    //console.log ("Right")
    connection.write ("Move: right")
  }
}



module.exports = setupInput