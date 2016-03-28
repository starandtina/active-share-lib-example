var require = {
  baseUrl: './',
  paths: {
    jquery: './bower_components/jQuery/dist/jquery',
    underscore: './bower_components/underscore/underscore',
    backbone: './bower_components/backbone/backbone',
    ActiveShareLib: './node_modules/active-share-lib/dist/ActiveShareLib'
  },
  shim: {
    ActiveShareLib: ['jquery', 'underscore', 'backbone'],
    backbone: ['jquery', 'underscore']
  },
  deps: ['ActiveShareLib', 'backbone', 'jquery', 'underscore'],
  callback: function (ActiveShareLib, Backbone, $, _) {
    var BackboneBaseView = ActiveShareLib.BackboneBaseView;

    var View = BackboneBaseView.extend({
      render: function () {
        this.$el.html('<h1>I\'m using ActiveShareLib.BackboneBaseView</h1>');

        return this;
      }
    });

    new View({
      el: $('#app')
    }).render();
  }
};
