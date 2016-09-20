# phonenumber-formatter [![npm version](https://badge.fury.io/js/phonenumber-formatter.svg)](https://badge.fury.io/js/phonenumber-formatter)
A simple phonenumber formatter for HTML inputs. This package is meant for the front-end, so browserify or webpack will be necessary. It also only currently supports 10-digit numbers.

[Live example](https://renolc.github.io/phonenumber-formatter/)

### Installation

```
npm i phonenumber-formatter -S
```

### Usage

```html
<!-- index.html -->
<input type="text" id="phonenumber">
```

```javascript
// app.js
var formatPhonenumbers = require('phonenumber-formatter')

formatPhonenumbers(document.getElementById('phonenumber'))
```