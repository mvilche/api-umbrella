/*!
 * Retina.js v1.1.0
 *
 * Copyright 2013 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function(){function t(){}function e(t,e){this.path=t,"undefined"!=typeof e&&null!==e?(this.at_2x_path=e,this.perform_check=!1):(this.at_2x_path=t.replace(/\.\w+$/,function(t){return"@2x"+t}),this.perform_check=!0)}function i(t){this.el=t,this.path=new e(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var i=this;this.path.check_2x_variant(function(t){t&&i.swap()})}var n="undefined"==typeof exports?window:exports,a={check_mime_type:!0};n.Retina=t,t.configure=function(t){null==t&&(t={});for(var e in t)a[e]=t[e]},t.init=function(t){null==t&&(t=n);var e=t.onload||new Function;t.onload=function(){var t,n,a=document.getElementsByTagName("img"),h=[];for(t=0;t<a.length;t++)n=a[t],h.push(new i(n));e()}},t.isRetina=function(){var t="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";return n.devicePixelRatio>1?!0:n.matchMedia&&n.matchMedia(t).matches?!0:!1},n.RetinaImagePath=e,e.confirmed_paths=[],e.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},e.prototype.check_2x_variant=function(t){var i,n=this;return this.is_external()?t(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in e.confirmed_paths?t(!0):(i=new XMLHttpRequest,i.open("HEAD",this.at_2x_path),i.onreadystatechange=function(){if(4!=i.readyState)return t(!1);if(i.status>=200&&i.status<=399){if(a.check_mime_type){var h=i.getResponseHeader("Content-Type");if(null==h||!h.match(/^image/i))return t(!1)}return e.confirmed_paths.push(n.at_2x_path),t(!0)}return t(!1)},i.send(),void 0):t(!0)},n.RetinaImage=i,i.prototype.swap=function(t){function e(){i.el.complete?(i.el.setAttribute("width",i.el.offsetWidth),i.el.setAttribute("height",i.el.offsetHeight),i.el.setAttribute("src",t)):setTimeout(e,5)}"undefined"==typeof t&&(t=this.path.at_2x_path);var i=this;e()},t.isRetina()&&t.init(n)}();