var Reveal = require('reveal.js');
var RevealCSS = require('reveal.js/css/reveal.css');
var RevealCSS = require('reveal.js/css/theme/moon.css');

var highlightJs = require('highlight.js');
var highlightJsCss = require('highlight.js/styles/default.css');

Reveal.initialize({
	viewDistance: 1	
});

Reveal.addEventListener('ready', () => {
	highlightJs.initHighlightingOnLoad();
});
console.log('❤');