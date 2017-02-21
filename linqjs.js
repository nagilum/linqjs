'use strict';

/**
 * Returns the first element of a sequence based on a predicate, or a default value if the sequence contains no elements.
 * @param {Function} predicate
 * @returns {Object}
 */
Array.prototype.first = function (predicate) {
  if (this.length === 0) {
    return null;
  }

  var output = predicate
    ? null
    : this[0];
  
  if (output) {
    return output;
  }

  this.forEach((item) => {
    if (output) {
      return;
    }

    if (predicate(item)) {
      output = item;
      return;
    }
  });

  return output;
};

/**
 * Sorts the elements of a sequence in ascending order according to a key.
 * @param {property} key
 * @returns {Array}
 */
Array.prototype.orderBy = function (key) {
  let list = [];

  this.forEach((item) => {
    list.push(item);
  });

  let item = list.length > 0 ? list[0] : null;
  
  if (!item) {
    return list;
  }

  let value = item[key],
      type = typeof(value);

  if (type === 'undefined') {
    return list;
  }

  list.sort((a, b) => {
    switch (type) {
      case 'boolean':
        return (a[key] === b[key]) ? 0 : a[key] ? -1 : 1;
      
      case 'number':
        return a[key] - b[key];
      
      case 'string':
        var au = a[key].toUpperCase(),
            bu = b[key].toUpperCase();
          
        if (au < bu) {
          return -1;
        }
        if (au > bu) {
          return 1;
        }
        
        return 0;
    }
  });

  return list;
};

/**
 * Sorts the elements of a sequence in descending order.
 * @param {property} key
 * @returns {Array}
 */
Array.prototype.orderByDescending = function (key) {
  let list = [];

  this
    .orderBy(key)
    .forEach((item) => {
      list.push(item);
    });
  
  return list.reverse();
};

/**
 * Bypasses a specified number of elements in a sequence and then returns the remaining elements.
 * @param {number} amount
 * @returns {Array}
 */
Array.prototype.skip = function (amount) {
  return this.slice(amount);
};

/**
 * Returns a specified number of contiguous elements from the start of a sequence.
 * @param {number} amount
 * @returns {Array}
 */
Array.prototype.take = function (amount) {
  return this.slice(0, amount +1);
};

/**
 * Filters a sequence of values based on a predicate.
 * @param {Function} predicate
 * @returns {Array}
 */
Array.prototype.where = function (predicate) {
  return this.filter((item) => predicate(item));
};