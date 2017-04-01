/**
 * 渲染数据成柱状图
 * @param array
 * @returns {*}
 */
function render(array) {
  var html = [];
  for (var i = 0; i < array.length; i ++) {
    html.push('<div style="justify-content: center; display: flex; align-items: flex-end; vertical-align: bottom; height: '+(array[i] * 30)+'px; width: 50px;">' + array[i] + '</div>');
  }
  var div = document.createElement('div');
  div.className = 'container';
  document.body.appendChild(div);
  div.innerHTML = html.join('');
  return [].slice.call(div.querySelectorAll('div'), 0);
}

/**
 * 交换符合条件的数据
 * @param t
 * @param divs
 * @param ind1
 * @param ind2
 * @param val1
 * @param val2
 */
function swap (t, divs, ind1, ind2, val1, val2) {
  t.add(function () {
    divs[ind1].style.height = val1 * 30 + 'px';
    divs[ind1].textContent = val1;
    divs[ind2].style.height = val2 * 30 + 'px';
    divs[ind2].textContent = val2;
    divs.forEach(function (item) {
      item.className = '';
    });
    divs[ind1].className = 'active';
    divs[ind2].className = 'active';

  });
}

/**
 * Event loop
 * @param defaultDelay
 * @constructor
 */
function TimedQueue (defaultDelay) {
  this.queue = [];
  this.defaultDelay = defaultDelay || 3000;
}
TimedQueue.prototype = {
  add: function (fn, delay) {
    this.queue.push({
      fn: fn,
      delay: delay
    })
  },
  run: function () {
    if (this.queue.length <= 0) return;
    var self = this
      , at = this.queue.shift();
    at && setTimeout(function () {
      at.fn();
      self.run();
    }, at.delay || self.defaultDelay)
  }
};