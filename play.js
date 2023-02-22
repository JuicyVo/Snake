const net = require("net");
const { stdin } = require("process");
const connect = require ("./client");
const setupInput  = require("./input")

console.log("Connecting ...");
connect()

// const setupInput = function () {
//   const stdin = process.stdin
//   stdin.setRawMode(true)
//   stdin.setEncoding("utf8")
//   stdin.resume()
//   return stdin
// }
console.log (setupInput)
setupInput()
//stdin.on ("data" , handleUserInput) //????


// conn.on("connect", () => {
//   console.log (data)
// })