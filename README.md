# canvas-fit [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Small module for fitting a canvas element within the bounds of its parent.
Useful, for example, for making a canvas fill the screen.

## Usage

[![NPM](https://nodei.co/npm/canvas-fit.png)](https://nodei.co/npm/canvas-fit/)

### resize = fit(canvas)

Creates a `resize` function for your `canvas` element. Calling this function
will resize the canvas to fit its parent element.

Here's a simple example to make your canvas update its dimensions when
resizing the window:

``` javascript
var fit = require('canvas-fit')
var canvas = document.createElement('canvas')

window.addEventListener('resize', fit(canvas), false)
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/canvas-fit/blob/master/LICENSE.md) for details.
