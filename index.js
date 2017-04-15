/* eslint-env node */
'use strict';
var path = require('path');
var BroccoliMergeTrees = require('broccoli-merge-trees');
var Concat = require('broccoli-concat');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-fastboot-build-example',

  treeForPublic: function(tree) {
    var fooTree = new Funnel('vendor', {
      destDir: 'assets'
    });

    if (tree) {
      return new BroccoliMergeTrees[tree, fooTree];
    }

    return tree;
  },

  appendFastBootManifest: function() {
    return {
      vendorFiles: ['assets/foo.js'],
      appFiles: ['assets/bar.js']
    }
  }
};
