function LinkedList () {
  if (!(this instanceof LinkedList)) {
    return new LinkedList(arguments);
  }
  this.length = 0;
  this.head = null;
}

LinkedList.prototype = {
  constructor: LinkedList,

  /**
   * 向尾部添加一个元素
   * @param element
   */
  append: function (element) {
    var node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      var _next = this.head;
      while (_next.next !== null) {
        _next = _next.next;
      }
      _next.next = node;
    }
    this.length ++;
  },

  /**
   * 插入元素
   * @param position [0, this.length-1]
   * @param element
   * @returns {*}
   */
  insert: function (position, element) {
    if (position >= this.length) {
      return this.append(element);
    }
    if (position < 0) {
      throw new RangeError('插入位置 > 0 && <= '+this.length)
    }
    var _next = null;
    var node = new Node(element);
    if (position === 0) {
      _next = this.head;
      this.head = node;
      node.next = _next;
      this.length ++;
      return ;
    }
    _next = this.head;
    while (position > 1) {
      _next = _next.next;
      position --;
    }
    node.next = _next.next;
    _next.next = node;
    this.length ++;
  },

  /**
   * 移除元素
   * @param element
   */
  remove: function (element) {
    if (this.head === null) return;
    var next = this.head;
    while (next.next !== null) {
      var _next = next.next;
      if (_next.element === element) {
        next.next = _next.next;
        this.length --;
        return;
      }
      next = _next;
    }
    if (this.head.element === element) {
      this.head = this.head.next;
      this.length --;
    }
  },

  /**
   * 通过下标来移除元素
   * @param position
   */
  removeAt: function (position) {
    if (position < 0 || position >= this.length) {
      throw new RangeError('大小应该为[0, '+(this.length - 1)+']');
    }
    var idx = 0,
        next = this.head,
        _next;
    while (idx < position-1) {
      next = next.next;
      idx ++;
    }
    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
      } else {
        this.head = this.head.next;
      }
    } else {
      _next = next.next;
      next.next = _next.next;
    }
    this.length --;
  },

  /**
   * 返回元素位置
   * @param element
   * @returns {number}
   */
  indexOf: function (element) {
    if (this.head === null) return -1;
    var next = this.head,
        idx = 0;
    while (idx < this.length) {
      if (next.element === element) {
        return idx;
      }
      next = next.next;
      idx ++;
    }
    return -1;
  },

  size: function () {
    return this.length;
  },

  isEmpty: function () {
    return this.length === 0
  },

  toString: function () {
    if (this.head === null) {
      return '';
    }
    var arr = [];
    var next = this.head;
    while (next.next !== null) {
      arr.push(next.element);
      next = next.next;
    }
    arr.push(next.element);
    return arr.toString();
  }
};


/**
 * 节点
 * @param element
 * @constructor
 */
function Node (element) {
  this.element = element;
  this.next = null;
}


exports = module.exports = LinkedList;

