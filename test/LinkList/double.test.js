var join = require('path').join;
var expect = require('chai').expect;
var linkListDir = join('../../', 'LinkList');
var DoublyLinkList = require(linkListDir+'/double');
var utils = require('../../utils');

function init(num, index) {

}

describe('Insert', function () {
  var dLL = new DoublyLinkList();
  var data = utils.orderChar('a', utils.createOrderList(10));
  data.forEach(function (char, index) {
    if (index % 2 === 0)
      dLL.insert(index, char);
  });
  it('遍历插入测试', function () {
    expect(dLL.toString()).to.be.equal(data.filter(function (char, index) {
      return index % 2 === 0;
    }).toString().replace(/,/g, ''));
  });
});

describe('Remove', function () {
  var dLL = new DoublyLinkList();
  var nums = utils.createOrderList(10);
  var data = utils.orderChar('a', nums);
  data.forEach(function (char, index) {
    dLL.insert(index, char);
  });
  nums.reverse().forEach(function (num) {
    if (num % 2 === 0) {
      dLL.removeAt(num);
    }
  });
  it('删除偶数', function () {
    expect(dLL.toString()).to.be.equal(data.filter(function (char, index) {
      return index % 2 !== 0;
    }).toString().replace(/,/g, ''));
  })
});