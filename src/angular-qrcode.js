/*
 * angular-qrcode v0.1.0
 * (c) 2015 vs-zhang http://vs-zhang.github.io
 * License: MIT
 */

angular.module('vs.qrcode', []).
  directive('qrcode', [function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="qrcode"></div>',
      link: function (scope, element, attrs) {
        var data = attrs.data,
            img = attrs.img,
            size = attrs.size;

        var canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        var context = canvas.getContext('2d');

        element.append(canvas);

        qrcode = new QRCode(4, QRErrorCorrectLevel.M);
        qrcode.addData(data);
        qrcode.make();

        var modules = qrcode.getModuleCount();

        var tile = attrs.size/modules;

        var image = new Image();
        image.src = img;

        var imgSize = size/4;
        var imgPos = size - imgSize;
        for (var row = 0; row < modules; row++) {
          for (var col = 0; col < modules; col++) {
            var w = (Math.ceil((col + 1) * tile) - Math.floor(col * tile)),
              h = (Math.ceil((row + 1) * tile) - Math.floor(row * tile));

            context.fillStyle = qrcode.isDark(row, col) ? '#000' : '#fff';
            context.fillRect(Math.round(col * tile), Math.round(row * tile), w, h);
          }
        }

        context.fillStyle = '#fff';
        context.fillRect(imgPos/2,imgPos/2,imgSize,imgSize);
        context.drawImage(image, imgPos/2, imgPos/2, imgSize,imgSize);
      }
    }
  }]);