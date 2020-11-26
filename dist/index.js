/*!
 * realjay-translate v0.0.1
 * (c) Nwachukwu James
 * Released under the MIT License.
 */
'use strict';

var index = {
  install: function install(Vue) {
    Vue.prototype.$translate = function (text, replacements) {
      var keys = Object.keys(replacements);
      keys.forEach(function (key) {
        var end = key.substring(key.length - 1, key.length);
        var start = key.substring(0, key.length - 1);
        var re = RegExp("\\".concat(start, "\\").concat(end), 'g');
        text = text.replace(re, replacements[key]);
      });
      return text;
    };
  }
};

module.exports = index;
