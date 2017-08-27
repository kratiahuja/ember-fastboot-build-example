/* eslint-env node */
'use strict';
var filterInitializers = require('fastboot-filter-initializers');

module.exports = {
  name: 'ember-fastboot-build-example',

  updateFastBootManifest: function(manifest) {
    manifest.vendorFiles.unshift('ember-fastboot-build-example/foo.js');
    manifest.appFiles.push('ember-fastboot-build-example/bar.js');

    return manifest;
  },

  fastbootConfigTree() {
    return {
      'foo': 'bar'
    }
  },

  preconcatTree: function(tree) {
    return filterInitializers(tree, this.app.name);
  }
};
