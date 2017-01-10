var Stack = require('.');

/**
 * divide two from ten
 * only support positive number
 * @param data
 * @returns {string}
 */
function divide2 (data) {
  var stack = new Stack();
  while (data) {
    stack.push(data % 2);
    data = Math.floor(data / 2);
  }
  var res = '';
  while (!stack.isEmpty()) {
    res = res + stack.pop();
  }
  /* 补全前置0
  while (res.length % 4 !== 0) {
    res = '0'+res;
  }
  */
  return res;
}
exports = module.exports = divide2;
