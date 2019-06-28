function add(a,b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function sum(num) {
  return num.reduce((a, b) => a + b, 0)
}

module.exports = {add, subtract, sum}