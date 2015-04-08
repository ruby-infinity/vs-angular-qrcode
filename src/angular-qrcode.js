/*
 * angular-qrcode v0.1.0
 * (c) 2015 vs-zhang http://vs-zhang.github.io
 * License: MIT
 */

angular.module('vs.qrcode', []).
  directive('qrcode', [function () {
    var drawQrcode = function (element, attrs) {
      console.log(attrs);
      //params setup
      var data = attrs.data,
        size = attrs.size || 300,
        img = attrs.img,
        typeNumber = attrs.typeNumber || 4,
        color = attrs.color || '#000',
        background = attrs.background || '#fff',
        imgSize = size / 5,
        imgPadding = 10,
        canvas,
        context,
        modulesCount,
        tileSize,
        qrcode;

      // setup canvas
      canvas = document.createElement('canvas');
      context = canvas.getContext('2d');
      canvas.width = size;
      canvas.height = size;

      // qrcode data init
      qrcode = new QRCode(typeNumber, QRErrorCorrectLevel.H);
      qrcode.addData(data);
      qrcode.make();

      // draw qr code
      modulesCount = qrcode.getModuleCount();
      tileSize = size / modulesCount;

      for (var row = 0; row < modulesCount; row++) {
        for (var col = 0; col < modulesCount; col++) {
          var w = (Math.ceil((col + 1) * tileSize) - Math.floor(col * tileSize)),
            h = (Math.ceil((row + 1) * tileSize) - Math.floor(row * tileSize));

          context.fillStyle = qrcode.isDark(row, col) ? color : background;
          context.fillRect(Math.round(col * tileSize), Math.round(row * tileSize), w, h);
        }
      }

      // draw img
      if (img) {
        var image = new Image();
        image.src = img;
        context.fillStyle = '#fff';
        context.fillRect((size - imgSize - imgPadding) / 2, (size - imgSize - imgPadding) / 2, imgSize + imgPadding, imgSize + imgPadding);
        context.drawImage(image, (size - imgSize) / 2, (size - imgSize) / 2, imgSize, imgSize);
      }

      // append canvas to element
      element.append(canvas);
    };

    return {
      restrict: 'E',
      replace: true,
      template: '<div class="qrcode"></div>',
      link: function (scope, element, attrs) {
        drawQrcode(element, attrs);
      }
    }
  }]);