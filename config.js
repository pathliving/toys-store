/* global module */

let config = {
  "notGetBlocks": [
    //"blocks-demo.html"
  ],
  "ignoredBlocks": [
    "no-js"
  ],
  "alwaysAddBlocks": [
    "sprite-svg",
    // "sprite-png",
    // "object-fit-polyfill",
  ],
  "addStyleBefore": [
    "src/scss/basic.scss",
    "src/scss/fonts.scss",
    "src/scss/libs.scss",
    "src/scss/mixins.scss",
    "src/scss/vars.scss"
  ],
  "addStyleAfter": [
    // "src/scss/print.scss"
  ],
  "addJsBefore": [],
  "addJsAfter": [
    "./script.js"
  ],
  "addAssets": {
    "src/fonts/OpenSans-Light.ttf": "fonts/",
    "src/fonts/OpenSans.ttf": "fonts/",
    "src/fonts/OpenSans-Semibold.ttf": "fonts/",
    "src/fonts/OpenSans-Bold.ttf": "fonts/",
    "src/img/*.{png,svg,jpg,jpeg}": "img/",
    // "src/img/DSC_*": "img/",
    // "src/favicon/*.{png,ico,svg,xml,webmanifest}": "img/favicon",
  },
  "dir": {
    "src": "src/",
    "build": "build/",
    "blocks": "src/blocks/"
  }
};

module.exports = config;
