module.exports = fit

function fit(canvas) {
  canvas.style.position = canvas.style.position || 'absolute'
  canvas.style.top = 0
  canvas.style.left = 0

  return resize()

  function resize() {
    if (canvas.parentNode && canvas.parentNode !== document.body) {
      var width = canvas.parentNode.clientWidth|0
      var height = canvas.parentNode.clientHeight|0
    } else {
      var width = window.innerWidth
      var height = window.innerHeight
    }

    canvas.width = width
    canvas.height = height
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'

    return resize
  }
}
