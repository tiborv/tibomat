/* eslint-disable */
const cb = function() {
  var h = document.getElementsByTagName('head')[0];
  var useSSL = 'https:' == document.location.protocol;

  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = (useSSL ? 'https:' : 'http:') + '//styleguide.dagbladet.no/stylesheets/app.css';

  h.parentNode.insertBefore(l, h);
};

var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) {
  raf(cb);
} else {
  window.addEventListener('domContentLoaded', cb);
};
