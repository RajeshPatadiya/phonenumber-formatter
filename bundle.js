(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (el) {
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
  }
}
},{}],2:[function(require,module,exports){
var formatPhonenumbers = require('phonenumber-formatter')
formatPhonenumbers(document.getElementById('phone'))
},{"phonenumber-formatter":1}]},{},[2]);
