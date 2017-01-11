function Queue () {
  if (!(this instanceof Queue)) {
    return new Queue(arguments);
  }
  this.items = [];
}

Queue.prototype = {
  constructor: Queue,

  /**
   * 往队列尾部加入元素
   * @param item
   * @returns {Number}
   */
  enqueue: function (item) {
    return this.items.push(item);
  },

  /**
   * 移除队列头元素
   * @returns {*}
   */
  dequeue: function () {
    return this.items.shift();
  },

  /**
   * 返回队列头元素
   * @returns {*}
   */
  front: function () {
    return this.items[0];
  },

  /**
   * 判断队列是否为空
   * @returns {boolean}
   */
  isEmpty: function () {
    return this.items.length == 0;
  },

  /**
   * 返回队列长度
   * @returns {Number}
   */
  size: function () {
    return this.items.length
  },

  /**
   * 清空队列
   */
  clear: function () {
    this.items.length = 0
  }
};

exports = module.exports = Queue;
