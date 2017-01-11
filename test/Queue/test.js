var join = require('path').join;
var expect = require('chai').expect;
var queueDir = join('../../', 'Queue');
var Queue = require(queueDir);

describe('队列的创建', function () {
  it('instanceof Queue', function () {
    expect(Queue() instanceof Queue).to.be.ok;
  })
});

describe('enqueue', function () {
  it('返回1', function () {
    expect(Queue().enqueue(6)).to.be.equal(1);
  })
});

describe('dequeue', function () {
  it('等于6', function () {
    var queue = Queue();
    queue.enqueue(6);
    queue.enqueue(5);
    expect(queue.dequeue()).to.be.equal(6);
  })
});

describe('isEmpty', function () {
  it('为空', function () {
    expect(Queue().isEmpty()).to.be.ok;
  })
});

describe('size', function () {
  it('为0', function () {
    expect(Queue().size()).to.be.equal(0);
  })
});