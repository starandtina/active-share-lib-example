var require = {
  baseUrl: './',
  paths: {
    jquery: './bower_components/jQuery/dist/jquery',
    underscore: './bower_components/underscore/underscore',
    backbone: './bower_components/backbone/backbone',
    BackboneBaseView: './node_modules/active-share-lib/dist/BackboneBaseView',
    Reflux: './node_modules/active-share-lib/dist/Reflux',
    ActiveShareLib: './node_modules/active-share-lib/dist/ActiveShareLib',
    'async-render': './node_modules/active-share-lib/dist/async-render'
  },
  shim: {
    BackboneBaseView: ['backbone'],
    Reflux: ['backbone', 'underscore'],
    ActiveShareLib: ['jquery', 'underscore', 'backbone'],
    backbone: ['jquery', 'underscore']
  },
  deps: ['ActiveShareLib', 'backbone', 'jquery', 'underscore'],
  callback: function (ActiveShareLib, Backbone, $, _) {}
};
