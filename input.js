// const handleUserInput = require ("./play")

const handleUserInput = function (data) {
  if (data === `\u0003`) {
    console.log ("CONTROL C WORKS")
    process.exit()
  }

}

const setupInput = function () {
  const stdin = process.stdin
  stdin.setRawMode(true)
  stdin.setEncoding("utf8")
  stdin.resume
  stdin.on ("data" , handleUserInput);
  return stdin
}


module.exports = setupInput