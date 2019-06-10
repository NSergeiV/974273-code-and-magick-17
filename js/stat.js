var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var OFFSET = 10;
var INDENT_X = 150;
var INDENT_Y_TEXT = 260;
var INDENT_Y_HISTOGRAM = 90;
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
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  placeCloud(ctx, CLOUD_X + OFFSET, CLOUD_Y + OFFSET, 'rgba(0, 0, 0, 0.7)');
  placeCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  var maxTime = getMaxElement(times);
  ctx.fillStyle = '#000';ctx.font = '16px "PT Mono"';
  ctx.fillText('Ура вы победили!', 140, 40);
  ctx.fillText('Список результатов:', 140, 60);

  var sortNames = ['Вы', 'Егор', 'Юля', 'Иван'];
  var colorFon = [ctx.fillStyle = 'rgba(255, 0, 0, 1)', ctx.fillStyle = 'rgba(0, 0, 255, 1)', ctx.fillStyle = 'rgba(0, 100, 255, 1)', ctx.fillStyle = 'rgba(0, 200, 255, 1)'];
  for (var i = 0; i < sortNames.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], INDENT_X + (GAP * i), INDENT_Y_TEXT);
    ctx.fillStyle = colorFon[i];
    ctx.fillRect(INDENT_X + (GAP * i), INDENT_Y_HISTOGRAM, HISTOGRAM_WIDTH, (HEIGHT_HISTOGRAM / maxTime) * times[i]);
  }
};
