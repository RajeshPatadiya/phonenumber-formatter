module.exports = function (el, keyupFn) {
  el.pattern = '\\(\\d{3}\\) \\d{3}-\\d{4}'
  el.maxLength = 14

  el.onkeyup = function (e) {
    if ([
      'ArrowLeft', 'ArrowRight',
      'ArrowUp', 'ArrowDown',
      'Meta', 'Alt',
      'Control', 'Shift'
    ].indexOf(e.key) !== -1) return

    var formatted = e.target.value.replace(/[^\d]/g, '')

    if (formatted.length > 10) {
      formatted = formatted.substring(0,10)
    }

    if (formatted.length > 6) {
      formatted = formatted.substring(0,6)+'-'+formatted.substring(6)
    }

    if (formatted.length > 3) {
      formatted = formatted.substring(0,3)+') '+formatted.substring(3)
    }

    if (formatted.length > 0) {
      formatted = '('+formatted
    }

    e.target.value = formatted

    keyupFn(e)
  }
}