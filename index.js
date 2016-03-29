require([
  'ActiveShareLib', 'backbone', 'jquery', 'underscore'
], function (ActiveShareLib, Backbone, $, _) {
  var BackboneBaseView = ActiveShareLib.BackboneBaseView;
  var Reflux = ActiveShareLib.Reflux;
  var Model = Reflux.Model;
  var createStore = Reflux.createStore;

  var Action = Reflux.createAction({
    children: ['completed']
  });

  Action.completed.listen(function (str) {
    $('#app').append(str);
  });

  var Actions = Reflux.createActions({
    render: {
      children: ['before', 'after']
    }
  });

  Actions.render.before.listen(function (str) {
    $('#results').append(str + ' <br>');
  });

  Actions.render.after.listen(function (str) {
    $('#results').append(str + ' <br>');
  });

  var model = createStore({
    listenables: Actions,
    onRenderBefore: function (str) {
      $('#results').append(str + ' <br>');
    },
    onRenderAfter: function (str) {
      $('#results').append(str + ' <br>');
    }
  });

  var BarView = BackboneBaseView.extend({
    model: model,
    template: function () {
      return '<p>i\'m BarView</p>';
    },
    render: function () {
      Actions.render.before('before Render BarView');

      this.$el.html('<p>i\'m BarView</p>');


      Actions.render.after('after Render BarView');

      return this;
    }
  });

  var FooView = BackboneBaseView.extend({
    model: model,
    render: function () {
      Actions.render.before('before Render FooView');

      this.$el.html('<p>i\'m FooView</p>');

      Actions.render.before('after Render FooView');
      return this;
    }
  });

  var View = BackboneBaseView.extend({
    render: function () {
      this.$el.html('<div id="bar"></div><div id="foo"></div>');

      var childViews = {};

      childViews['#bar'] = new BarView();
      childViews['#foo'] = new FooView();

      this.renderChildViews(childViews);

      Action.completed('View Render Completed');

      return this;
    }
  });

  new View({
    el: $('#app')
  }).render();
});
