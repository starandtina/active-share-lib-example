/*
 * Wrapper for active.*
 */
define([
  'exports',
  'module',
  'underscore'
], function (exports, module) {
  'use strict';

  module.exports = {
    localize: _.noop,
    render: _.noop,
    getComponent: _.noop,
    app: _.noop
  };
});
