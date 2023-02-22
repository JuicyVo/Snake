const net = require("net");
const { stdin } = require("process");
const connect = require ("./client")

console.log("Connecting ...");
connect()

const setupInput = function () {
  const stdin = process.stdin
  stdin.setRawMode(true)
  stdin.setEncoding("utf8")
  stdin.resume()
  return stdin
}

const handleUserInput = function (data) {
  if (data === `\u0003`) {
    console.log ("CONTROL C WORKS")
    process.exit()
  }

}
setupInput()
stdin.on ("data" , handleUserInput)



// conn.on("connect", () => {
//   console.log (data)
// })