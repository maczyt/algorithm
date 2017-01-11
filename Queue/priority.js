/**
 * 优先队列
 * @returns {PriorityQueue}
 * @constructor
 */
function PriorityQueue () {
  if (!(this instanceof  PriorityQueue)) {
    return new PriorityQueue(arguments);
  }
  this.items = [];
}

PriorityQueue.prototype = {
  constructor: PriorityQueue,

  enqueue: function (item, priority) {
    var element = new ItemElement(item, priority);
    if (this.isEmpty()) {
      this.items.push(element);
    } else {
      var i, len = this.size();
      for (i = 0; i < len; i++) {
        // 最小优先, priority按从小到大排列
        var added = false;
        if (this.items[i].priority > priority) {
          this.items.splice(i, 0, element);
          added = true;
        }
      }
      if (!added) {
        this.items.push(element);
      }
    }
  },

  dequeue: function () {
    var element = this.items.shift();
    return element.item;
  },

  isEmpty: function () {
    return this.items.length == 0;
  },

  size: function () {
    return this.items.length;
  },

  front: function () {
    return this.items[0];
  }

};

/**
 * 队列元素
 * @param item
 * @param priority
 * @constructor
 */
function ItemElement(item, priority) {
  this.item = item;
  this.priority = priority;
}

exports = module.exports = PriorityQueue;

