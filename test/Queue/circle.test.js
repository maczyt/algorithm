var join = require('path').join;
var expect = require('chai').expect;
var queueDir = join('../../', 'Queue');
var CircleQueue = require(join(queueDir, 'circle'));

describe('击鼓传花', function () {
  it('胜者是John', function () {
    var cq = CircleQueue(),
        names = ['John','Jack','Camila','Ingrid','Carl'],
        num = 7;
    cq.start(names, num);
    expect(cq.front()).to.be.equal('John');
  })
});
