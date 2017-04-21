/* eslint-env node */
'use strict';
var path = require('path');
var BroccoliMergeTrees = require('broccoli-merge-trees');
var Concat = require('broccoli-concat');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-fastboot-build-example',

  updateFastBootManifest: function(manifest) {
    manifest.vendorFiles.unshift('ember-fastboot-build-example/foo.js');
    manifest.appFiles.push('ember-fastboot-build-example/bar.js');

    return manifest;
  }
};
