/*!
 * realjay-array-group v0.0.2
 * (c) Nwachukwu James
 * Released under the MIT License.
 */
'use strict';

var index = {
  install: function install(Vue) {
    Vue.prototype.$group_array = function (array, key) {
      var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'object';

      if (!format === 'array' || !format === 'object') {
        return 'Invalid format supplied';
      }

      if (!Array.isArray(array)) {
        return 'Parameter 1 must be an array';
      }

      if (!key) {
        return 'Key must be supplied';
      }

      var groupKey = key; //get all instances of the needed key

      function pluck(array, key) {
        return array.map(function (o) {
          return o[key];
        });
      } //get the unique keys


      var keys = new Set(pluck(array, groupKey));
      var grouped = [];
      var objGrouped = {};
      keys.forEach(function (key) {
        var items = array.filter(function (item) {
          return item[groupKey] === key;
        });

        if (format === 'array') {
          grouped.push(items);
        } else if (format === 'object') {
          objGrouped[key] = items;
        }
      });

      if (format === 'object') {
        return objGrouped;
      } else {
        return grouped;
      }
    };
  }
};

module.exports = index;
