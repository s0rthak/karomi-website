'use strict';

define('karomi-ember/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('karomi-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'karomi-ember/tests/helpers/start-app', 'karomi-ember/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _karomiEmberTestsHelpersStartApp, _karomiEmberTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _karomiEmberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _karomiEmberTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('karomi-ember/tests/helpers/resolver', ['exports', 'karomi-ember/resolver', 'karomi-ember/config/environment'], function (exports, _karomiEmberResolver, _karomiEmberConfigEnvironment) {

  var resolver = _karomiEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _karomiEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _karomiEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('karomi-ember/tests/helpers/start-app', ['exports', 'ember', 'karomi-ember/app', 'karomi-ember/config/environment'], function (exports, _ember, _karomiEmberApp, _karomiEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _karomiEmberConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _karomiEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('karomi-ember/tests/integration/components/about-page-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('about-page', 'Integration | Component | about page', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '53Dt0Yn6',
      'block': '{"statements":[["append",["unknown",["about-page"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'L1UnfFz8',
      'block': '{"statements":[["text","\\n"],["block",["about-page"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('karomi-ember/tests/integration/components/collection-page-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('collection-page', 'Integration | Component | collection page', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'oBKhVXZD',
      'block': '{"statements":[["append",["unknown",["collection-page"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'z7vcucwz',
      'block': '{"statements":[["text","\\n"],["block",["collection-page"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('karomi-ember/tests/integration/components/contact-page-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('contact-page', 'Integration | Component | contact page', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'pxtlKs0U',
      'block': '{"statements":[["append",["unknown",["contact-page"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'MKYGiz7D',
      'block': '{"statements":[["text","\\n"],["block",["contact-page"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('karomi-ember/tests/integration/components/index-shim-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('index-shim', 'Integration | Component | index shim', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '14YNJCsg',
      'block': '{"statements":[["append",["unknown",["index-shim"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'AFBScHUG',
      'block': '{"statements":[["text","\\n"],["block",["index-shim"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('karomi-ember/tests/integration/components/karomi-footer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('karomi-footer', 'Integration | Component | karomi footer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'mHsGfjLv',
      'block': '{"statements":[["append",["unknown",["karomi-footer"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '7G3sGY2S',
      'block': '{"statements":[["text","\\n"],["block",["karomi-footer"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('karomi-ember/tests/integration/components/karomi-header-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('karomi-header', 'Integration | Component | karomi header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'b75d1PQm',
      'block': '{"statements":[["append",["unknown",["karomi-header"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'HWbMtRDL',
      'block': '{"statements":[["text","\\n"],["block",["karomi-header"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('karomi-ember/tests/integration/components/product-page-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('product-page', 'Integration | Component | product page', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'gCWfl8/a',
      'block': '{"statements":[["append",["unknown",["product-page"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'XRAse7Vl',
      'block': '{"statements":[["text","\\n"],["block",["product-page"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('karomi-ember/tests/test-helper', ['exports', 'karomi-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _karomiEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_karomiEmberTestsHelpersResolver['default']);
});
define('karomi-ember/tests/unit/helpers/div-by-four-test', ['exports', 'karomi-ember/helpers/div-by-four', 'qunit'], function (exports, _karomiEmberHelpersDivByFour, _qunit) {

  (0, _qunit.module)('Unit | Helper | div by four');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _karomiEmberHelpersDivByFour.divByFour)([42]);
    assert.ok(result);
  });
});
define('karomi-ember/tests/unit/helpers/end-row-div-test', ['exports', 'karomi-ember/helpers/end-row-div', 'qunit'], function (exports, _karomiEmberHelpersEndRowDiv, _qunit) {

  (0, _qunit.module)('Unit | Helper | end row div');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _karomiEmberHelpersEndRowDiv.endRowDiv)([42]);
    assert.ok(result);
  });
});
define('karomi-ember/tests/unit/helpers/route-fix-test', ['exports', 'karomi-ember/helpers/route-fix', 'qunit'], function (exports, _karomiEmberHelpersRouteFix, _qunit) {

  (0, _qunit.module)('Unit | Helper | route fix');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _karomiEmberHelpersRouteFix.routeFix)([42]);
    assert.ok(result);
  });
});
define('karomi-ember/tests/unit/helpers/route-param-test', ['exports', 'karomi-ember/helpers/route-param', 'qunit'], function (exports, _karomiEmberHelpersRouteParam, _qunit) {

  (0, _qunit.module)('Unit | Helper | route param');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _karomiEmberHelpersRouteParam.routeParam)([42]);
    assert.ok(result);
  });
});
define('karomi-ember/tests/unit/mixins/reset-scroll-test', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll', 'qunit'], function (exports, _ember, _karomiEmberMixinsResetScroll, _qunit) {

  (0, _qunit.module)('Unit | Mixin | reset scroll');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var ResetScrollObject = _ember['default'].Object.extend(_karomiEmberMixinsResetScroll['default']);
    var subject = ResetScrollObject.create();
    assert.ok(subject);
  });
});
define('karomi-ember/tests/unit/routes/404-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:404', 'Unit | Route | 404', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/collection/block-printed-bedroom-collection-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:collection/block-printed-bedroom-collection', 'Unit | Route | collection/block printed bedroom collection', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/collection/meditation-area-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:collection/meditation-area', 'Unit | Route | collection/meditation area', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/cross-stitch-frames-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cross-stitch-frames', 'Unit | Route | cross stitch frames', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/cushions/couple-cushions-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cushions/couple-cushions', 'Unit | Route | cushions/couple cushions', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/cushions/cushion-sets-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cushions/cushion-sets', 'Unit | Route | cushions/cushion sets', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/cushions/decor-metallic-cushions-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cushions/decor-metallic-cushions', 'Unit | Route | cushions/decor metallic cushions', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/cushions/kids-cushions-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cushions/kids-cushions', 'Unit | Route | cushions/kids cushions', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/cushions/pair-cushions-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cushions/pair-cushions', 'Unit | Route | cushions/pair cushions', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/cushions/theme-cushions-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cushions/theme-cushions', 'Unit | Route | cushions/theme cushions', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/table-kitchen/kitchen-oven-accessories-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:table-kitchen/kitchen-oven-accessories', 'Unit | Route | table kitchen/kitchen oven accessories', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/table-kitchen/table-linens-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:table-kitchen/table-linens', 'Unit | Route | table kitchen/table linens', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/table-kitchen/table-napkins-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:table-kitchen/table-napkins', 'Unit | Route | table kitchen/table napkins', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/table-kitchen/table-placemats-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:table-kitchen/table-placemats', 'Unit | Route | table kitchen/table placemats', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/table-kitchen/table-runners-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:table-kitchen/table-runners', 'Unit | Route | table kitchen/table runners', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('karomi-ember/tests/unit/routes/table-kitchen/table-sets-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:table-kitchen/table-sets', 'Unit | Route | table kitchen/table sets', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
/* jshint ignore:start */

require('karomi-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
