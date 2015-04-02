var size = require('element-size')

module.exports = fit

function fit(canvas, parent, scale) {
  canvas.style.position = canvas.style.position || 'absolute'
  canvas.style.top = 0
  canvas.style.left = 0

  resize.scale  = parseFloat(scale || 1)
  resize.parent = parent

  return resize()

  function resize() {
    var p = resize.parent || canvas.parentNode
    if (p && p !== document.body) {
      var psize  = size(p)
      var width  = psize[0]|0
      var height = psize[1]|0
    } else {
      var width  = window.innerWidth
      var height = window.innerHeight
    }

    canvas.width = width * resize.scale
    canvas.height = height * resize.scale
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'

    return resize
  }
}
