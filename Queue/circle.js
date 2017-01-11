function CircleQueue () {
  if (!(this instanceof CircleQueue)) {
    return new CircleQueue(arguments);
  }
  this.items = [];
}

CircleQueue.prototype = {
  constructor: CircleQueue,

  size: function () {
    return this.items.length;
  },

  front: function () {
    return this.items[0];
  },

  init: function (list) {
    this.index = 0;
    this.items = list.slice();
  },

  next: function () {
    this.index ++;
    if (this.index >= this.size()) {
      this.index = 0;
    }
    return this.index;
  },

  remove: function () {
    this.items.splice(this.index, 1);
    if (this.index >= this.size()) {
      this.index = 0;
    }
    return this.index;
  },

  start: function (list, num) {
    this.init(list);
    while (this.size() > 1) {
      var n = num;
      while (n > 0) {
        this.next();
        n --;
      }
      this.remove();
    }
  }
};

exports = module.exports = CircleQueue;