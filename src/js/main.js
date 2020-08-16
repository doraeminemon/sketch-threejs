require("@babel/polyfill");

const ConsoleSignature = require('./common/ConsoleSignature.js').default;
const redirectOldSketches = require('./common/redirectOldSketches.js').default;

const page = document.querySelector('.l-page');
const pageId = page.dataset.id;
const consoleSignature = new ConsoleSignature();

// running each init functions.
if (pageId == 'index') {
  require('./index/init.js').default();
} else {
  const canvas = document.getElementById('canvas-webgl');
  canvas.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });
  canvas.addEventListener('selectstart', function (event) {
    event.preventDefault();
  });

  switch (pageId) {
    case 'distort':     require('./sketch/distort/init.js').default(); break;
    default:
  }
}

// redirect from old sketches url.
redirectOldSketches();
