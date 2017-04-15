/* eslint-env node */
'use strict';
var path = require('path');
var BroccoliMergeTrees = require('broccoli-merge-trees');
var Concat = require('broccoli-concat');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-fastboot-build-example',

  appendFastBootManifest: function() {
    return {
      vendorFiles: ['ember-fastboot-build-example/foo.js'],
      appFiles: ['ember-fastboot-build-example/bar.js']
    }
  }
};
