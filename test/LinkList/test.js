var join = require('path').join;
var expect = require('chai').expect;
var linkListDir = join('../../', 'LinkList');
var LinkList = require(linkListDir);

describe('append', function () {
  it('链表为[a,b,c,d]', function () {
    var linkList = LinkList(),
        arr = ['a', 'b', 'c', 'd'];
    arr.map(function (item) {
      linkList.append(item)
    });
    expect(linkList.toString()).to.be.equal(arr.toString());
  });
});

describe('insert', function () {
  var arr = ['a', 'b', 'c'],
      linkList = LinkList(),
      _arr = [];
  arr.map(function (item) {
    linkList.append(item)
  });
  _arr = arr.slice();
  _arr.unshift('d');
  it('insert 0, 应该为'+_arr, function () {
    linkList.insert(0, 'd');
    arr.unshift('d');
    expect(linkList.toString()).to.be.equal(arr.toString());
  });
  _arr.push('e');
  it('insert ' + linkList.length + ', 应该为'+_arr, function () {
    linkList.insert(linkList.length, 'e');
    arr.push('e');
    expect(linkList.toString()).to.be.equal(arr.toString());
  });
  _arr.splice(Math.floor(linkList.length / 2), 0, 'f');
  it('insert ' + Math.floor(linkList.length / 2) + ', 应该为'+_arr, function () {
    var ind = Math.floor(linkList.length / 2);
    linkList.insert(ind, 'f');
    arr.splice(ind, 0, 'f');
    expect(linkList.toString()).to.be.equal(arr.toString());
  });
});

describe('remove', function () {
  var arr = ['a', 'b', 'c', 'd', 'e'],
      linkList = LinkList();
  arr.map(function (item) {
    linkList.append(item);
  });
  it('remove '+arr[0]+', 应该等于'+arr.slice(1), function () {
    linkList.remove(arr[0]);
    arr.shift();
    expect(linkList.toString()).to.be.equal(arr.toString());
  });
  it('remove '+arr[arr.length-1]+', 应该等于'+arr.slice(0, arr.length-1), function () {
    linkList.remove(arr[arr.length-1]);
    arr.pop();
    expect(linkList.toString()).to.be.equal(arr.toString());
  });
  it('remove '+arr[Math.floor(arr.length / 2)]+', 应该等于'+arr.slice(0, Math.floor(arr.length / 2)).concat(arr.slice(Math.floor(arr.length / 2)+1)), function () {
    linkList.remove(arr[Math.floor(arr.length / 2)]);
    arr.splice(Math.floor(arr.length / 2), 1);
    expect(linkList.toString()).to.be.equal(arr.toString());
  });
});

describe('indexOf', function () {
  var arr = ['a', 'b', 'c'],
      linkList = LinkList();
  arr.map(function (item) {
    linkList.append(item);
  });
  it('a为0', function () {
    expect(linkList.indexOf('a')).to.be.equal(arr.indexOf('a'));
  });
  it('b为1', function () {
    expect(linkList.indexOf('b')).to.be.equal(arr.indexOf('b'));
  });
  it('c为2', function () {
    expect(linkList.indexOf('c')).to.be.equal(arr.indexOf('c'));
  });
  it('d为-1', function () {
    expect(linkList.indexOf('d')).to.be.equal(arr.indexOf('d'));
  });
});

describe('removeAt', function () {
  var arr = ['a', 'b', 'c'],
      linkList = LinkList();
  arr.map(function (item) {
    linkList.append(item);
  });
  var _arr = arr.slice();
  _arr.splice(0, 1);
  it('remove 0, 等于'+_arr, function () {
    linkList.removeAt(0);
    arr.splice(0, 1);
    expect(linkList.toString()).to.be.equal(arr.toString());
  });
  _arr.splice(1, 1);
  it('remove 1, 等于'+_arr, function () {
    linkList.removeAt(1);
    arr.splice(1, 1);
    expect(linkList.toString()).to.be.equal(arr.toString());
  });

});