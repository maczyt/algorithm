function Stack() {
  if (!(this instanceof Stack)) {
    return new Stack(arguments)
  }
  this.items = []; // 使用数组这数据结构来存储栈里的元素
}
Stack.prototype = {
  constructor: Stack,

  /**
   * add item into stack top
   * @param item
   * @returns {Number}
   */
  push: function (item) {
    try {
      this.items.push(item);
      return 1;
    } catch (e) {
      return 0;
    }
  },

  /**
   * return stack top item
   * @returns {*}
   */
  peek: function () {
    return this.items[this.items.length - 1]
  },

  /**
   * remove stack top item & return it
   * @returns {*}
   */
  pop: function () {
    return this.items.pop()
  },

  /**
   * check stack is Empty
   * @returns {boolean}
   */
  isEmpty: function () {
    return this.items.length == 0;
  },

  /**
   * clear stack
   */
  clear: function () {
    this.items.length = 0
  },

  /**
   * return stack items size
   * @returns {Number}
   */
  size: function () {
    return this.items.length
  }
};
exports = module.exports = Stack;