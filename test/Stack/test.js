var rootBase = process.env.PWD;
var join = require('path').join;
var expect = require('chai').expect;
var stackDir = join(rootBase, 'Stack');
var Stack = require(stackDir);

describe('栈的创建', function () {
  it('应该为空数组', function () {
    expect(Stack().size()).to.be.equal(0)
  })
});

describe('push', function () {
  it('值在Push后应该返回1', function () {
    expect(Stack().push(6)).to.be.equal(1)
  })
});

describe('pop', function () {
  it('值为6', function () {
    var stack = Stack();
    stack.push(6);
    expect(stack.pop()).to.be.equal(6)
  })
});

describe('peek', function () {
  it('值为6', function () {
    var stack = Stack();
    stack.push(6);
    expect(stack.peek()).to.be.equal(6)
  })
});

describe('size', function () {
  it('等于1', function () {
    var stack = Stack();
    stack.push(6);
    expect(stack.size()).to.be.equal(1)
  })
});

describe('isEmpty', function () {
  it('为空', function () {
    expect(Stack().isEmpty()).to.be.ok;
  })
});

describe('clear', function () {
  it('数组为空', function () {
    var stack = Stack();
    stack.push(6);
    stack.clear();
    expect(stack.isEmpty()).to.be.ok;
  })
});

describe('十进制转成二进制', function () {
  it('等于1010', function () {
    var divide2 = require(join(stackDir, 'ten2two'));
    expect(divide2(10)).to.be.equal('1010');
  })
});