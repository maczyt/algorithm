function DoublyLinkList () {

  /**
   * 定义元素
   * @param element
   * @constructor
   */
  function Node (element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
  var head = null,
      tail = null,
      length = 0;

  this.getHead = function () {
    return head;
  };

  this.getTail = function () {
    return tail;
  };

  this.size = function () {
    return length;
  };

  /**
   * 尾部添加
   * 时间复杂度为O1
   * @param element
   */
  this.append = function (element) {
    var node = new Node(element);
    var current = tail;
    if (!length) {
      head = node;
      tail = node;
    } else {
      current.next = node;
      node.prev = current;
      tail = node;
    }
    length ++;
  };

  /**
   * 插入数据到链表
   * @param position
   * @param element
   */
  this.insert = function (position, element) {
    if (!length || position >= length) {
      return this.append(element);
    }
    if (position >=0 && position < length) {
      var index = 0,
          previous = null,
          current = head;
      while (index ++ < position) {
        current = current.next;
      }
      if (position > Math.floor(length / 2)) {
        current = tail;
        index = length-1;
        while (index -- > position) {
          current = current.prev;
        }
      }
      var node = new Node(element);
      if (current.prev) {
        previous = current.prev;
        previous.next = node;
        node.prev = previous;
        node.next = current;
        current.prev = node;
      } else {
        head = node;
        node.next = current;
        current.prev = node;
      }
      length ++;
    } else {
      throw new RangeError('范围有错，应该为[0, ~]');
    }
  };

  /**
   * 移除某位置的元素
   * @param position
   * @returns {*}
   */
  this.removeAt = function (position) {
    if (position >= 0 && position < length) {
      var current, index;
      if (position > Math.floor(length / 2)) {
          current = tail;
          index = length - 1;
        while (index -- > position) {
          current = current.prev;
        }
      } else {
        current = head;
        index = 0;
        while (index ++ < position) {
          current = current.next;
        }
      }
      if (!current.prev) {
        head = current.next;
      } else if (!current.next) {
        tail = current.prev;
      } else {
        var previous = current.prev,
            next = current.next;
        previous.next = next;
        next.prev = previous;
      }
      length --;
      return current;
    } else {
      return null;
    }
  };

  this.toString = function () {
    var string = '',
        current = head;
    while (current) {
      string += current.element;
      current = current.next;
    }
    return string;
  };
}

exports = module.exports = DoublyLinkList;
