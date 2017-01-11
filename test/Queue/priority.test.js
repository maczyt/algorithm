var join = require('path').join;
var expect = require('chai').expect;
var queueDir = join('../../', 'Queue');
var PriorityQueue = require(join(queueDir, 'priority'));

describe('入栈测试', function () {
  it('首元素为maczyt', function () {
    var q = PriorityQueue();
    q.enqueue('shikokuyt', 5);
    q.enqueue('maczyt', 1);
    expect(q.front().item).to.be.equal('maczyt')
  })
});
