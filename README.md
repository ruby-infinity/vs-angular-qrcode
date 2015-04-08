# vs-angular-qrcode

> generate dynamic qr code with logo image inside

![Qr code exaample](https://36.media.tumblr.com/3162acf63afc257281f27068ea8b6fb0/tumblr_nmhxhgfotj1unxngeo1_400.png)

## Getting Started

1. How ot Install

```bash
bower install vs-angular-qrcode --save-dev
```

and remember to include the `build/angular-qrcode.min.js` to your project. Then inject the `vs.qrcode` module into your angular app.

```javascript
angular.module('angular-qrcode-example', ['vs.qrcode']);
```

## How to Use

### 1. usage

#### Basic

```html
<qrcode data="your_data"></qrcode>
```

#### Advance

```html
<qrcode data="http://vs-zhang.github.io/"
	        img="https://avatars0.githubusercontent.com/u/3893244?v=3&s=460"
	        size="300"
	        type_number="5"
	        color="blue"
	        background="#d3e3f0"
	></qrcode>
```
### 2. Options

* data
- img
- typeNumber
- size
- color
- background

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
