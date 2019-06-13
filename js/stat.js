'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var OFFSET = 10;
var INDENT_X = 150;
var INDENT_Y_TEXT = 260;
var GAP = 90;
var HEIGHT_HISTOGRAM = 150;
var HISTOGRAM_WIDTH = 40;

var placeCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = Math.floor(arr[i]);
    }
  }
  return maxElement;
};

function colorFon() {
  var g = Math.floor(Math.random() * (256));
  var b = 255;
  return '#' + '00' + g.toString(16) + b.toString(16);
}

window.renderStatistics = function (ctx, names, times) {
  placeCloud(ctx, CLOUD_X + OFFSET, CLOUD_Y + OFFSET, 'rgba(0, 0, 0, 0.7)');
  placeCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  var maxTime = getMaxElement(times);
  ctx.fillStyle = '#000'; ctx.font = '16px "PT Mono"';
  ctx.fillText('Ура вы победили!', 140, 40);
  ctx.fillText('Список результатов:', 140, 60);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], INDENT_X + (GAP * i), INDENT_Y_TEXT);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = colorFon();
    }
    ctx.fillRect(INDENT_X + (GAP * i), INDENT_Y_TEXT - Math.floor(times[i]) * (HEIGHT_HISTOGRAM / maxTime) - OFFSET * 2, HISTOGRAM_WIDTH, (HEIGHT_HISTOGRAM / maxTime) * Math.floor(times[i]));
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), INDENT_X + (GAP * i), INDENT_Y_TEXT - Math.floor(times[i]) * (HEIGHT_HISTOGRAM / maxTime) - OFFSET * 3);
  }
};
