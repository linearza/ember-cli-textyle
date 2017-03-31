/* eslint-env node */
'use strict';

/*jshint node:true*/
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-cli-textyle',
  lazyLoading: false
});
