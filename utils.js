/**
 * 创建有序的数组
 * @param max
 */
exports.createOrderList = function (max) {
  return Array.from(new Array(max), function (num, index) {
    return index;
  })
};

/**
 * 创建有序的ascii码列表
 * @param startChar
 * @param list
 * @returns {Array|*}
 */
exports.orderChar = function (startChar, list) {
  if (arguments.length < 2) {
    throw new SyntaxError('缺少参数, [startChar, list]');
  }
  var startNum = startChar.charCodeAt(0);
  return list.map(function (item) {
    return String.fromCharCode(startNum + item)
  });
};
