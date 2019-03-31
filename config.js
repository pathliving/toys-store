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
    "src/scss/mixins.scss",
    "src/scss/vars.scss",
    "src/scss/libs.scss"
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
    "src/fonts/OpenSans-Regular.ttf": "fonts/",
    "src/fonts/OpenSans-Semibold.ttf": "fonts/",
    "src/fonts/OpenSans-Bold.ttf": "fonts/",
    "src/fonts/VAGRounded-Lt-Regular.ttf": "fonts/",
    "src/fonts/VAGRounded-Lt-Bold.ttf": "fonts/",
    "src/img/*.{png,svg,jpg,jpeg}": "img/",
    "node_modules/jquery/dist/jquery.min.js" : "js/",
    "node_modules/slick-carousel/slick/slick.min.js" : "js/",
    "node_modules/slick-carousel/slick/slick.css" : "css/",
    "node_modules/magnific-popup/dist/jquery.magnific-popup.min.js" : "js/",
    "node_modules/magnific-popup/dist/magnific-popup.css" : "css/",
    "src/favicon/*.{png,ico,svg,xml,webmanifest}": "img/favicon"
    // "src/img/DSC_*": "img/",
  },
  "dir": {
    "src": "src/",
    "build": "build/",
    "blocks": "src/blocks/"
  }
};

module.exports = config;
