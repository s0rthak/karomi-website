"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('karomi-ember/app', ['exports', 'ember', 'karomi-ember/resolver', 'ember-load-initializers', 'karomi-ember/config/environment'], function (exports, _ember, _karomiEmberResolver, _emberLoadInitializers, _karomiEmberConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _karomiEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _karomiEmberConfigEnvironment['default'].podModulePrefix,
    Resolver: _karomiEmberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _karomiEmberConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('karomi-ember/components/about-page', ['exports', 'ember', 'karomi-ember/config/environment'], function (exports, _ember, _karomiEmberConfigEnvironment) {
  exports['default'] = _ember['default'].Component.extend({
    rootURL: _karomiEmberConfigEnvironment['default'].rootURL,
    classNames: ['bg-yellow']
  });
});
define('karomi-ember/components/collection-page', ['exports', 'ember', 'karomi-ember/config/environment'], function (exports, _ember, _karomiEmberConfigEnvironment) {
  exports['default'] = _ember['default'].Component.extend({
    rootURL: _karomiEmberConfigEnvironment['default'].rootURL,
    classNames: ['bg-yellow'],

    didInsertElement: function didInsertElement() {
      window.scrollTo(0, 0);
    },
    actions: {
      showGrid: function showGrid() {
        document.getElementById('productsgriads').style.display = 'none';
        document.getElementById('productslist').style.display = 'block';
      },
      showList: function showList() {
        document.getElementById('productsgriads').style.display = 'block';
        document.getElementById('productslist').style.display = 'none';
      }
    }
  });
});
define('karomi-ember/components/contact-page', ['exports', 'ember', 'karomi-ember/config/environment'], function (exports, _ember, _karomiEmberConfigEnvironment) {
  exports['default'] = _ember['default'].Component.extend({
    rootURL: _karomiEmberConfigEnvironment['default'].rootURL,
    firstName: '',
    bodyMessage: '',
    emailId: '',
    phoneNumber: '',
    contactBody: _ember['default'].computed('bodyMessage', 'firstName', 'emailId', 'phoneNumber', function () {
      return 'Hello, %0D%0A' + this.get('bodyMessage') + '. %0D%0A %0D%0A Name: ' + this.get('firstName') + ' %0D%0A EmailId: ' + this.get('emailId') + ' %0D%0A Phone Number: ' + this.get('phoneNumber');
    })

  });
});
define('karomi-ember/components/index-shim', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    didInsertElement: function didInsertElement() {
      var mainSlider = this.$('#main-slider');
      var Partner = this.$('#Partner-slider');
      var productslider = this.$('#product-items-slider');
      var productsidebarslider = this.$('#product-sidebar-slider');
      var nextNav = '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>';
      var prevNav = '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>';

      mainSlider.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,

        navText: [prevNav, nextNav],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
      Partner.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [prevNav, nextNav],
        autoplay: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        }
      });

      productslider.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        navText: [prevNav, nextNav],
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      });

      productsidebarslider.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        navText: [prevNav, nextNav],
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
  });
});
define('karomi-ember/components/karomi-footer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('karomi-ember/components/karomi-header', ['exports', 'ember', 'karomi-ember/config/environment'], function (exports, _ember, _karomiEmberConfigEnvironment) {
  exports['default'] = _ember['default'].Component.extend({
    rootURL: _karomiEmberConfigEnvironment['default'].rootURL,
    didInsertElement: function didInsertElement() {
      initializeHoverMenu(jQuery);
      initializeHoverMenuAddon(jQuery);
    },
    actions: {
      collapseNavbar: function collapseNavbar() {
        if (window.innerWidth < 768) {
          _ember['default'].$('.navbar-toggle').click();
        }
      }
    }
  });
});
define('karomi-ember/components/light-box', ['exports', 'ember-cli-lightbox/components/light-box'], function (exports, _emberCliLightboxComponentsLightBox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliLightboxComponentsLightBox['default'];
    }
  });
});
define('karomi-ember/components/product-page', ['exports', 'ember', 'karomi-ember/config/environment'], function (exports, _ember, _karomiEmberConfigEnvironment) {

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  //========================================
  // Tabs function settings
  //========================================
  function tabCustom(evt, dataId) {

    "use strict";

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(dataId).style.display = "block";
    evt.currentTarget.className += " active";
  }

  exports['default'] = _ember['default'].Component.extend({
    rootURL: _karomiEmberConfigEnvironment['default'].rootURL,
    classNames: ['bg-yellow'],
    didInsertElement: function didInsertElement() {
      var tabLinks = $('.tablinks');
      tabLinks.on('click', function () {
        var dataId = $(this).attr('data-id');
        tabCustom(event, dataId);
      });
      window.scrollTo(0, 0);
    }
  });
});
define('karomi-ember/helpers/app-version', ['exports', 'ember', 'karomi-ember/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _karomiEmberConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _karomiEmberConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('karomi-ember/helpers/div-by-four', ['exports', 'ember'], function (exports, _ember) {
  exports.divByFour = divByFour;

  function divByFour(params /*, hash*/) {
    return params[0] !== 0 && params[0] % 4 == 0;
  }

  exports['default'] = _ember['default'].Helper.helper(divByFour);
});
define('karomi-ember/helpers/end-row-div', ['exports', 'ember'], function (exports, _ember) {
  exports.endRowDiv = endRowDiv;

  function endRowDiv(params /*, hash*/) {
    return (params[0] - 1) % 4 == 0;
  }

  exports['default'] = _ember['default'].Helper.helper(endRowDiv);
});
define('karomi-ember/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('karomi-ember/helpers/route-fix', ['exports', 'ember'], function (exports, _ember) {
  exports.routeFix = routeFix;

  function routeFix(params /*, hash*/) {

    var url = params[0];
    // '/cushions/cushion-sets/22',
    var newUrl = url.slice(1);
    var lastSlash = url.lastIndexOf('/');
    var id = newUrl.slice(lastSlash);
    newUrl = newUrl.slice(0, lastSlash - 1);
    newUrl = newUrl.replace('/', '.');
    return newUrl;
  }

  exports['default'] = _ember['default'].Helper.helper(routeFix);
});
define('karomi-ember/helpers/route-param', ['exports', 'ember'], function (exports, _ember) {
  exports.routeParam = routeParam;

  function routeParam(params /*, hash*/) {
    var url = params[0];
    // '/cushions/cushion-sets/22',
    var newUrl = url.slice(1);
    var lastSlash = url.lastIndexOf('/');
    var id = newUrl.slice(lastSlash);
    // newUrl = newUrl.slice(0, lastSlash - 1)
    // newUrl = newUrl.replace('/', '.')
    return id;
  }

  exports['default'] = _ember['default'].Helper.helper(routeParam);
});
define('karomi-ember/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('karomi-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'karomi-ember/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _karomiEmberConfigEnvironment) {
  var _config$APP = _karomiEmberConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('karomi-ember/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('karomi-ember/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('karomi-ember/initializers/ember-cli-lightbox', ['exports', 'karomi-ember/config/environment', 'ember-cli-lightbox/initializers/ember-cli-lightbox'], function (exports, _karomiEmberConfigEnvironment, _emberCliLightboxInitializersEmberCliLightbox) {
  exports.initialize = initialize;

  function initialize() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _emberCliLightboxInitializersEmberCliLightbox['default'].initialize.apply(null, [_karomiEmberConfigEnvironment['default']['ember-cli-lightbox']].concat(args));
  }

  exports['default'] = {
    name: _emberCliLightboxInitializersEmberCliLightbox['default'].name,
    initialize: initialize
  };
});
define('karomi-ember/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('karomi-ember/initializers/export-application-global', ['exports', 'ember', 'karomi-ember/config/environment'], function (exports, _ember, _karomiEmberConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_karomiEmberConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _karomiEmberConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_karomiEmberConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('karomi-ember/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('karomi-ember/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('karomi-ember/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("karomi-ember/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _emberDataInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInstanceInitializersInitializeStoreService["default"]
  };
});
define('karomi-ember/mixins/reset-scroll', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({
    activate: function activate() {
      this._super();
      window.scrollTo(0, 0);
    }
  });
});
define('karomi-ember/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('karomi-ember/router', ['exports', 'ember', 'karomi-ember/config/environment'], function (exports, _ember, _karomiEmberConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _karomiEmberConfigEnvironment['default'].locationType,
    rootURL: _karomiEmberConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('cushions', function () {
      this.route('couple-cushions', { path: 'couple-cushions/:id' });
      this.route('cushion-sets', { path: 'cushion-sets/:id' });
      this.route('decor-metallic-cushions', { path: 'decor-metallic-cushions/:id' });
      this.route('kids-cushions', { path: 'kids-cushions/:id' });
      this.route('pair-cushions', { path: 'pair-cushions/:id' });
      this.route('theme-cushions', { path: 'theme-cushions/:id' });
    });
    this.route('about');
    this.route('contact');
    this.route('cross-stitch-frames', { path: 'cross-stitch-frames/:id' });

    this.route('collection', function () {
      this.route('meditation-area', { path: 'meditation-area/:id' });
      this.route('block-printed-bedroom-collection', { path: 'block-printed-bedroom-collection/:id' });
    });

    this.route('table-kitchen', function () {
      this.route('table-linens', { path: 'table-linens/:id' });
      this.route('table-napkins', { path: 'table-napkins/:id' });
      this.route('table-placemats', { path: 'table-placemats/:id' });
      this.route('table-runners', { path: 'table-runners/:id' });
      this.route('table-sets', { path: 'table-sets/:id' });
      this.route('kitchen-oven-accessories', { path: 'kitchen-oven-accessories/:id' });
    });
    this.route('404', { path: '*path' });
  });

  exports['default'] = Router;
});
define('karomi-ember/routes/404', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {
  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {});
});
define('karomi-ember/routes/about', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {
  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {});
});
define('karomi-ember/routes/application', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {
  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {});
});
define('karomi-ember/routes/collection/block-printed-bedroom-collection', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Block';

  var data = {
    collectionName: 'Block Printed Bedroom Collection',
    collectionDescription: 'The traditional process of hand block printing on textiles has been practiced in Rajasthan for around 500 years.  Block printing was introduced to the Jaipur region of Rajasthan by the Chhipa community. The art of block printing has been passed down for generations within families and communities and has branched out in recent decades to other regions. The colors are dependent basically on the dye used, water and skill of the printing masters.  Block prints, are by nature, hand-done.  The slight color variation within a print runs if printed at different times or in different seasons. It is an attribute appreciated by those who value the uniqueness of artisan textiles.<br> This Hand printed Metallic Elephant collection is a depiction of the Rajasthan culture and is a heritage inspired design. The use of the bold color Blue brightens your room. Quirky, this set is ideal for those with a penchant to express themselves through their fine taste in home decor. Metallic golden elephants set against a blue backdrop accompanied with golden piping and beads on the edges, makes this collection an interesting pick.',
    category: 'Block Printing',
    data: [{
      name: 'Block printed Bedroom Collection',
      longName: 'Block printed Bedroom Collection',
      size: 'Side Table Mats – 26 x 16 (in inches), Pillow – 26 x 14 (in inches) & Bed Cover – 102 x 86 (in inches) – Super King Size',
      material: 'Raw Silk and Dyed Cotton',
      color: 'Blue',
      careInstruction: 'Dry Clean only',
      info: ['2 Side table Mats', '2 Small Pillows', '1 Bed coverBlock Printed', 'The pillows are not inclusive of fillers', 'Back Closure of Pillows: Premium quality zipper'],
      imageUrl: baseUrl + '/1.jpg',
      routeUrl: '/collection/block-printed-bedroom-collection/1'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/collection/meditation-area', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Meditation-area';

  var data = {
    collectionName: 'Asamiya Serenity',
    collectionDescription: 'Assam is a very beautiful, cultural and colourful state. When we talk about it, the first thing that comes to the mind is its Magical and wide variety of Flora. Flowers are very beautiful and in the view point of Art, it has beautiful colours and very breathtaking and intricate patterns. This collection is inspired by the wide variety of floral growth of Assam and the harmony in which they live together. Assam is well known for its Muga, Eri and Pat silk. The livelihood of almost more than 50 percent of the Assamese families depends on Weaving. The intricacy of the patterns and the weave is very appealing to the eye. The Flora Bloom and the Assam Silk intrigued me to use versions of green for the floral motifs to be woven and shades of light brown that is the tradional Muga Silk colour of Assam as the base colour of the fabric. The motifs are derived from the very popular flora of Assam. Weaving technique is mainly chosen to maintain a good quality Design and also to preserve the handloom quality in all products. <br>The floral motifs that were chosen to be woven in the fabric are inspired from Lotus, Paddy, Tea, Bamboo, Betel-Nut, Foxtail Orchids and the Champa flower.',
    category: 'Meditation Area',
    data: [{
      name: 'Bolster Covers',
      longName: 'Bolster Covers',
      size: '34 x 32 in inches',
      material: 'Eri Cotton',
      color: 'Muga and Green',
      careInstruction: 'Hand wash',
      info: ['Hand woven', 'Hand wash', 'The Eri silk gives warmth in winter and coolness in summer', 'No side effects on direct contact with the skin', 'Non violent silk', 'Inclusive of fillers', 'Warp Yarn: Handspun Cotton', 'Weft Yarn: Eri Silk', 'Motif yarn: 2 ply wool', 'Trims: Poplin lace for tying on both ends', 'Closure: Lace'],
      imageUrl: baseUrl + '/1.jpg',
      routeUrl: '/collection/meditation-area/1',
      description: 'These Karomi, Asamiya Serenity Bolsters are woven in pairs with two floral motifs and they work as the support or the arm rest for the Cushions.'
    }, {
      name: 'Candle Stand Covers',
      longName: 'Candle Stand Covers',
      size: '7x7 in inches',
      material: 'Eri Cotton',
      color: 'Muga and Green',
      careInstruction: 'Hand wash',
      info: ['Hand woven', 'Hand wash', 'Non violent silk', 'Warp Yarn: Handspun Cotton', 'Weft Yarn: Eri Silk', 'Motif yarn: 2 ply wool'],
      imageUrl: baseUrl + '/2.jpg',
      altImages: [baseUrl + '/2a.jpg'],
      routeUrl: '/collection/meditation-area/2',
      description: 'These Karomi, Asamiya Serenity Candle stand covers are square shaped coves and are made with THE Eri woven fabric. The base is made of a 12 mm thick ply.'
    }, {
      name: 'Curtains',
      longName: 'Curtains',
      size: '75.5 x 40.5 in inches',
      material: 'Eri Cotton and Raw Silk Slub',
      color: 'Muga and Green',
      careInstruction: 'Hand wash',
      info: ['Hand woven', 'Hand wash', 'The Eri silk gives warmth in winter and coolness in summer', 'Non violent silk', 'Warp Yarn: Handspun Cotton', 'Weft Yarn: Eri Silk', 'Motif yarn: 2 ply wool', 'Trims: Tassels on the bottom and 7 number of back flap loops in each curtain', 'Closure: Velcro'],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/collection/meditation-area/3',
      description: 'These Karomi, Asamiya Serenity Curtains are woven in 3 different shades and with the same motif to increase the design aesthetic. Tassels are further made on the bottom for a beautiful look. Slub Silk is stitched behind all 3 Curtains. The curtains are reversible and can be used in both ways.'
    }, {
      name: 'Floor Cushions',
      longName: 'Floor Cushions',
      size: '32 x 34 in inches',
      material: 'Eri Cotton and Casement',
      color: 'Muga and Green',
      careInstruction: 'Hand wash',
      info: ['Hand woven', 'Hand wash', 'The Eri silk gives warmth in winter and coolness in summer', 'No side effects on direct contact with the skin', 'Non violent silk', 'Inclusive of fillers', 'Warp Yarn: Handspun Cotton', 'Weft Yarn: Eri Silk', 'Motif yarn: 2 ply wool', 'Trims: Poplin lace for tying on both ends', 'Closure: Velcro'],
      imageUrl: baseUrl + '/4.jpg',
      altImages: [baseUrl + '/4a.jpg', baseUrl + '/4b.jpg'],
      routeUrl: '/collection/meditation-area/4',
      description: 'These Karomi, Asamiya Serenity Floor Cushions are made with 3 distinct motifs and the cushioning is made out of natural cotton and its gives a very comfortable feel to the person resting on it.'
    }, {
      name: 'Plant Holder Covers',
      longName: 'Plant Holder Covers',
      size: '7 x 20 and 7 x 7 in inches',
      material: 'Eri Cotton',
      color: 'Muga and Green',
      careInstruction: 'Hand wash',
      info: ['Hand woven', 'Hand wash', 'Non violent silk', 'Warp Yarn: Handspun Cotton', 'Weft Yarn: Eri Silk', 'Motif yarn: 2 ply wool'],
      imageUrl: baseUrl + '/5.jpg',
      routeUrl: '/collection/meditation-area/5',
      description: 'These Karomi, Asamiya Serenity plant holders consists of 2 square and 1 rectangular covers and are made with a Lotus design woven fabric. The base of the Plant Holders is made of thick 12mm Ply.  These holders add to the main aesthetic appeal of the collection.'
    }, {
      name: 'Rug',
      longName: 'Rug',
      size: '34 x 75.5 in inches',
      material: 'Eri Cotton and Raw Silk',
      color: 'Muga and Green',
      careInstruction: 'Hand wash',
      info: ['Hand woven', 'Hand wash', 'The Eri silk gives warmth in winter and coolness in summer', 'No side effects on direct contact with the skin', 'Non violent silk', 'Inclusive of fillers', 'Warp Yarn: Handspun Cotton', 'Weft Yarn: Eri Silk', 'Motif yarn: 2 ply wool', 'Trims: Eri Cotton Tassels'],
      imageUrl: baseUrl + '/6.jpg',
      altImages: [baseUrl + '/6a.jpg'],
      routeUrl: '/collection/meditation-area/6',
      description: 'This Karomi, Asamiya Serenity Rug is woven with Eri-cotton as the centre and Raw silk on the sides. The Rug is further accessorized with tassels on two sides. A thin layer of 6mm foam is inserted on the middle of the rug and gives a very comfortable feel while relaxing on it.'
    }, {
      name: 'Wall Art',
      longName: 'Wall Art',
      size: '17.5 x 36.5 in inches',
      material: 'Eri Cotton',
      color: 'Muga and Green',
      careInstruction: 'Hand wash',
      info: ['Hand woven', 'Wooden framed', 'Warp Yarn: Handspun Cotton', 'Weft Yarn: Eri Silk', 'Motif yarn: 2 ply wool', 'Trims: 1 picture square, Dried Paddy and Wooden frame'],
      imageUrl: baseUrl + '/7.jpg',
      routeUrl: '/collection/meditation-area/7',
      description: 'This Karomi, Asamiya Serenity Wall Art is made to add appeal to the room with a woven fabric in the centre and dried paddy on the sides.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/contact', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {
  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {});
});
define('karomi-ember/routes/cross-stitch-frames', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Cross-Stitch-Frames';

  var data = {
    collectionName: 'Cross Stitch Frames',
    category: 'Cross Stitching',
    data: [{
      name: 'The Karomi Fruit basket',
      longName: 'The Karomi Fruit basket',
      size: '31 x 26 (in inches)',
      material: 'Cotton',
      // color: 'White and Sandy Brown',
      // careInstruction: 'Dry Clean only',
      info: ['Technique – Cross stitch', '*Available both with and without frame '],
      imageUrl: baseUrl + '/1.jpg',
      routeUrl: '/cross-stitch-frames/1'
      // description: 'Quite eye catching, these interlinked bold half flower cushions sit beautifully to form a full rose when kept together. These can be used as a standalone for a striking impact.'
    }, {
      name: 'The Karomi Flower Vase',
      longName: 'The Karomi Flower Vase',
      size: '30 x 20 (in inches)',
      material: 'Cotton',
      // color: 'Deep pink and White',
      // careInstruction: 'Dry Clean only',
      info: ['Technique – Cross stitch', '*Available both with and without frame '],
      imageUrl: baseUrl + '/2.jpg',
      routeUrl: '/cross-stitch-frames/2'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'The Karomi Colourful Flower Bunch',
      longName: 'The Karomi Colourful Flower Bunch',
      size: '45 x 20 (in inches)',
      material: 'Cotton',
      // color: 'Shades of red and pale brown',
      // careInstruction: 'Dry Clean only',
      info: ['Technique – Cross stitch', '*Available both with and without frame '],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/cross-stitch-frames/3'
      // description: 'The roses give a contemporary love twist to this cushion. The tassar base of this exquisite piece makes a perfect canvas for the rose. A wonderful blend of colour and embroidery is behind its sheer stopping power'
    }, {
      name: 'The Karomi Cabbage',
      longName: 'The Karomi Cabbage',
      size: '14 x 14 (in inches)',
      material: 'Cotton',
      // color: 'Fuchsia pink, beige and shades of blue',
      // careInstruction: 'Dry Clean only',
      info: ['Technique – Cross stitch', '*Available both with and without frame '],
      imageUrl: baseUrl + '/4.jpg',
      routeUrl: '/cross-stitch-frames/4'
      // description: 'These pastel hearts and an arrow set cushion are ideal for those lovers who express themselves through their home decor. Two hearts accompanied with an arrow makes this cushion an interesting pick.'
    }, {
      name: 'The Karomi Pink flowers and Butterflies',
      longName: 'The Karomi Pink flowers and Butterflies',
      size: '54 x 18 (in inches)',
      material: 'Cotton',
      // color: 'White',
      // careInstruction: 'Dry Clean only',
      info: ['Technique – Cross stitch', '*Available both with and without frame '],
      imageUrl: baseUrl + '/5.jpg',
      routeUrl: '/cross-stitch-frames/5'
      // description: 'This is a classical and our favorite love cushion that comprises of lips and moustache hand embroidery. This classical statement piece looks best in your bedroom with bright coloured plain pillows.'
    }, {
      name: 'The Karomi Flower Vase',
      longName: 'The Karomi Flower Vase',
      size: '25 x 17 (in inches)',
      material: 'Cotton',
      // color: 'Black and White',
      // careInstruction: 'Dry Clean only',
      info: ['Technique – Cross stitch', '*Available both with and without frame '],
      imageUrl: baseUrl + '/6.jpg',
      routeUrl: '/cross-stitch-frames/6'
      // description: 'This cushion brings you back to the royal feel of the chess board with a touch of glamour and comfort. Let this cushion sit atop monochromatic upholstery to get a striking visual impact. '
    }, {
      name: 'The Karomi Couple',
      longName: 'The Karomi Couple',
      size: '39 x 21 (in inches)',
      material: 'Cotton',
      // color: 'Black and Dark pink',
      // careInstruction: 'Dry Clean only',
      info: ['Technique – Cross stitch', '*Available both with and without frame '],
      imageUrl: baseUrl + '/7.jpg',
      routeUrl: '/cross-stitch-frames/7'
      // description: 'Identical embroidered flowers in two different colours form a vivid mosaic on georgette. These jeweled cushions are highlighted by the vivid colour palette.'
    }, {
      name: 'The Karomi Puppies',
      longName: 'The Karomi Puppies',
      size: '12 x 8 (in inches)',
      material: 'Cotton',
      // color: 'Black and Dark pink',
      // careInstruction: 'Dry Clean only',
      info: ['Technique – Cross stitch', '*Available both with and without frame '],
      imageUrl: baseUrl + '/8.jpg',
      routeUrl: '/cross-stitch-frames/8'
      // description: 'Identical embroidered flowers in two different colours form a vivid mosaic on georgette. These jeweled cushions are highlighted by the vivid colour palette.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/cushions/couple-cushions', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/CoupleCushions';

  var data = {
    collectionName: 'Couple Cushions',
    category: 'Cushions',
    data: [{
      name: 'Half flower Tassar cushion',
      longName: 'Half flower full sequined heavy work Tassar cushion',
      size: '16 x 16 (in inches)',
      material: 'Tassar Silk',
      color: 'White and Sandy Brown',
      careInstruction: 'Dry Clean only',
      info: ['Sequins embroidery', 'Contemporary', 'Set of 2', 'Tassar silk', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/1.jpg',
      routeUrl: '/cushions/couple-cushions/1',
      description: 'Quite eye catching, these interlinked bold half flower cushions sit beautifully to form a full rose when kept together. These can be used as a standalone for a striking impact.'
    }, {
      name: ' Cat and Tail Satin cushion',
      longName: 'Cat and Tail Satin cushion',
      size: '16 x 16 (in inches)',
      material: 'Satin',
      color: 'Deep pink and White',
      careInstruction: 'Dry Clean only',
      info: ['Thread embroidery', 'Contemporary', 'Set of 2', 'Satin', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/2.jpg',
      altImages: [baseUrl + '/2a.jpg'],
      routeUrl: '/cushions/couple-cushions/2',
      description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Rose and Tassar Cushions',
      longName: 'Rose shaped cushions with Plain square tassar cushions',
      size: '16x16 (in inches) – Tassar Cushions and 14x14 (in inches) – Rose cushions',
      material: 'Raw silk and Tassar silk',
      color: 'Shades of red and pale brown',
      careInstruction: 'Dry Clean only',
      info: ['Thread and sequins embroidery', 'Contemporary', 'Set of 4', 'Raw silk and Tassar', 'Fillers included with the Roses', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/cushions/couple-cushions/3',
      description: 'The roses give a contemporary love twist to this cushion. The tassar base of this exquisite piece makes a perfect canvas for the rose. A wonderful blend of colour and embroidery is behind its sheer stopping power'
    }, {
      name: 'Hearts and Arrow cushion',
      longName: 'Two hearts and an Arrow pastel cushion set',
      size: 'Can be customized as desired',
      material: 'Knitted Sunny fabric',
      color: 'Fuchsia pink, beige and shades of blue',
      careInstruction: 'Dry Clean only',
      info: ['Cord piping and paneling', 'Contemporary', 'Set of 3', 'Knitted Sunny fabric', 'Fillers included', 'Dry clean only', 'Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/4.jpg',
      routeUrl: '/cushions/couple-cushions/4',
      description: 'These pastel hearts and an arrow set cushion are ideal for those lovers who express themselves through their home decor. Two hearts accompanied with an arrow makes this cushion an interesting pick.'
    }, {
      name: 'Lips and Moustache cushion',
      longName: 'Lips and Moustache thread embroidered couple cushion',
      size: '16 x 16 (in inches)',
      material: 'Raw silk',
      color: 'White',
      careInstruction: 'Dry Clean only',
      info: ['Thread embroidery', 'Alternate Cord piping', 'Contemporary', 'Set of 2', 'Raw silk', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/5.jpg',
      routeUrl: '/cushions/couple-cushions/5',
      description: 'This is a classical and our favorite love cushion that comprises of lips and moustache hand embroidery. This classical statement piece looks best in your bedroom with bright coloured plain pillows.'
    }, {
      name: 'Chess board king and queen themed cushions',
      longName: 'Half flower full sequined heavy work Tassar cushion',
      size: '16 x 16 (in inches)',
      material: 'Raw silk and Satin',
      color: 'Black and White',
      careInstruction: 'Dry Clean only',
      info: ['Thread and straw pipe embroidery', 'Alternate Cord piping', 'Contemporary', 'Set of 2', 'Raw silk and Satin', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/6.jpg',
      routeUrl: '/cushions/couple-cushions/6',
      description: 'This cushion brings you back to the royal feel of the chess board with a touch of glamour and comfort. Let this cushion sit atop monochromatic upholstery to get a striking visual impact. '
    }, {
      name: 'Flower bunch embroidered cushion',
      longName: 'Black and Dark pink cushions with flower embroidery in thread and straw pipe',
      size: '17x13 (in inches)',
      material: 'Georgette and Satin',
      color: 'Black and Dark pink',
      careInstruction: 'Dry Clean only',
      info: ['Thread and straw pipe embroidery', 'Contemporary', 'Set of 2', 'Georgette and Satin', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/7.jpg',
      routeUrl: '/cushions/couple-cushions/7',
      description: 'Identical embroidered flowers in two different colours form a vivid mosaic on georgette. These jeweled cushions are highlighted by the vivid colour palette.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/cushions/cushion-sets', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Cushion-Sets';

  var data = {
    collectionName: 'Cushion Sets',
    category: 'Cushions',
    data: [{
      name: 'Velvet base with wool flower embroidery',
      longName: 'Embossed velvet cushions with woolen flowers hand embroidery',
      size: '16 x 16 (in inches)',
      material: 'Embossed velvet',
      color: 'Light Crimson',
      careInstruction: 'Dry Clean only',
      info: ['Wool embroidery', 'Embossed velvet', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/1.jpg',
      altImages: [baseUrl + '/1a.jpg'],
      routeUrl: '/cushions/cushion-sets/1',
      description: 'The woolen flowers on a light crimson embossed velvet base give a touch of class to these cushions. It is a piece to add contemporary glamour to any space instantly.'
    }, {
      name: 'Floral printed and plain hot pink cushions',
      longName: 'Set of floral printed and colour blocking hot pink cushions',
      size: '16 x 16 (in inches)',
      material: 'Satin',
      color: 'Hot Pink',
      careInstruction: 'Dry Clean only',
      info: ['Colour Blocking', 'Satin – plain and printed', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/2.jpg',
      altImages: [baseUrl + '/2a.jpg'],
      routeUrl: '/cushions/cushion-sets/2',
      description: 'A single floral printed cushion amidst a set of plain colour blocked hot pink cushions brings alive the modernity and sophistication of the area in which they are placed.'
    }, {
      name: 'Purple and Yellow combination cushions',
      longName: 'Purple and Yellow combination cushions with the use of embroidered flowers and tassels',
      size: '16 x 16 (in inches)',
      material: 'Georgette and Cotton',
      color: 'Purple and Yellow',
      careInstruction: 'Dry Clean only',
      info: ['Georgette and Cotton', 'Contemporary', 'Set of 3', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/cushions/cushion-sets/3',
      description: 'Purple printed cushions with the use of bright yellow embroidered flowers give a perfect luxury seating. The twisted use of tassels on the side of the cushion brings out the beauty of the texture.'
    }, {
      name: 'Cutwork cushions with pearl embroidery',
      longName: 'Embossed satin and foam cutwork cushions with pearl embroidery',
      size: '16 x 16 (in inches)',
      material: 'Satin and Foam cutwork and Raw silk',
      color: 'Beige',
      careInstruction: 'Dry Clean only',
      info: ['Satin foam Cutwork', 'Pearl embroidery', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/4.jpg',
      altImages: [baseUrl + '/4a.jpg'],
      routeUrl: '/cushions/cushion-sets/4',
      description: 'This ostentatiously designed pearl cushion is a sure stunner for those who love bling. This square cushion covers artistically uses pearls to bring glamour to your sofa.'
    }, {
      name: 'Ikat base with sequin work cushions',
      longName: 'Ikat pattern light coloured base with sequin embroidery cushion set',
      size: '16 x 16 (in inches)',
      material: 'Printed poplin',
      color: 'Beige',
      careInstruction: 'Dry Clean only',
      info: ['Ikat rendering', 'Sequin embroidery', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/5.jpg',
      altImages: [baseUrl + '/5a.jpg'],
      routeUrl: '/cushions/cushion-sets/5',
      description: 'Embroidered with sequin, this cushion set is a modern artist\'s rendition of the Ikat weaving technique. The pattern is represented in a modern outlook with intricate sequin hand embroidery is what makes it a must-have.'
    }, {
      name: 'Twill weave with cotton lace cushions',
      longName: 'Twill weave zig zag fabric base with cotton lace ornamentation',
      size: '16 x 16 (in inches)',
      material: 'Twill weave and jersey',
      color: 'Shades of Blue, Pink, Green and Orange',
      careInstruction: 'Dry Clean only',
      info: ['Twill weave', 'Lace embroidery', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/6.jpg',
      altImages: [baseUrl + '/6a.jpg'],
      routeUrl: '/cushions/cushion-sets/6',
      description: 'The base of these cushions is set up by the twill woven fabrics.  The cushion has a subtly textured surface. This piece combines a cotton netted laces in white colour with a classicism that never gets out of date.'
    }, {
      name: 'Elephant printed Cushions',
      longName: 'Elephant printed raw silk shimmer Cushions',
      size: '16 x 16 (in inches)',
      material: 'Raw silk and printed cotton',
      color: 'Sapphire Blue and Red',
      careInstruction: 'Dry Clean only',
      info: ['Elephant Print', 'Set of 3', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/7.jpg',
      routeUrl: '/cushions/cushion-sets/7',
      description: 'The elephant motifs along with the floral background put a vibrant scene at play. Lively, fresh and edgy, this quirky piece demands equally eccentric surroundings. The sapphire blue background with elephants in red, lends a regal inspiration to your home.'
    }, {
      name: 'Scuba cushions with pearl embroidery',
      longName: 'Bright Orange Scuba Floral cushions with pearl embroidery',
      size: '16 x 16 (in inches) x2, 14x14 (in inches) x3',
      material: 'Scuba',
      color: 'Bright Orange',
      careInstruction: 'Dry Clean only',
      info: ['Scuba fabric', 'Pearl embroidery', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/8.jpg',
      altImages: [baseUrl + '/8a.jpg'],
      routeUrl: '/cushions/cushion-sets/8',
      description: 'This ostentatiously designed orange pearl cushion is a sure stunner for those who love bling. This square cushion covers artistically uses pearls to bring glamour to your sofa.'
    }, {
      name: 'Floral printed with plain embroidered flower cushion set',
      longName: 'Set of floral printed and with one embroidered flower beige cushions',
      size: '16 x 16 (in inches)',
      material: 'Jacquard woven fabric and Raw silk',
      color: 'Shades of Brick Red, Steel Gray and Beige',
      careInstruction: 'Dry Clean only',
      info: ['Jacquard woven fabric and Raw silk', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/9.jpg',
      altImages: [baseUrl + '/9a.jpg'],
      routeUrl: '/cushions/cushion-sets/9',
      description: 'This cushion set has been flawlessly printed & foiled on a precious bed of flowers. The use of an embroidered flower on a beige background looks very vibrant and is the sheer stopping power of this contemporary cushion set.'
    }, {
      name: 'Bottle green sequin work car cushions',
      longName: 'Bottle green Car cushion covers with dark brown sequin work machine embroidery',
      size: '12 x 12 (in inches) x2, 10 x 10(in inches) x2',
      material: 'Cotton and Satin',
      color: 'Bottle Green and Dark Brown',
      careInstruction: 'Dry Clean only',
      info: ['Cotton and Satin', 'Contemporary', 'Set of 4', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/10.jpg',
      routeUrl: '/cushions/cushion-sets/10',
      description: 'The lustrous sequins stun this cushion set.  Dark coloured Cotton, sequin embroidery and satin creates a jewel box of light and colour in this set.'
    }, {
      name: 'Chanderi cushions with zari motifs',
      longName: 'Arctic Blue Chanderi cushion with heavy zari motifs',
      size: '14 x 14 (in inches)',
      material: 'Chanderi',
      color: 'Arctic Blue',
      careInstruction: 'Dry Clean only',
      info: ['Chanderi', 'Contemporary', 'Set of 4', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/11.jpg',
      routeUrl: '/cushions/cushion-sets/11',
      description: 'The Chanderi fabric has a woven base of chevron lines that gives a very modern abode to the cushion. The use of hand embroidered zari motifs adds a very luxurious feel. If you like simplicity with some glamour, this cushion set is the best for you.'
    }, {
      name: 'Chinkankari cushions with heavy zari work',
      longName: 'Chinkankari cotton cushions with heavy zari work on raw silk',
      size: '14 x 14 (in inches)',
      material: 'Chinkankari Cotton and Raw silk',
      color: 'Lemon Yellow, Bright Orange and Pink',
      careInstruction: 'Dry Clean only',
      info: ['Chinkankari cotton', 'Contemporary', 'Set of 4', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/12.jpg',
      altImages: [baseUrl + '/12a.jpg'],
      routeUrl: '/cushions/cushion-sets/12',
      description: 'Yellow, orange and pink comes together to form a redefinition of colours. Heavy zari work overlaid in these cushions provides a sophisticated way of living.'
    }, {
      name: 'Digital print colourful cushions',
      longName: 'Digital printed Raw silk and Satin cushions with colourful back',
      size: '14 x 14 (in inches)',
      material: 'Raw silk and Printed Satin',
      color: 'Multicoloured',
      careInstruction: 'Dry Clean only',
      info: ['Digital print', 'Colourful', 'Contemporary', 'Set of 6', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/13.jpg',
      altImages: [baseUrl + '/13a.jpg', baseUrl + '/13b.jpg'],
      routeUrl: '/cushions/cushion-sets/13',
      description: 'Bring home this colourful digital print cushion. This cushion certainly shows its uniqueness through the use of different multicoloured backs.'
    }, {
      name: 'Pearl embroidered Satin cushions',
      longName: 'Satin printed circular designed cushion with pearl embroidery',
      size: '16 x 16 (in inches)',
      material: 'Satin and Jacquard loom fabric',
      color: 'Sepia, Yellow and White',
      careInstruction: 'Dry Clean only',
      info: ['Pearl embroidery', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/14.jpg',
      altImages: [baseUrl + '/14a.jpg'],
      routeUrl: '/cushions/cushion-sets/14',
      description: 'The use of pearl embroidery amidst the print makes this set one-of-its-kind. Fine craftsmanship meets creative heights when pearls come together with the prints and hand-stitching. All this put into an ensemble heightens its lure. Bring home this perfect cushion set for your living space.'
    }, {
      name: 'Green cushions with chemical lace ornamentation',
      longName: 'Hand woven casement base with the use of chemical lace ornamentation',
      size: '16 x 16 (in inches)',
      material: 'Hand-woven Jacquard',
      color: 'Forest green and White',
      careInstruction: 'Dry Clean only',
      info: ['Chemical lace', 'Hand-woven casement', 'Contemporary', 'Set of 4', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/15.jpg',
      altImages: [baseUrl + '/15a.jpg'],
      routeUrl: '/cushions/cushion-sets/15',
      description: 'The Stunning chemical lace used as hand embellishment defines this vivid item. The lace is derived from geometric patterns and leads to a modern flavor.'
    }, {
      name: 'Cotton cushions with felt flowers',
      longName: 'Light purple cotton base with colourful 3D felt flowers embellishments',
      size: '16 x 16 (in inches)',
      material: 'Cotton and Felt',
      color: 'Light Purple base with colourful flowers',
      careInstruction: 'Dry Clean only',
      info: ['3D Felt flowers', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/16.jpg',
      altImages: [baseUrl + '/16a.jpg'],
      routeUrl: '/cushions/cushion-sets/16',
      description: 'The 3D felt flowers are a stunning display of hand craftsmanship and design. This cushion set is the perfect amalgam of contemporary craft. Make them sit on your favorite spot to make it more bright and colourful.'
    }, {
      name: 'Scenery tower cushion set',
      longName: 'Scenery cushion set puzzle consisting of Towers, Birds and Fences',
      size: '16 x 16 (in inches)',
      material: 'Printed georgette and Raw silk',
      color: 'Shades of Blue, Black and White',
      careInstruction: 'Dry Clean only',
      info: ['Foam Quilted', 'Contemporary', 'Set of 6', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/17.jpg',
      altImages: [baseUrl + '/17a.jpg'],
      routeUrl: '/cushions/cushion-sets/17',
      description: 'Modern and elegant, this scenery puzzle cushion set is hand quilted to get an elegant feel. Spectacular shades of Blue, White and Black are used to create a classic splendor of light and colour.'
    }, {
      name: 'Pom-Pom flower cushion set',
      longName: 'Pom-Pom Orange and green flower cushion set',
      size: '16 x 16 (in inches)',
      material: 'Georgette',
      color: 'Lemon Yellow, Sap green and Bright Orange',
      careInstruction: 'Dry Clean only',
      info: ['Pom-Pom ornamentation', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/18.jpg',
      altImages: [baseUrl + '/18a.jpg'],
      routeUrl: '/cushions/cushion-sets/18',
      description: 'This Gorgeous Pom-Pom cushion cover set enlightens the room with the use of bright colours on light background. The flowers vary from 1 to 5 in this cushion set and thus make it a style statement for your living area.'
    }, {
      name: 'Printed georgette with motif block thread embroidery',
      longName: 'Block printed georgette base with maroon thread hand embroidery of traditional block motif',
      size: '16 x 16 (in inches)',
      material: 'Georgette',
      color: 'Apricot and Maroon',
      careInstruction: 'Dry Clean only',
      info: ['Thread embroidery', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/19.jpg',
      altImages: [baseUrl + '/19a.jpg'],
      routeUrl: '/cushions/cushion-sets/19',
      description: 'Spruce up your living room decor using these Hand Block Printed cushion covers ornamented with thread embroidery. Add these to your living room and transform it to a classy setting, which is rich in elegance.'
    }, {
      name: 'Appliqué Lotus cushion set',
      longName: 'Appliqué work Lotus velvet cushion set',
      size: '14 x 14 (in inches) x1, 18x18 (in inches) x1 and 22 x 22 (in inches) x1',
      material: 'Velvet',
      color: 'White, Red and Green',
      careInstruction: 'Dry Clean only',
      info: ['Appliqué', 'Contemporary', 'Set of 3', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/20.jpg',
      routeUrl: '/cushions/cushion-sets/20',
      description: 'Inspired by our national flower, this intricate appliqué work beauty is our favorite. The white backdrop highlighting the Lotus motif makes this cushion set a stunner.'
    }, {
      name: 'Hakuna Matata Cushion set',
      longName: 'Hakuna Matata striped cushion set',
      size: '16 x 16 (in inches)',
      material: 'Velvet and Georgette',
      color: 'Black, Gray, Light Blue and Yellow',
      careInstruction: 'Dry Clean only',
      info: ['Thread embroidery', 'Stripes', 'Contemporary', 'Set of 6', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/21.jpg',
      altImages: [baseUrl + '/21a.jpg'],
      routeUrl: '/cushions/cushion-sets/21',
      description: '"Hakuna Matata" is a Swahili phrase that means "no worries”. This cushion set combines the word Hakuna Matata with vertical, horizontal and slanting stripes.  One-of-its-kind it personifies fun and frolic with the colours used.'
    }, {
      name: 'Floral appliqué cushion set',
      longName: 'Satin Appliqué and Cotton floral cushion set',
      size: '16 x 16 (in inches)',
      material: 'Cotton and Georgette',
      color: 'Berry Magenta',
      careInstruction: 'Dry Clean only',
      info: ['Appliqué', 'Contemporary', 'Set of 3', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/22.jpg',
      routeUrl: '/cushions/cushion-sets/22',
      description: 'This set forms a wonderful pattern with the use of a single flower appliqué. The satin base complements the color of the flower perfectly to give this floral cushion set a grand look.'
    }, {
      name: 'Butterfly Cushions',
      longName: 'Embroidered Butterfly colourful checkered Cushion set',
      size: '16 x 16 (in inches)',
      material: 'Jacquard woven fabric',
      color: 'Black with stripes of different colours',
      careInstruction: 'Dry Clean only',
      info: ['Embroidered', 'Contemporary', 'Set of 6', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/23.jpg',
      altImages: [baseUrl + '/23a.jpg'],
      routeUrl: '/cushions/cushion-sets/23',
      description: 'Inspired from nature, these pretty cushions give a very contemporary outlook. Clean coloured lines and great texture gives this cushion a very classic stand-out style. With embroidered butterflies running across a colourful backdrop this cushion set is ideal for breaking the monotony of smooth upholstery.'
    }, {
      name: 'Pin Tucks Cushion set',
      longName: 'Colourful pin tucks cushion set',
      size: '10 x 10 (in inches)',
      material: 'Cotton',
      color: 'Colourful',
      careInstruction: 'Washable',
      info: ['Pin Tucks', 'Contemporary', 'Set of 6', 'No Fillers included', 'Washable', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/24.jpg',
      routeUrl: '/cushions/cushion-sets/24',
      description: 'This cotton cushion set consisting of pin tucks in the spectacular multicoloured shades creates a jewel box of light and colour.'
    }, {
      name: 'Colourful Birds Cushion set',
      longName: 'Birds with colourful Feathers ornamentation cushion set',
      size: '22 x 14 (in inches)',
      material: 'Twill woven fabric - Front and Hand woven Casement - Back',
      color: 'Crème and Mustard',
      careInstruction: 'Dry Clean only',
      info: ['Feather hand ornamentation', 'Contemporary', 'Set of 3', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/25.jpg',
      routeUrl: '/cushions/cushion-sets/25',
      description: 'Birds with 3D feather ornamentation shows excellence at a glance. This cushion set is a gala re-imagined for luxury seating. The colourful feathers bring out the beauty of the texture.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/cushions/decor-metallic-cushions', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Decor-Metallic-Cushions';

  var data = {
    collectionName: 'Decor & Metallic Cushions',
    category: 'Cushions',
    data: [{
      name: 'Checkered Golden and Black Zari cushion',
      longName: 'Checkered Golden and Black Zari embroidery Cushion',
      size: '18 x 18 (in inches)',
      material: 'Jacquard fabric',
      color: 'Golden and Black',
      careInstruction: 'Dry Clean only',
      info: ['Thread and Zari embroidery', 'Contemporary', 'Single Piece', 'Jacquard loom fabric', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/1.jpg',
      altImages: [baseUrl + '/1a.jpg'],
      routeUrl: '/cushions/decor-metallic-cushions/1',
      description: 'This pretty checkered cushion reminds us of our grandfathers’ gingham stylish shirt. This cushion is an old fashioned and evergreen pattern which is returned with a contemporary outlook.'
    }, {
      name: 'Cutwork Beaded Cushion',
      longName: 'Brown Cut-work square beaded Cushion',
      size: '16 x 16 (in inches)',
      material: 'Jacquard fabric',
      color: 'Chocolate Brown',
      careInstruction: 'Dry Clean only',
      info: ['Contemporary', 'Single Piece', 'Jacquard loom fabric', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/2.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/2',
      description: 'This is an elegant cushion to reckon with. Karomi brings alive the vintage gild in a dreamy cutwork beaded cushion laid in squares. The play of beads and Cutwork creates a visual treat.'
    }, {
      name: 'Hand painted Floral Cushion',
      longName: 'Hand Painted Floral Cotton Cushion',
      size: '16 x 16 (in inches)',
      material: 'Cotton',
      color: 'Lemon Yellow',
      careInstruction: 'Dry Clean only',
      info: ['Hand Painted', 'Single Piece', 'Cotton', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/3',
      description: 'This Cushion comprises of lustrous flowers that are hand painted and thus gives it a very elegant feel. Spectacular shades of lemon yellow with green and red creates a classic splendor of color.'
    }, {
      name: 'Crochet Roses Cushion',
      longName: 'Chanderi Cushion with Crochet Roses',
      size: '23 x 14 (in inches)',
      material: 'Chanderi',
      color: 'Electric Blue',
      careInstruction: 'Dry Clean only',
      info: ['Crochet Flowers', 'Single Piece', 'Chanderi', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/4.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/4',
      description: 'The roses crafted by the crochet technique gives the cushion a very unique feel.  Light pink roses on the base of the electric blue Chanderi fabric create a very delightful appeal to the eye.'
    }, {
      name: 'Chanderi Copper Rings Cushion',
      longName: 'Chanderi flower base with Cooper rings Cushion',
      size: '17 x 15 (in inches)',
      material: 'Chanderi',
      color: 'Brown',
      careInstruction: 'Dry Clean only',
      info: ['Cooper Rings on one side', 'Single Piece', 'Chanderi', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/5.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/5',
      description: 'This cushion has a vibrant rich Chanderi flower design. The base fabric highlights the floral motif and the top cooper embellishments give it a grunge look and thus make this piece, a stunner.'
    }, {
      name: 'Acid Printed bearing Cushion',
      longName: 'Black and Silver Acid Printed Metal Bearing cushion',
      size: '33 x 18 (in inches)',
      material: 'Jacquard woven fabric and Chanderi',
      color: 'Black and Silver',
      careInstruction: 'Dry Clean only',
      info: ['Metal bearings', 'Single Piece', 'Jacquard woven fabric and Chanderi', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/6.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/6',
      description: 'This abstract design cushion is crafted out of bearings and zari on a black and silver base to create a stunning marvel. This modern design is made to wow the lovers of metal.'
    }, {
      name: 'Puzzled Satin Cushion',
      longName: 'Puzzled shiny lace satin cushion',
      size: '14 x 14 (in inches)',
      material: 'Satin',
      color: 'Burly Wood',
      careInstruction: 'Dry Clean only',
      info: ['Lace', 'Satin', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/7.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/7',
      description: 'Shiny laces come together to form an optical mirage in this cushion. This puzzled treasure is a stunning showcase of superlative design.'
    }, {
      name: 'Wavy Sequins embroidery cushion',
      longName: 'Black and Silver Sequins Wavy lined Cushion',
      size: '23 x 19 (in inches)',
      material: 'Satin Stretch and Chanderi',
      color: 'Black and Silver',
      careInstruction: 'Dry Clean only',
      info: ['Sequins embroidery', 'Contemporary', 'Single Piece', 'Satin stretch and Chanderi', 'No Fillers included', 'Dry clean only', 'Back Middle Closure: Premium quality Metal zipper'],
      imageUrl: baseUrl + '/8.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/8',
      description: 'This silver sequins embroidered cushion with waves makes a contemporized pattern to reckon with. The silver colour is aptly coupled with darker silver and black sequins to heighten the color scheme.'
    }, {
      name: 'Metal rings and washer cushion',
      longName: 'Black Metal rings and washer embroidered cushion',
      size: '15 x 20 (in inches)',
      material: 'Satin and Jacquard acid washed fabric',
      color: 'Black and Silver',
      careInstruction: 'Dry Clean only',
      info: ['Metal rings and small silver washers', 'Single Piece', 'Satin and Jacquard acid washed fabric', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/9.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/9',
      description: 'This cushion interlaces the metal rings and washers. The lustrous silver metal perfectly, adds an understated elegance to your home. It can liven up any corner of your living room by placing it on black or ivory furnishings.'
    }, {
      name: 'Diamond embroidered netted cushion',
      longName: 'Silver sequins and pearl embroidered diamond shaped metal netted cushion',
      size: '12 x 18 (in inches)',
      material: 'Chanderi and soft net',
      color: 'Black and Silver',
      careInstruction: 'Dry Clean only',
      info: ['Sequins and pearl embroidery', 'Single Piece', 'Chanderi and Soft Net', 'No Fillers included', 'Dry clean only', 'Back middle Closure: Premium quality studded zipper'],
      imageUrl: baseUrl + '/10.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/10',
      description: 'This cushion is embroidered with sleek and modern diamond pattern. This Simple geometric shape overlaid with sequins and pearls gives it a chic and sophisticated look.'
    }, {
      name: 'Shimmery Hexagon Cushion',
      longName: 'Brown Hexagon design shimmery Chanderi cushion',
      size: '12 x 12 (in inches)',
      material: 'Chanderi',
      color: 'Sandy Brown and Beige',
      careInstruction: 'Dry Clean only',
      info: ['Lace embroidery', 'Single Piece', 'Chanderi', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/11.jpg',
      altImages: [baseUrl + '/11a.jpg'],
      routeUrl: '/cushions/decor-metallic-cushions/11',
      description: 'Shimmery dark coloured lace in a neutral tone base has been cleverly placed horizontally to create a texture. This stunning lace embroidery piece is a perfect fit for modern-day castles and palaces.'
    }, {
      name: 'Glass beads embroidered silver cushion',
      longName: 'Silver Glass beads full embroidery cushion',
      size: '12 x 12 (in inches)',
      material: 'Satin',
      color: 'Dim Gray Silver',
      careInstruction: 'Dry Clean only',
      info: ['Glass beads embroidery', 'Single Piece', 'Satin', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/12.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/12',
      description: 'This cushion is a classic & minimal juxtaposition of beads. Soft satin in a grey tone has been cleverly embroidered to create a textured effect. This cushion adds polish & luster to your interiors in an understated way.'
    }, {
      name: 'Thread embroidered floral cushion',
      longName: 'Thread and wool twisted floral design cushion',
      size: '22 x 16 (in inches)',
      material: 'Soft net',
      color: 'Tan bronze',
      careInstruction: 'Dry Clean only',
      info: ['Embroidery with 4 ply wool and thread', 'Single Piece', 'Soft net', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/13.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/13',
      description: 'The twisted thread art comes alive with contemporary fashion in this cushion. The neat floral motifs on the tan surface perfectly create a classy piece.'
    }, {
      name: 'Herringbone embroidered cushion',
      longName: 'Herringbone embroidery and space tucks Chanderi cushion',
      size: '21 x 13 (in inches)',
      material: 'Chanderi',
      color: 'Sienna and dark brown',
      careInstruction: 'Dry Clean only',
      info: ['Thread embroidery', 'Space tucks', 'Single Piece', 'Chanderi', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/14.jpg',
      altImages: [baseUrl + '/14a.jpg'],
      routeUrl: '/cushions/decor-metallic-cushions/14',
      description: 'The herringbone stitch design thread embroidery defines this brilliant piece. The space tucks dark brown back is a perfect contrast to the gorgeous front of the cushion.'
    }, {
      name: 'Aztec denim cushion',
      longName: 'Denim Aztec print thread embroidery cushion',
      size: '19 x 13 (in inches)',
      material: 'Denim',
      color: 'Midnight Blue',
      careInstruction: 'Dry Clean only',
      info: ['Thread embroidery', 'Single Piece', 'Denim', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/15.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/15',
      description: 'The colourful and circular motif on a blue denim base gives this cushion a touch of class. Inspired from the Aztec print, it is a piece to add contemporary glamour to any space instantly.'
    }, {
      name: 'Sequins and Metal chain Cushion',
      longName: 'Metal chain embroidered satin cushion with jacquard acid wash back',
      size: '20 x 9 (in inches)',
      material: 'Satin and Jacquard',
      color: 'Black and Silver',
      careInstruction: 'Dry Clean only',
      info: ['Metal chain, sequins and bead embroidery', 'Single Piece', 'Satin and Jacquard fabric', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/16.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/16',
      description: 'The metal chains and sequins are beaded perfectly in black satin to give a grunge look to the cushion. Make it sit with your favorite cushions to brighten the space.'
    }, {
      name: 'Gray metallic embroidered cushion',
      longName: 'Gray embroidered cushions with thread and beads',
      size: '19 x 13 (in inches)',
      material: 'Velvet',
      color: 'Steel Gray',
      careInstruction: 'Dry Clean only',
      info: ['Thread and bead embroidery', 'Single Piece', 'High Quality Velvet', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/17.jpg',
      altImages: [baseUrl + '/17a.jpg'],
      routeUrl: '/cushions/decor-metallic-cushions/17',
      description: 'Embroidery with threads and beads in grey with stitches over a velvet base gives this cushion a distinct poise. Bring home this classy piece and find it never go out of date.'
    }, {
      name: 'Sequin Fish Cushion',
      longName: 'Sequin embroidered fish Décor Cushion on a velvet base',
      size: '18 x 18 (in inches)',
      material: 'Velvet',
      color: 'Black',
      careInstruction: 'Dry Clean only',
      info: ['Sequin Embroidered', 'Contemporary', 'Single Piece', 'Velvet', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/18.jpg',
      routeUrl: '/cushions/decor-metallic-cushions/18',
      description: 'This Sleek and Modern cushion is a simple yet bold patterned cushion. The sequined fish shows a chic and sophisticated way of living for the discerning of the eye.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/cushions/kids-cushions', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Kids-Cushion';

  var data = {
    collectionName: 'Kids Cushions',
    category: 'Cushions',
    data: [{
      name: 'Mermaid cushion',
      longName: 'Sky blue sequins Mermaid three dimensional cushion',
      size: '38 x 18 (in inches)',
      material: 'Shimmer Satin',
      color: 'Sky blue',
      careInstruction: 'Dry Clean only',
      info: ['Sequins embroidery', 'Shimmer Satin', 'Set of 2', 'Filler included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/1.jpg',
      altImages: [baseUrl + '/1a.jpg'],
      routeUrl: '/cushions/kids-cushions/1',
      description: 'Inspired from mermaids, the pretty parts like the sky blue colour and the shimmery sequins used in the cushions have been taken. This cushion can cheer up your Childs mood in seconds.'
    }, {
      name: 'Cupcake cushions',
      longName: 'Pastel cupcakes and Bolster set',
      size: 'As per customization',
      material: 'Linen',
      color: 'Light pink, Sea green and off white',
      careInstruction: 'Dry Clean only',
      info: ['Quilting with 4mm foam', 'Linen', 'Set of 4', 'Filler included', 'Dry clean only', 'Back Closure: Premium quality Zipper for the cupcakes and lace tying on the sides for Bolsters'],
      imageUrl: baseUrl + '/2.jpg',
      routeUrl: '/cushions/kids-cushions/2',
      description: 'Hand quilted into a cupcake pattern, this set is very difficult to let go off.  This cupcake cushions and bolsters make a versatile addition to your Childs bedroom.'
    }, {
      name: 'Cloud, moon and Star shaped cushions',
      longName: 'Cloud, Moon and Star Night cushions',
      size: 'As per customization',
      material: 'Jersey stretch',
      color: 'Light pink, sky blue and gray',
      careInstruction: 'Dry Clean only',
      info: ['Thread embroidered Eyes and Mouth', 'Jersey stretch', 'Set of 3', 'Filler included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/cushions/kids-cushions/3',
      description: 'These cushions are a contemporized redefinition of the cloud, moon and star. They are made with simplicity and love. The unique use of the pastel palette with the intricate threadwork details surface makes this lovely cushion a must-have.'
    }, {
      name: 'Cartoon character Cushions',
      longName: 'Digital Printed Cartoon characters cushion set',
      size: '12x12 (in inches) – 2 pieces and 22x12 (in inches) – 1 piece',
      material: 'Blended Georgette',
      color: 'Multicoloured',
      careInstruction: 'Dry Clean only',
      info: ['Digital print', 'Blended Georgette', 'Side ruffles', 'Set of 3', 'Filler included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/4.jpg',
      routeUrl: '/cushions/kids-cushions/4',
      description: 'The rust orange and off white background with cartoon characters, lends a colourful and joyous inspiration to your Childs room. Quite eye catching, this cushion sits beautifully as a centerpiece on your kid’s multicoloured bed.'
    }, {
      name: 'Owl cushions',
      longName: 'Owl shaped gray and white Cushions',
      size: 'As per customization',
      material: 'Jersey stretch',
      color: 'Gray and White',
      careInstruction: 'Dry Clean only',
      info: ['Thread embroidered and patchwork Eyes and Mouth', 'Jersey stretch', 'Set of 2', 'Filler included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/5.jpg',
      routeUrl: '/cushions/kids-cushions/5',
      description: 'These owl shaped cushions have been flawlessly worked on a knitted white and grey fabric. The embroidered features of the owls face are perfectly worked upon in these cushion covers. They add a fun side to your Childs living.'
    }, {
      name: 'Sinchan Cushions',
      longName: 'Sinchan cartoon character face expression cushions',
      size: 'As per customization',
      material: 'Jersey stretch',
      color: 'Bisque, Black and Red',
      careInstruction: 'Dry Clean only',
      info: ['Thread embroidered and patchwork of face features', 'Jersey stretch', 'Set of 4', 'Filler included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/6.jpg',
      altImages: [baseUrl + '/6a.jpg'],
      routeUrl: '/cushions/kids-cushions/6',
      description: 'Fun plus comfort is all your child deserves. This Sinchan cushion set is cuddled in soft fabrics and Comprises of four pieces with four facial expressions. This set is a perfect addition to your child\'s room.'
    }, {
      name: 'Elephant Cushion',
      longName: 'Twill woven zig zag patterned Elephant Cushion',
      size: '14 x 14 (in inches)',
      material: 'Twill woven fabric',
      color: 'Dark Gray and Light Pink',
      careInstruction: 'Dry Clean only',
      info: ['3D elephant', 'Contemporary', 'Single piece', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/7.jpg',
      routeUrl: '/cushions/kids-cushions/7',
      description: 'Hand crafted and stunningly patterned, this elephant cushion cover is quite the item. A 3D playful elephant is placed on the fabric and this creates a stunning effect.'
    }, {
      name: 'Hello Kitty Cushions',
      longName: 'Hello Kitty cartoon Cushions',
      size: '16.5 x 16.5 (in inches)',
      material: 'Casement Cotton and Twill woven fabric',
      color: 'Dark Gray and Light Pink',
      careInstruction: 'Dry Clean only',
      info: ['Contemporary', 'Set of 2', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/8.jpg',
      altImages: [baseUrl + '/8a.jpg'],
      routeUrl: '/cushions/kids-cushions/8',
      description: 'Decorate your child\'s room with this designer Hello Kitty cushions. Made from the highest quality fabric, this cushion is soft and comfortable. Gift your little ones with this super cute hello kitty themed cushion covers and liven up their mood.'
    }, {
      name: 'Toy Turtle cushion',
      longName: '3D Toy turtle cushion cover',
      size: '26 x 16 (in inches)',
      material: 'Twill and Pile woven fabric',
      color: 'Shades of Green on a Sea Green base',
      careInstruction: 'Dry Clean only',
      info: ['3D Turtle', 'Contemporary', 'Single piece', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/9.jpg',
      altImages: [baseUrl + '/9a.jpg'],
      routeUrl: '/cushions/kids-cushions/9',
      description: 'Karomi brings this toy cushion cover to decorate your little one\'s playroom. This cushion cover features fun and vibrant colours. Simply slip the cover onto the cushion for a quick and stylish update to your kid\'s room.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/cushions/pair-cushions', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Pair-Cushions';

  var data = {
    collectionName: 'Pair Cushions',
    category: 'Cushions',
    data: [{
      name: 'Sequin Flower Cushions',
      longName: 'Sequin flower design Cushions',
      size: '16 x 16 (in inches)',
      material: 'Satin and Soft Net',
      color: 'Black',
      careInstruction: 'Dry Clean only',
      info: ['Sequins embroidery', 'Contemporary', 'Set of 2', 'Satin and Soft Net', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/1.jpg',
      routeUrl: '/cushions/pair-cushions/1',
      description: 'A modern sequin work floral embroidery in shades of pink and green covers the entire surface of the cushion. Add this unique pair to your living area for modern sophistication. This best looks with light coloured furnishings.'
    }, {
      name: 'Machine woven colourful cushions',
      longName: 'Colourful long rectangle machine woven orange cushions',
      size: '26 x 16 (in inches)',
      material: 'Raw Silk',
      color: 'Orange',
      careInstruction: 'Dry Clean only',
      info: ['Machine woven', 'Contemporary', 'Set of 2', 'Raw Silk', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/2.jpg',
      routeUrl: '/cushions/pair-cushions/2',
      description: 'Splendid machine embroidered flowers come together to form a unique pattern in these cushions. The motifs come together to resemble a floral base, while the plain orange raw silk produces a visible contrast.'
    }, {
      name: 'Ikat and Kantha cushions',
      longName: 'Ikat with the combination of Kantha work cushions',
      size: '20 x 20 (in inches)',
      material: 'Cotton',
      color: 'Black, Maroon and White',
      careInstruction: 'Dry Clean only',
      info: ['Ikat', 'Kantha work', 'Contemporary', 'Set of 2', 'Cotton', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/cushions/pair-cushions/3',
      description: 'Ikat with a combination of Kantha comes alive in a contemporary fashion in these cushions. The neat Kantha motifs in black and white with a black Kantha back perfectly creates a classy piece.'
    }, {
      name: 'Checkered lace base with flower motif',
      longName: 'Checkered lace base with embroidered pearl flower motif cushions',
      size: '14 x 14 (in inches)',
      material: 'Raw Silk',
      color: 'Burly Wood',
      careInstruction: 'Dry Clean only',
      info: ['Pearl flower motif', 'Checkered lace', 'Contemporary', 'Set of 2', 'Raw silk', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/4.jpg',
      altImages: [baseUrl + '/4a.jpg'],
      routeUrl: '/cushions/pair-cushions/4',
      description: 'Small geometric squares come together to form the base of these cushions. The embroidered flower motif with pearls creates a stunning showcase of artisanal crafts in these cushions.'
    }, {
      name: '3D pastel cushion covers',
      longName: 'Jersey stretch 3D pastel cushion Covers',
      size: '18 x 11 (in inches)',
      material: 'Jersey stretch',
      color: 'Combination of Light pastel colours with beige back',
      careInstruction: 'Dry Clean only',
      info: ['3D fabric ornamentation', 'Contemporary', 'Set of 2', 'Jersey stretch', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/5.jpg',
      altImages: [baseUrl + '/5a.jpg'],
      routeUrl: '/cushions/pair-cushions/5',
      description: '3D design hike new heights in these cushions. The lustrous pastel colours and shades create a neat dimension while the hand feel is very soft and cushy.'
    }, {
      name: 'Border beads embroidered cushion',
      longName: 'Maroon beads embroidered border cushion',
      size: '16 x 16 (in inches)',
      material: 'Jersey',
      color: 'Maroon',
      careInstruction: 'Dry Clean only',
      info: ['Tikki Embroidery', 'Contemporary', 'Set of 2', 'Jersey', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/6.jpg',
      altImages: [baseUrl + '/6a.jpg'],
      routeUrl: '/cushions/pair-cushions/6',
      description: 'These cushions homes a fashionable border by its beads embroidery. One-of-its-kind, subtly textured, this cushion cover personifies style and high end fashion.'
    }, {
      name: 'Gray denim cushions',
      longName: 'Gray denim cushions with contrast orange piping and wooden buttons',
      size: '16 x 16 (in inches)',
      material: 'Denim',
      color: 'Gray',
      careInstruction: 'Dry Clean only',
      info: ['Contrast cord piping', 'Contemporary', 'Set of 2', 'Denim', 'No Fillers included', 'Dry clean only', 'Back Closure: Wooden Buttons'],
      imageUrl: baseUrl + '/7.jpg',
      altImages: [baseUrl + '/7a.jpg', baseUrl + '/7b.jpg'],
      routeUrl: '/cushions/pair-cushions/7',
      description: 'A contemporized rendition of the evergreen strong denims, these cushions is that bold statement that is made with simplicity. The use of gray color with a contrasting piping makes this cushion a must-have.'
    }, {
      name: 'Net cushions with pearls outline',
      longName: 'Two coloured Net cushions with pearl outline',
      size: '20 x 12 (in inches)',
      material: 'Soft net with cotton lining',
      color: 'Seagull Gray and Oxford Blue',
      careInstruction: 'Dry Clean only',
      info: ['Pearl outline', 'Contemporary', 'Set of 2', 'Soft net with cotton Lining', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/8.jpg',
      altImages: [baseUrl + '/8a.jpg'],
      routeUrl: '/cushions/pair-cushions/8',
      description: 'These classic & minimal cushions create a textured effect with the use of net on the base. The pearl outline style adds polish & luster to these cushions.'
    }, {
      name: 'Fur cushions',
      longName: 'Furry cushions with appliqué design',
      size: '20 x 12 (in inches)',
      material: 'Fur fabric and back raw silk',
      color: 'Goldenrod and Ultramarine',
      careInstruction: 'Dry Clean only',
      info: ['Appliqué', 'Contemporary', 'Set of 2', 'Furry fabric and back Raw silk', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/9.jpg',
      altImages: [baseUrl + '/9a.jpg'],
      routeUrl: '/cushions/pair-cushions/9',
      description: 'The use of fur fabric in these cushions provides a soft texture and maximum comfort with a touch of glamour. The appliqué generates a visual impact and increases the look. Let this sit atop Off-White upholstery, in combination with faded hues to get that striking visual impact.'
    }, {
      name: 'Multicoloured cushions with flower embroidery',
      longName: 'Multicolored Thread work flowers with mirror work and straw pipe embroidery',
      size: '18 x 18 (in inches)',
      material: 'Printed georgette',
      color: 'Multicoloured',
      careInstruction: 'Dry Clean only',
      info: ['Flower embroidery', 'Contemporary', 'Set of 2', 'Printed georgette', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/10.jpg',
      altImages: [baseUrl + '/10a.jpg'],
      routeUrl: '/cushions/pair-cushions/10',
      description: 'Bringing the colourful period to life, these cushions put a regal demeanor at display. The vivid multicolored print, serves to be an ideal background for the striking flower embroidery. This bold and beautiful piece deserves to be the center of attraction. Ideal for the living room, this can be placed on a neutral colored couch; this could also sit comfortably with beige, matt gold or black.'
    }, {
      name: 'Hibiscus embroidery cushion',
      longName: 'Hibiscus embroidered deep red cushions',
      size: '16 x 16 (in inches)',
      material: 'Velvet',
      color: 'Deep Red',
      careInstruction: 'Dry Clean only',
      info: ['Flower Embroidery', 'Contemporary', 'Set of 2', 'Velvet', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/11.jpg',
      altImages: [baseUrl + '/11a.jpg'],
      routeUrl: '/cushions/pair-cushions/11',
      description: 'These cushions are inspired by the hibiscus flower and are designed to brighten your favorite seating. These embroidered cushions are ideal for those with a fine taste in home decor. An embroidered flower and the deep red backdrop makes this cushion an interesting pick.'
    }, {
      name: 'Cushions with lace ornamentation',
      longName: 'Apricot sepia coloured cushions with lace and tassels ornamentation',
      size: '26 x 16 (in inches)',
      material: 'Jacquard loom fabric',
      color: 'Apricot sepia',
      careInstruction: 'Dry Clean only',
      info: ['Lace', 'Tassels', 'Contemporary', 'Set of 2', 'Jacquard loom fabric', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/12.jpg',
      altImages: [baseUrl + '/12a.jpg'],
      routeUrl: '/cushions/pair-cushions/12',
      description: 'These clean lined and great textured cushion covers are designed to break the monotony of the smooth upholstery.  These lace ornamented covers are available in the shade of apricot sepia.  Further the tassels added on the four corners of the cushions add a statement to the furnishings.'
    }, {
      name: 'Hand-woven pillow cases',
      longName: 'Hand woven pillow cases with straw pipe golden highlights',
      size: '27 x 18 (in inches)',
      material: 'Hand-woven cotton',
      color: 'Bisque',
      careInstruction: 'Dry Clean only',
      info: ['Straw pipe highlights', 'Contemporary', 'Set of 2', 'Hand-woven cotton', 'No Fillers included', 'Dry clean only', 'Back Closure: Wooden Buttons'],
      imageUrl: baseUrl + '/13.jpg',
      routeUrl: '/cushions/pair-cushions/13',
      altImages: [baseUrl + '/13a.jpg'],
      description: 'These elegant pillow cases brings alive the vintage gild by the dreamy highlights of embellishments. The play of straw pipes creates a visual treat.'
    }, {
      name: 'Dual coloured Sequin Cushions',
      longName: 'Dual Coloured – Bisque and Silver Sequin embroidered cushion',
      size: '16 x 16 (in inches)',
      material: 'Shimmer',
      color: 'Bisque',
      careInstruction: 'Dry Clean only',
      info: ['Sequins embroidery', 'Contemporary', 'Set of 2', 'Shimmer', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/14.jpg',
      altImages: [baseUrl + '/14a.jpg'],
      routeUrl: '/cushions/pair-cushions/14',
      description: 'These cushions in a neutral tone have been cleverly worked upon to create a texture. Introduction of two coloured sequins gives these cushions two different colours when touched and felt. This stunning piece is a perfect fit for modern-day houses.'
    }, {
      name: 'Silver and Black long cushions',
      longName: 'Silver and Black Alternate Space tucks rectangle cushions',
      size: '26 x 16 (in inches)',
      material: 'Printed Shimmer and Raw silk',
      color: 'Silver and Black',
      careInstruction: 'Dry Clean only',
      info: ['Space Tucks', 'Contemporary', 'Set of 2', 'Printed Shimmer and Raw silk', 'No Fillers included', 'Dry clean only', 'Top Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/15.jpg',
      altImages: [baseUrl + '/15a.jpg'],
      routeUrl: '/cushions/pair-cushions/15',
      description: 'These cushions are a modern artist\'s rendition of the colour blocking technique. The pattern represented in silver and black and the addition of space tucks is what makes it a great choice.'
    }, {
      name: 'Gotta Patti embroidered cushion',
      longName: 'Gotta Patti work cushion covers',
      size: '16 x 16 (in inches) and 16 x 9 (in inches)',
      material: 'Jacquard woven fabric',
      color: 'Brown',
      careInstruction: 'Dry Clean only',
      info: ['Gotta Patti embroidery', 'Contemporary', 'Set of 2', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/16.jpg',
      routeUrl: '/cushions/pair-cushions/16',
      description: 'Karomi presents this Gotta Patti Hand Embroidered Cushion Covers, which will add an element of elegance & beauty to your home & the place where it is kept.'
    }, {
      name: 'Heavy work straw pipe cushion covers',
      longName: 'Heavy work straw pipe and thread embroidered cushion covers',
      size: '16 x 16 (in inches) and 16 x 9 (in inches)',
      material: 'Satin',
      color: 'Light Golden',
      careInstruction: 'Dry Clean only',
      info: ['Hand embroidery', 'Contemporary', 'Set of 2', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/17.jpg',
      routeUrl: '/cushions/pair-cushions/17',
      description: 'Karomi presents this light Golden Hand Embroidered cushion covers that are beautifully handmade by the skilled craftsmen. This covers add elegance & brightness to your home.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/cushions/theme-cushions', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Theme-Cushions';

  var data = {
    collectionName: 'Theme Cushions',
    category: 'Cushions',
    data: [{
      name: 'Car and bicycle beaded cushion',
      longName: 'Yellow hand woven Cushion with Car and Bicycle embroidery',
      size: '16 x 16 (in inches)',
      material: 'Hand woven cotton and Satin',
      color: 'Yellow',
      careInstruction: 'Dry Clean only',
      info: ['Bead work', 'Contemporary', 'Set of 2', 'Hand woven cotton base with satin back', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/1.jpg',
      altImages: [baseUrl + '/1a.jpg', baseUrl + '/1b.jpg'],
      routeUrl: '/cushions/theme-cushions/1',
      description: 'These car and bicycle motifs symbolize a modified version of hand embroidery. The design is embroidered with straw pipes and thread. This is a classic piece for all vehicle lovers.'
    }, {
      name: 'Batman themed Cushion',
      longName: 'Batman themed Sequins cushion',
      size: '16 x 16 (in inches)',
      material: 'Satin and Raw silk',
      color: 'Black and Yellow',
      careInstruction: 'Dry Clean only',
      info: ['Sequins work', 'Contemporary', 'Set of 2', 'Satin front with Raw silk back', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/2.jpg',
      routeUrl: '/cushions/theme-cushions/2',
      description: 'This glittering sequin work Batman themed cushion is a stunning display of hand craftsmanship. Make it sit on your favorite superhero spot in your abode.'
    }, {
      name: 'Playing cards themed Cushions',
      longName: 'Playing Cards themed threadwork Cushion',
      size: '16 x 16 (in inches)',
      material: 'Shiny cotton',
      color: 'Light Fawn',
      careInstruction: 'Dry Clean only',
      info: ['Thread work', 'Contemporary', 'Set of 4', 'Shiny Cotton', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/3.jpg',
      altImages: [baseUrl + '/3a.jpg'],
      routeUrl: '/cushions/theme-cushions/3',
      description: 'These cushions in the colours of Red and Black expertly worked with thread hand embroidery best showcase this playing cards themed cushion. This masterfully crafted playing cards cushion set is hard to let go of.'
    }, {
      name: 'Live, Laugh, Love Cushion',
      longName: 'Live, Laugh, Love Quote Orange Cushion',
      size: '16 x 16 (in inches)',
      material: 'Raw silk',
      color: 'Orange',
      careInstruction: 'Dry Clean only',
      info: ['Thread work', 'Contemporary', 'Set of 2', 'Raw silk', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/4.jpg',
      routeUrl: '/cushions/theme-cushions/4',
      description: 'Embroidered in thread, our quotation cushion is a modern artist\'s rendition of his favorite quotes.  The quotes are worked upon by intricate hand embroidery and are what makes it a must-have.'
    }, {
      name: 'Superman Cushions',
      longName: 'Superman themed Threadwork cushions',
      size: '16 x 16 (in inches)',
      material: 'Raw silk',
      color: 'Red and Blue',
      careInstruction: 'Dry Clean only',
      info: ['Thread work', 'Contemporary', 'Set of 2', 'Raw silk', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/5.jpg',
      routeUrl: '/cushions/theme-cushions/5',
      description: 'Intricate threadwork of the superman logo crafted by hand, is a stunning showcase of superlative design. The palette of yellow, blue and red brings out the perfect superhero theme.'
    }, {
      name: 'Gym Cushions',
      longName: 'Hand embroidered Gym cushions',
      size: '16 x 16 (in inches)',
      material: 'Raw Silk',
      color: 'Black and White',
      careInstruction: 'Dry Clean only',
      info: ['Hand embroidery', 'Contemporary', 'Set of 3', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/6.jpg',
      routeUrl: '/cushions/theme-cushions/6',
      description: 'These hand embroidered cushion set is a must have for any Gym freak. These cushions lights up the ambience of any place with its customized quotes.'
    }, {
      name: 'Family Cushion',
      longName: 'Hand embroidered Family members Cushion Cover',
      size: '30 x 16 (in inches)',
      material: 'Velvet',
      color: 'Black',
      careInstruction: 'Dry Clean only',
      info: ['Hand embroidery', 'Contemporary', 'Single Piece', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/7.jpg',
      routeUrl: '/cushions/theme-cushions/7',
      description: 'This family member’s cushion cover is of a very simple and classical design. Comfortable, Beautiful, Visual and full of emotions, this is a perfect decorative item for any ambience.'
    }, {
      name: 'Spiderman Cushion',
      longName: 'Spiderman themed twill weave cushion',
      size: '28 x 16 (in inches)',
      material: 'Twill woven fabric and Linen',
      color: 'Shades of Blue and Red',
      careInstruction: 'Dry Clean only',
      info: ['Appliqué', 'Contemporary', 'Single piece', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/8.jpg',
      altImages: [baseUrl + '/8a.jpg'],
      routeUrl: '/cushions/theme-cushions/8',
      description: 'Karomi brings to you a vibrant and high quality cushion cover which is a perfect room decor item for your superhero loving child. This cushion cover comes with Spider Man appliqué on it. Add a touch of contemporary glamour to the room with this cushion cover.'
    }, {
      name: 'Mickey Mouse Cushion',
      longName: 'Mickey Mouse themed twill weave cushion',
      size: '22 x 16 (in inches)',
      material: 'Twill woven fabric and Linen',
      color: 'Shades of Black, Red, Beige and Yellow',
      careInstruction: 'Dry Clean only',
      info: ['Appliqué', 'Contemporary', 'Single piece', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: baseUrl + '/9.jpg',
      altImages: [baseUrl + '/9a.jpg'],
      routeUrl: '/cushions/theme-cushions/9',
      description: 'This Mickey Mouse cushion cover is exclusively designed for all cartoon lover kids. This cushion provides an extra layer of softness with the use of twill fabric. The use of these cheerful colors is especially for kids to pick and choose from.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/index', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var data = {
    products: [{
      name: 'Velvet base with wool flower embroidery',
      longName: 'Embossed velvet cushions with woolen flowers hand embroidery',
      size: '16 x 16 (in inches)',
      material: 'Embossed velvet',
      color: 'Light Crimson',
      careInstruction: 'Dry Clean only',
      info: ['Wool embroidery', 'Embossed velvet', 'Contemporary', 'Set of 5', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: 'assets/img/Products/Cushion-Sets/1.jpg',
      routeUrl: '/cushions/cushion-sets/1',
      description: 'The woolen flowers on a light crimson embossed velvet base give a touch of class to these cushions. It is a piece to add contemporary glamour to any space instantly.'
    }, {
      name: 'Owl cushions',
      longName: 'Owl shaped gray and white Cushions',
      size: 'As per customization',
      material: 'Jersey stretch',
      color: 'Gray and White',
      careInstruction: 'Dry Clean only',
      info: ['Thread embroidered and patchwork Eyes and Mouth', 'Jersey stretch', 'Set of 2', 'Filler included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: 'assets/img/Products/Kids-Cushion/5.jpg',
      routeUrl: '/cushions/kids-cushions/5',
      description: 'These owl shaped cushions have been flawlessly worked on a knitted white and grey fabric. The embroidered features of the owls face are perfectly worked upon in these cushion covers. They add a fun side to your Childs living.'
    }, {
      name: 'The Karomi Fruit basket',
      longName: 'The Karomi Fruit basket',
      size: '31 x 26 (in inches)',
      material: 'Cotton',
      // color: 'White and Sandy Brown',
      // careInstruction: 'Dry Clean only',
      info: ['Technique – Cross stitch', '*Available both with and without frame '],
      imageUrl: 'assets/img/Products/Cross-Stitch-Frames/1.jpg',
      routeUrl: '/cross-stitch-frames/1'
      // description: 'Quite eye catching, these interlinked bold half flower cushions sit beautifully to form a full rose when kept together. These can be used as a standalone for a striking impact.'
    }, {
      name: 'Rug',
      longName: 'Rug',
      size: '34 x 75.5 in inches',
      material: 'Eri Cotton and Raw Silk',
      color: 'Muga and Green',
      careInstruction: 'Hand wash',
      info: ['Hand woven', 'Hand wash', 'The Eri silk gives warmth in winter and coolness in summer', 'No side effects on direct contact with the skin', 'Non violent silk', 'Inclusive of fillers', 'Warp Yarn: Handspun Cotton', 'Weft Yarn: Eri Silk', 'Motif yarn: 2 ply wool', 'Trims: Eri Cotton Tassels'],
      imageUrl: 'assets/img/Products/Meditation-area/6.jpg',
      routeUrl: '/collection/meditation-area/6',
      description: 'This Karomi, Asamiya Serenity Rug is woven with Eri-cotton as the centre and Raw silk on the sides. The Rug is further accessorized with tassels on two sides. A thin layer of 6mm foam is inserted on the middle of the rug and gives a very comfortable feel while relaxing on it.'
    }, {
      name: 'Indigo dyed Floral Napkins',
      longName: 'Half flower full sequined heavy work Tassar cushion',
      size: '18 x 18 (in inches)',
      material: 'Cotton',
      color: 'Indigo Blue',
      careInstruction: 'Washable',
      info: ['Cotton', 'Indigo dyed', 'Floral print', 'Set of 6 pieces', 'Contemporary'],
      imageUrl: 'assets/img/Products/Table-Napkins/1.jpg',
      routeUrl: '/table-kitchen/table-napkins/1',
      description: 'This Indigo dyed napkins brought to you Karomi, brings to you a set of floral printed napkins outlined by black and blue. This set adds an exotic touch to your dining.'
    }, {
      name: 'Rust orange cutwork table runner',
      longName: 'Bead work and cutwork rust orange table runner',
      size: '39 x 15 (in inches)',
      material: 'Georgette, Net and Shimmer',
      color: 'Rust Orange',
      careInstruction: 'Dry Clean only',
      info: ['Beads embroidery', 'Hand embroidered', 'Cutwork', 'Single piece', 'Contemporary'],
      imageUrl: 'assets/img/Products/Table-Runners/6.jpg',
      routeUrl: '/table-kitchen/table-runners/6',
      description: 'Great artwork comes alive through the asymmetric patterns of this runner. The pattern and cutwork on the rust orange base gives a very vivid design.'
    }, {
      name: 'Candle Stand Covers',
      longName: 'Candle Stand Covers',
      size: '7x7 in inches',
      material: 'Eri Cotton',
      color: 'Muga and Green',
      careInstruction: 'Hand wash',
      info: ['Hand woven', 'Hand wash', 'Non violent silk', 'Warp Yarn: Handspun Cotton', 'Weft Yarn: Eri Silk', 'Motif yarn: 2 ply wool'],
      imageUrl: 'assets/img/Products/Meditation-area/2.jpg',
      routeUrl: '/collection/meditation-area/2',
      description: 'These Karomi, Asamiya Serenity Candle stand covers are square shaped coves and are made with THE Eri woven fabric. The base is made of a 12 mm thick ply.'
    }],
    collections: [{
      name: 'Batman themed Cushion',
      collectionName: 'Theme Cushions',
      longName: 'Batman themed Sequins cushion',
      size: '16 x 16 (in inches)',
      material: 'Satin and Raw silk',
      color: 'Black and Yellow',
      careInstruction: 'Dry Clean only',
      info: ['Sequins work', 'Contemporary', 'Set of 2', 'Satin front with Raw silk back', 'No Fillers included', 'Dry clean only', 'Back Closure: Premium quality zipper'],
      imageUrl: 'assets/img/Products/Theme-Cushions/2.jpg',
      routeUrl: '/cushions/theme-cushions/home',
      description: 'This glittering sequin work Batman themed cushion is a stunning display of hand craftsmanship. Make it sit on your favorite superhero spot in your abode.'
    }, {
      name: 'Wall Art',
      collectionName: 'Meditation Area',
      size: '17.5 x 36.5 in inches',
      material: 'Eri Cotton',
      color: 'Muga and Green',
      careInstruction: 'Hand wash',
      info: ['Hand woven', 'Wooden framed', 'Warp Yarn: Handspun Cotton', 'Weft Yarn: Eri Silk', 'Motif yarn: 2 ply wool', 'Trims: 1 picture square, Dried Paddy and Wooden frame'],
      imageUrl: 'assets/img/Products/Meditation-area/2.jpg',
      routeUrl: '/collection/meditation-area/2',
      description: 'This Karomi, Asamiya Serenity Wall Art is made to add appeal to the room with a woven fabric in the centre and dried paddy on the sides.'
    }, {
      name: 'Tan coloured 3D flowers Runner',
      collectionName: 'Table Runners',
      size: '53 x 15 (in inches)',
      material: 'Net and Shimmer',
      color: 'Tan',
      careInstruction: 'Dry Clean only',
      info: ['Beads embroidery', 'Hand embroidered', '3D Flowers', 'Single piece', 'Contemporary'],
      imageUrl: 'assets/img/Products/Table-Runners/7.jpg',
      routeUrl: '/table-kitchen/table-runners/7',
      description: 'Fine craftsmanship peeps through the detailed embroidery and the use of 3D flowers in this runner. The net flowers form a soft texture in this tan coloured base.'
    }, {
      name: 'Block printed Bedroom Collection',
      collectionName: 'Bedroom Collection',
      size: 'Side Table Mats – 26 x 16 (in inches), Pillow – 26 x 14 (in inches) & Bed Cover – 102 x 86 (in inches) – Super King Size',
      material: 'Raw Silk and Dyed Cotton',
      color: 'Blue',
      careInstruction: 'Dry Clean only',
      info: ['2 Side table Mats', '2 Small Pillows', '1 Bed coverBlock Printed', 'The pillows are not inclusive of fillers', 'Back Closure of Pillows: Premium quality zipper'],
      imageUrl: 'assets/img/Products/Block/1.jpg',
      routeUrl: '/collection/block-printed-bedroom-collection/1'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model() {
      return data;
    }
  });
});
define('karomi-ember/routes/table-kitchen/kitchen-oven-accessories', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Kitchen-oven';

  var data = {
    collectionName: 'Kitchen & Oven Accessories',
    category: 'Table & Kitchen',
    data: [{
      name: 'Monochrome Oven Set',
      longName: 'Monochromatic Quilted Oven Cover and 2 Square mitts set',
      size: '21 x 25 (in inches) – Oven Cover and 8 x 8 (in inches) – Square Oven Mitts',
      material: 'Cotton Casement',
      color: 'Black and White',
      // careInstruction: 'Dry Clean only',
      info: ['Quilting', 'Set of 3', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/1.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/1'
      // description: 'Quite eye catching, these interlinked bold half flower cushions sit beautifully to form a full rose when kept together. These can be used as a standalone for a striking impact.'
    }, {
      name: 'Floral Multicoloured oven set',
      longName: 'Multicoloured Thread work Appliqué and Printed Floral oven set',
      size: '38 x 16 (in inches) – Oven Cover, 14 x 7 (in inches) – Oven Gloves and 24 x 15 (in inches) – Napkin',
      material: 'Cotton Casement',
      color: 'Multicoloured',
      // careInstruction: 'Dry Clean only',
      info: ['Threadwork Appliqué', 'Set of 4', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/2.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/2'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      //   name: 'Brown Oven Napkins and Mitts set',
      //   longName: 'Set of Brown coloured Oven napkins and Square Mitts',
      //   size: '24 x 15 (in inches) – Napkin and 8 x 8 (in inches) – Mitts',
      //   material: 'Cotton',
      //   color: 'Shades of Brown',
      //   // careInstruction: 'Dry Clean only',
      //   info: ['Hand woven and Quilted', 'Set of 4', 'Cotton', 'Washable'],
      //   imageUrl: `${baseUrl}/3.jpg`,
      //   routeUrl: '/table-kitchen/kitchen-oven-accessories/3'
      //   // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
      // }, {
      name: 'Polka Dotted Oven gloves',
      longName: 'Polka Dotted with Red piping Oven gloves',
      size: '11 x 6 (in inches)',
      material: 'Cotton',
      color: 'Light Grey, White and Red',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Set of 2', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/4.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/4'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Green checkered Oven gloves',
      longName: 'Shades of Green Checkered Oven Gloves',
      size: '13 x 6 (in inches)',
      material: 'Cotton',
      color: 'Shades of Green',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Single Piece', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/5.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/5'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Kitchen words oven gloves',
      longName: 'Kitchen Words White hand gloves with black inner lining',
      size: '13 x 6 (in inches)',
      material: 'Cotton',
      color: 'Multicoloured',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Set of 2', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/6.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/6'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Green Gingham checks oven gloves',
      longName: 'Light olive Green Gingham checks Oven gloves',
      size: '13.5 x 6 (in inches)',
      material: 'Cotton',
      color: 'Olive Green',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Single Piece', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/7.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/7'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Baby print oven gloves',
      longName: 'Baby print light green, blue and gray Oven gloves',
      size: '12 x 6 (in inches)',
      material: 'Cotton',
      color: 'Light Green, Blue and Gray',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Single Piece', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/8.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/8'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'White Paisley oven gloves',
      longName: 'White paisley printed oven gloves on dull olive green base',
      size: '13.5 x 6 (in inches)',
      material: 'Cotton',
      color: 'Dull Olive green',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Single Piece', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/9.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/9'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Checkered Oven gloves',
      longName: 'White Checkered Oven Gloves',
      size: '13.5 x 6.5 (in inches)',
      material: 'Cotton',
      color: 'White',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Single Piece', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/10.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/10'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Lettered Oven gloves',
      longName: 'Monochromatic Lettered Oven gloves',
      size: '10 x 6 (in inches)',
      material: 'Cotton',
      color: 'White and Black',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Set of 2', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/11.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/11'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Black oven gloves',
      longName: 'Plain Black Oven Gloves',
      size: '12 x 6 (in inches)',
      material: 'Cotton',
      color: 'Black',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Single Piece', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/12.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/12'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Porcupine oven gloves',
      longName: 'Black Porcupine printed Oven gloves',
      size: '12 x 6 (in inches)',
      material: 'Cotton',
      color: 'Black',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Single Piece', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/13.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/13'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Blue Square mitts',
      longName: 'Cobalt Blue Square shaped Oven Mitts',
      size: '8 x 8 (in inches)',
      material: 'Cotton',
      color: 'Cobalt Blue',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Set of 2', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/14.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/14'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Light Gray Square Mitts',
      longName: 'Light Gray Metal ring Square Oven Mitts',
      size: '9 x 9 (in inches)',
      material: 'Cotton',
      color: 'Light Gray',
      // careInstruction: 'Dry Clean only',
      info: ['Quilted', 'Metal Ring hanging', 'Single Piece', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/15.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/15'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Brown oven napkins',
      longName: 'Checkered shades of Brown Oven Napkins',
      size: '24 x 15 (in inches)',
      material: 'Cotton',
      color: 'Shades of Brown',
      // careInstruction: 'Dry Clean only',
      info: ['Hand woven', '2 in a set', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/16.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/16'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }, {
      name: 'Multicolored oven napkins',
      longName: 'Checkered Multicolored table napkins',
      size: '24 x 15 (in inches)',
      material: 'Cotton',
      color: 'Multicolored',
      // careInstruction: 'Dry Clean only',
      info: ['Hand woven', '2 in a set', 'Cotton', 'Washable'],
      imageUrl: baseUrl + '/17.jpg',
      routeUrl: '/table-kitchen/kitchen-oven-accessories/17'
      // description: 'Bringing the quote “you always have my back” to reality, these cats showcase love and care. The vivid deep pink colour serves to be an ideal background for the striking cat couple.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/table-kitchen/table-linens', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Table-Linen';

  var data = {
    collectionName: 'Table Linens',
    category: 'Table & Kitchen',
    data: [{
      name: 'Lemon Yellow Table Linens',
      longName: 'Lemon Yellow cotton table linen with printed flower lace',
      size: '80 x 54 (in inches)',
      material: 'Hand woven cotton',
      color: 'Lemon Yellow',
      careInstruction: 'Washable',
      info: ['Hand woven cotton', 'Contemporary', 'Floral printed lace', 'Washable'],
      imageUrl: baseUrl + '/1.jpg',
      routeUrl: '/table-kitchen/table-linens/1',
      description: 'This elegant hand woven table linen makes a welcome addition to your dining room. The lemon yellow surface with the use of a crème coloured floral base lace announces a ratified style.'
    }, {
      name: 'Small multicoloured flower linen',
      longName: 'Small multicoloured flower linen with paisley side borders',
      size: '58 x 42 (in inches)',
      material: 'Cotton',
      color: 'Multicoloured on White',
      careInstruction: 'Washable',
      info: ['Cotton', 'Contemporary', 'Paisley border', 'Washable'],
      imageUrl: baseUrl + '/2.jpg',
      routeUrl: '/table-kitchen/table-linens/2',
      description: 'Printed cotton gets the queenly treatment in this piece with the use of an array of paisley border used on this dining table linen. This combination makes it very regal and stylish.'
    }, {
      name: 'Flower embroidered table linen',
      longName: 'Glass table top linen consisting of Embroidered and printed combination of flowers',
      size: '88 x 40 (in inches)',
      material: 'Cotton',
      color: 'Multicoloured',
      careInstruction: 'Washable',
      info: ['Cotton', 'Flower Embroidery', 'Contemporary', 'Washable'],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/table-kitchen/table-linens/3',
      description: 'Inspired by floral designs, this is contemporary designer’s table top linen that invokes comfort and style. This unique linen, transforms your space with its stunning charm.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/table-kitchen/table-napkins', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Table-Napkins';

  var data = {
    collectionName: 'Table Napkins',
    category: 'Table & Kitchen',
    data: [{
      name: 'Indigo dyed Floral Napkins',
      longName: 'Half flower full sequined heavy work Tassar cushion',
      size: '18 x 18 (in inches)',
      material: 'Cotton',
      color: 'Indigo Blue',
      careInstruction: 'Washable',
      info: ['Cotton', 'Indigo dyed', 'Floral print', 'Set of 6 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/1.jpg',
      altImages: [baseUrl + '/1a.jpg'],
      routeUrl: '/table-kitchen/table-napkins/1',
      description: 'This Indigo dyed napkins brought to you Karomi, brings to you a set of floral printed napkins outlined by black and blue. This set adds an exotic touch to your dining.'
    }, {
      name: 'Cross Stitch Napkins',
      longName: 'Cross Stitch floral arc Napkins',
      size: '14 x 14 (in inches)',
      material: 'Cotton',
      color: 'Shades of Blue, Green and Red on White',
      careInstruction: 'Washable',
      info: ['Cotton', 'Cross Stitch', 'Floral arc', 'Set of 5 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/2.jpg',
      altImages: [baseUrl + '/2a.jpg'],
      routeUrl: '/table-kitchen/table-napkins/2',
      description: 'This Indigo dyed napkins brought to you Karomi, brings to you a set of floral printed napkins outlined by black and blue. This set adds an exotic touch to your dining.'
    }, {
      name: 'Hand Embroidered Floral bunch Napkins',
      longName: 'Hand Embroidered Flower Bunch napkins with Orange and Green outline',
      size: '10 x 10 (in inches)',
      material: 'Cotton Tissue',
      color: 'Purple, Orange, Yellow and Green on White',
      careInstruction: 'Washable',
      info: ['Cotton Tissue', 'Embroidered Flowers', 'Set of 2 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/table-kitchen/table-napkins/3',
      description: 'Inspired by flora, this embroidered napkin set is sure to add a modern mystic and exotic touch to your dining table.'
    }, {
      name: 'Checkered cutlery embroidered napkins',
      longName: 'Fork, Knife and Spoon thread embroidered checkered table napkins',
      size: '12 x 12 (in inches)',
      material: 'Cotton',
      color: 'Colorful',
      careInstruction: 'Washable',
      info: ['Cotton', 'Checkered', 'Hand embroidered', 'Set of 9 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/4.jpg',
      routeUrl: '/table-kitchen/table-napkins/4',
      description: 'This thread embroidered checkered table napkins set is a must have. These napkins bring a very stylish and customized look to your table.'
    }, {
      name: 'Checkered and Striped Napkins',
      longName: 'Small checkered and striped napkins with matching piping on all sides',
      size: '16 x 16 (in inches)',
      material: 'Hand Woven Casement Cotton',
      color: 'Light and Rust Orange, Red and Blue',
      careInstruction: 'Washable',
      info: ['Hand Woven Cotton', 'Checkered and Striped', 'Set of 16 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/5.jpg',
      routeUrl: '/table-kitchen/table-napkins/5',
      description: 'This neutral tone striped and checkered napkins have been cleverly worked upon to create a texture. Introduction of matching piping on all sides adds glamour to these stunning table napkins set.'
    }, {
      name: 'Eat Quotes Napkins set',
      longName: 'Eat quotes purple and light lemon yellow napkins with side tassels',
      size: '12 x 12 (in inches)',
      material: 'Cotton',
      color: 'Light lemon Yellow and Purple',
      careInstruction: 'Washable',
      info: ['Cotton', 'Embroidered Quotes', 'Tassels', 'Set of 9 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/6.jpg',
      routeUrl: '/table-kitchen/table-napkins/6',
      description: 'This contrast dual coloured hand embroidered napkins set adds energy to any table and bring a dull space come alive instantaneously. These quotes are hand embroidered and tassels are added on all sides to add glamour to this unique collection of napkins.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/table-kitchen/table-placemats', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Table-Placemats';

  var data = {
    collectionName: 'Table Placemats',
    category: 'Table & Kitchen',
    data: [{
      name: 'Geometric Pattern Plastic Mats',
      longName: 'Plastic Geometric Rectangle Mats',
      size: '17 x 13 (in inches)',
      material: 'Plastic',
      color: 'Shades of Gray',
      careInstruction: 'Washable',
      info: ['Plastic', 'Geometric', 'Set of 6 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/1.jpg',
      routeUrl: '/table-kitchen/table-placemats/1',
      description: 'Add more style to your dining experience by including these stylish table mats. These plastic table mats seamlessly defines your dining experience and enhances the overall look your home decor.'
    }, {
      name: 'Floral Dining Table mats',
      longName: 'Corded Cotton Floral Embroidered Rectangular Table Mats',
      size: '18.5 x 13 (in inches)',
      material: 'Corded Cotton',
      color: 'Shades of Pink and Green on Beige',
      careInstruction: 'Washable',
      info: ['Corded Cotton', 'Hand Embroidered', 'Floral', 'Set of 6 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/2.jpg',
      routeUrl: '/table-kitchen/table-placemats/2',
      description: 'The perfect companion to the dining table is this corded cotton floral mat set. They not only fulfill your desire but also are very subtle and fit into any colour of table linens.'
    }, {
      name: 'Sequin work dining table mats',
      longName: 'Sequin work dining table place mats',
      size: '17.5 x 10.5 (in inches)',
      material: 'Jacquard woven fabric and Cotton',
      color: 'Black and Gold',
      careInstruction: 'Dry clean only',
      info: ['Sequin work', 'Bling', 'Set of 4 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/table-kitchen/table-placemats/3',
      description: 'Our luxurious sequin dining table mat sets are uniquely stylish. They provide comfort along with bling and style to your table.'
    }, {
      name: 'Turquoise blue floral dining table mat',
      longName: 'Floral Turquoise blue sequenced and thread embroidered side table mat',
      size: '16 x 15 (in inches)',
      material: 'Georgette and Shimmer',
      color: 'Turquoise Blue',
      careInstruction: 'Dry clean only',
      info: ['Sequin work', 'Thread Embroidery', 'Bling', 'Single Piece', 'Contemporary'],
      imageUrl: baseUrl + '/4.jpg',
      routeUrl: '/table-kitchen/table-placemats/4',
      description: 'This dramatic and textured side table mat gives a focal point in your living area. The colour turquoise is very soothing and hence this is what make it a must have.'
    }, {
      name: 'Deep pink and red side table mat',
      longName: 'Deep Pink and Red Floral beaded side table mat',
      size: '13 x 13 (in inches)',
      material: 'Net and Shimmer',
      color: 'Deep Pink and Red',
      careInstruction: 'Dry clean only',
      info: ['Beads embroidery', 'Bling', 'Single Piece', 'Contemporary'],
      imageUrl: baseUrl + '/5.jpg',
      routeUrl: '/table-kitchen/table-placemats/5',
      description: 'This mat is a grand plethora of vivid surface ornamentation and metallic shimmer fabric which gives a wide array of worldly flair and elegance to your side table.'
    }, {
      name: 'Blue chain embroidered floral side table mat',
      longName: 'Chains and beads embroidered Blue floral side table mat',
      size: '15 x 13.5 (in inches)',
      material: 'Net and Shimmer',
      color: 'Blue and Black',
      careInstruction: 'Dry clean only',
      info: ['Beads embroidery', 'Chain Embroidery', 'Bling', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/6.jpg',
      routeUrl: '/table-kitchen/table-placemats/6',
      description: 'Add warmth and Luxury to your living area by the use of this blingy side table mat.  This mat adds shine, uniqueness and color to your home décor.'
    }, {
      name: 'Embroidered Horizontal lines side table mat',
      longName: 'Sequin and straw pipe embroidered horizontal lines side table mat',
      size: '17.5 x 14 (in inches)',
      material: 'Georgette and Shimmer',
      color: 'Ruby Pink',
      careInstruction: 'Dry clean only',
      info: ['Straw pipe embroidery', 'Sequin Embroidery', 'Bling', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/7.jpg',
      routeUrl: '/table-kitchen/table-placemats/7',
      description: 'Straight lines are the way to fine geometry. The sequin and straw pipes dresses the mat in a contemporary style. This mat brings vibrancy with subtlety to your living.'
    }, {
      name: 'Blue embroidered floral side table mat',
      longName: 'Blue Sequin and straw pipe embroidered floral side table mat',
      size: '12.5 x 14 (in inches)',
      material: 'Georgette and Shimmer',
      color: 'Blue',
      careInstruction: 'Dry clean only',
      info: ['Straw pipe embroidery', 'Sequin Embroidery', 'Bling', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/8.jpg',
      routeUrl: '/table-kitchen/table-placemats/8',
      description: 'Fine craftsmanship peeps through the detailed embroidery of this side table mat. Enjoy the glimmer of this floral design on a stunning shimmer base.'
    }, {
      name: '5 paise embroidered Zari mats',
      longName: '5 paise silver coins embroidered with zari thread on a black base mat set',
      size: '20 x 10 (in inches) – 1 piece and 8 x 8 (in inches) – 2 pieces',
      material: 'Raw Silk',
      color: 'Black and Silver',
      careInstruction: 'Dry clean only',
      info: ['5 paise silver coins', 'Zari Embroidery', 'Bling', 'Set of 3', 'Contemporary'],
      imageUrl: baseUrl + '/9.jpg',
      routeUrl: '/table-kitchen/table-placemats/9',
      description: 'Our personal favorite, this pretty and minimalist 5 paise embroidered mat set is a contemporary design that brings elegance and a luxurious bling to your home. These mats best goes with silverware and dresses up the dining on special occasions.'
    }, {
      name: 'Floral Scuba square coaster mats',
      longName: 'Orange floral scuba with pearl hangings coaster mats',
      size: '8 x 8 (in inches)',
      material: 'Printed Scuba',
      color: 'Shades of Orange, Blue and White',
      careInstruction: 'Dry clean only',
      info: ['Pearl hangings', 'Floral Scuba', 'Coaster Mats', 'Set of 6', 'Contemporary'],
      imageUrl: baseUrl + '/10.jpg',
      routeUrl: '/table-kitchen/table-placemats/10',
      description: 'The use of printed floral scuba and pearl embroidery creates a striking effect. A floral print onto a bright orange scuba creates a play of light & texture that is beautiful to take in.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/table-kitchen/table-runners', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Table-Runners';

  var data = {
    collectionName: 'Table Runners',
    category: 'Table & Kitchen',
    data: [{
      name: 'Coconut sticks Runner',
      longName: 'Coconut sticks table Runner with zari lace ornamentation',
      size: '39 x 15 (in inches)',
      material: 'Coconut sticks',
      color: 'Deep Apricot',
      careInstruction: 'Dry Clean only',
      info: ['Coconut sticks', 'Zari lace ornamentation', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/1.jpg',
      routeUrl: '/table-kitchen/table-runners/1',
      description: 'This coconut stick mat is a textured perfection that flaunts a unique home trend. The lace added to the runner adds a very stylish dimension.'
    }, {
      name: 'Deep apricot narrow table runner',
      longName: 'Sequin embroidered deep apricot Narrow table Runner',
      size: '39 x 11 (in inches)',
      material: 'Shimmer and Soft net',
      color: 'Deep Apricot',
      careInstruction: 'Dry Clean only',
      info: ['Sequin and Beads embroidery', 'Hand work', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/2.jpg',
      routeUrl: '/table-kitchen/table-runners/2',
      description: 'This narrow deep apricot coloured runner is a hand embroidered perfection. The use of sequin and beads announces a rarified style.'
    }, {
      name: 'Cream coloured embroidered table runner',
      longName: 'Hawaii cream coloured sequin and beads embroidered table runner',
      size: '39.5 x 15.5 (in inches)',
      material: 'Shimmer and Georgette',
      color: 'Hawaii Cream',
      careInstruction: 'Dry Clean only',
      info: ['Sequin and Beads embroidery', 'Hand work', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/table-kitchen/table-runners/3',
      description: 'With the use of Modern floral embroidery, this runner gets its unique look through an intriguing pattern developed with use of sequin and beads. This runner creates a stunning play of texture and colour.'
    }, {
      name: 'Sunflower table runner',
      longName: 'Hand painted sunflower with sequin embroidery and tassels Runner',
      size: '60 x 11 (in inches)',
      material: 'Cotton Casement',
      color: 'Shades of Yellow and light Green on White',
      careInstruction: 'Dry Clean only',
      info: ['Sequin embroidery', 'Resham tassels', 'Hand painted', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/4.jpg',
      routeUrl: '/table-kitchen/table-runners/4',
      description: 'The art of hand painting makes this Karomi sunflower runner a favorite piece.  Sunflower highlight with sequin makes this runner a very unique and a must have.'
    }, {
      name: 'Floral sienna coloured table runner',
      longName: 'Bead work floral Sienna coloured runner',
      size: '33.5 x 15 (in inches)',
      material: 'Soft net and Shimmer',
      color: 'Sienna Brown',
      careInstruction: 'Dry Clean only',
      info: ['Beads embroidery', 'Hand embroidered', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/5.jpg',
      routeUrl: '/table-kitchen/table-runners/5',
      description: 'Inspired by floral designs, this is a contemporary designer runner that invokes style. This unique runner transforms your dining with its stunning charm.'
    }, {
      name: 'Rust orange cutwork table runner',
      longName: 'Bead work and cutwork rust orange table runner',
      size: '39 x 15 (in inches)',
      material: 'Georgette, Net and Shimmer',
      color: 'Rust Orange',
      careInstruction: 'Dry Clean only',
      info: ['Beads embroidery', 'Hand embroidered', 'Cutwork', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/6.jpg',
      routeUrl: '/table-kitchen/table-runners/6',
      description: 'Great artwork comes alive through the asymmetric patterns of this runner. The pattern and cutwork on the rust orange base gives a very vivid design.'
    }, {
      name: 'Tan coloured 3D flowers Runner',
      longName: '3D Flowers and Beads embroidered tan coloured Net Runner',
      size: '53 x 15 (in inches)',
      material: 'Net and Shimmer',
      color: 'Tan',
      careInstruction: 'Dry Clean only',
      info: ['Beads embroidery', 'Hand embroidered', '3D Flowers', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/7.jpg',
      routeUrl: '/table-kitchen/table-runners/7',
      description: 'Fine craftsmanship peeps through the detailed embroidery and the use of 3D flowers in this runner. The net flowers form a soft texture in this tan coloured base.'
    }, {
      name: 'Aqua Blue floral Runner',
      longName: 'Blue coloured flower hand embroidered runner',
      size: '57 x 15.5 (in inches)',
      material: 'Shimmery Net and Linen',
      color: 'Aqua Blue',
      careInstruction: 'Dry Clean only',
      info: ['Beads embroidery', 'Hand embroidered', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/8.jpg',
      routeUrl: '/table-kitchen/table-runners/8',
      description: 'This runner is an aqua blue subtle coloured and hand embroidered perfection that comprises of floral motif. This elegant runner announces your rarified style.'
    }, {
      name: 'Aqua Blue asymmetric runner',
      longName: 'Aqua Blue coloured asymmetric flower beads embroidered runner',
      size: '39.5 x 15 (in inches)',
      material: 'Shimmery Cotton and Georgette',
      color: 'Aqua Blue',
      careInstruction: 'Dry Clean only',
      info: ['Beads embroidery', 'Hand embroidered', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/9.jpg',
      routeUrl: '/table-kitchen/table-runners/9',
      description: 'Consisting of asymmetric patterned flowers, this runner is of contemporary style. Hand embroidered with contrasting beads, this aqua blue runner is the pick of the season for your table.'
    }, {
      name: 'Sienna Floral pattern beaded Runner',
      longName: 'Floral Beaded and Cutwork patterned sienna colored Shimmery Net Runner',
      size: '57 x 14 (in inches)',
      material: 'Shimmery Hard Net and Chiffon',
      color: 'Sienna',
      careInstruction: 'Dry Clean only',
      info: ['Beads embroidery', 'Hand embroidered', 'Cutwork', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/10.jpg',
      routeUrl: '/table-kitchen/table-runners/10',
      description: 'A floral motif has been re-cast on chiffon in this embroidered table runner. Breathtaking neat placement and use of net brings out a stunning pattern and texture in this piece.'
    }, {
      name: 'Floral asymmetric brown and cream colored Runner',
      longName: 'Floral asymmetric Beaded and Cutwork patterned brown and cream colored Shimmery Net Runner ',
      size: '35.5 x 15 (in inches)',
      material: 'Shimmer and Georgette',
      color: 'Homestead Brown and Hawaii Cream',
      careInstruction: 'Dry Clean only',
      info: ['Beads embroidery', 'Hand embroidered', 'Cutwork', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/11.jpg',
      routeUrl: '/table-kitchen/table-runners/11',
      description: 'A modern take on flowers, this runner gets its unique look through an intriguing pattern developed with the asymmetric flowers and beads embroidery. This runner dresses your table with understated style.'
    }, {
      name: 'Narrow Hand painted figures Runner',
      longName: 'Hand Painted Dancing figures on white with a light blue back and shimmer border',
      size: '83 x 7 (in inches)',
      material: 'Tissue Cotton',
      color: 'White and Sky blue',
      careInstruction: 'Dry Clean only',
      info: ['Hand Painting', 'Shimmer border', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/12.jpg',
      routeUrl: '/table-kitchen/table-runners/12',
      description: 'This dancing figures hand painted runner containing both male and female is the pick of the season.  This runner shows style and fashion with the use of a shimmer border. This sky blue and white runner brings subtlety to up your living.'
    }, {
      name: 'Sea green lace bordered Table Runner',
      longName: 'Hand woven casement sea green coloured runner bordered with white cotton chemical lace',
      size: '71 x 22 (in inches)',
      material: 'Hand Woven Casement',
      color: 'Sea Green',
      careInstruction: 'Washable',
      info: ['Hand woven', 'Cotton lace', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/13.jpg',
      routeUrl: '/table-kitchen/table-runners/13',
      description: 'Hand woven casement is the starting point of this magnificent Runner. With a white coloured lace on the borders, this piece looks stunning on the table. The surfaces give an ultimate tone on luxury and comfort.'
    }, {
      name: 'Velvet Cutwork Runner',
      longName: 'Velvet diamond shaped cutwork runner with cooper shimmer border',
      size: '34 x 31 (in inches)',
      material: 'Velvet',
      color: 'Dark Purple',
      careInstruction: 'Dry Clean only',
      info: ['Velvet base', 'Cutwork', 'Shimmer border', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/14.jpg',
      routeUrl: '/table-kitchen/table-runners/14',
      description: 'Velvet gets a queenly treatment, with the technique of cutwork on this regal table runner. The metallic signature of cooper piping used on the sides gives a major wanting for this piece.'
    }, {
      name: 'Hand painted leaf Runner',
      longName: 'Hand painted Leaf on white corded cotton Table Runner',
      size: '57 x 16 (in inches)',
      material: 'Corded Cotton',
      color: 'White',
      careInstruction: 'Dry Clean only',
      info: ['Hand painted', 'Corded Cotton', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/15.jpg',
      routeUrl: '/table-kitchen/table-runners/15',
      description: 'This hand painted runner is our favorite and shows a luster of hand craft and skill. The runner gets a modern take with the use of shades of green on white.'
    }, {
      name: 'Floral hand painted and quilted Runner',
      longName: 'Big shaded flower with leaves - hand painted and foam quilted Runner',
      size: '68 x 20 (in inches)',
      material: 'Shimmery Chiffon',
      color: 'Shades of Orange, Brown and Green',
      careInstruction: 'Dry Clean only',
      info: ['Hand painted', 'Foam Quilted', 'Shimmery Chiffon', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/16.jpg',
      altImages: [baseUrl + '/16a.jpg'],
      routeUrl: '/table-kitchen/table-runners/16',
      description: 'This Runner is a textile masterpiece. It is hand painted and hand-quilted to derive perfection. This splendid number announces your rarified style.'
    }, {
      name: 'Hand painted flower appliqué runner',
      longName: 'Hand painted flower appliqué table runner in Brown with side tassels',
      size: '50 x 18.5 (in inches)',
      material: 'Jacquard loom fabric and Raw silk',
      color: 'Saddle Brown and Golden Yellow',
      careInstruction: 'Dry Clean only',
      info: ['Hand painted', 'Thread Tassels', 'Appliqué ', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/17.jpg',
      altImages: [baseUrl + '/17a.jpg'],
      routeUrl: '/table-kitchen/table-runners/17',
      description: 'This Runner is textured with a hand painted flower appliqué. The flower and the base colour create a light and shade quality. This runner can be spread anywhere to create tactile luxury.'
    }, {
      name: '5 paise cutwork Runner',
      longName: '5 paise embroidered Rexin cutwork floral runner',
      size: '62 x 20 (in inches)',
      material: 'Rexin and Raw Silk',
      color: 'Black',
      careInstruction: 'Dry Clean only',
      info: ['5 paise embroidery', 'Cutwork', 'Single piece', 'Contemporary'],
      imageUrl: baseUrl + '/18.jpg',
      routeUrl: '/table-kitchen/table-runners/18',
      description: 'Our personal favorite, this pretty and minimalist 5 paise embroidered Runner is a contemporary design that brings elegance and a luxurious bling to your home. This Runner best goes with silverware.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/routes/table-kitchen/table-sets', ['exports', 'ember', 'karomi-ember/mixins/reset-scroll'], function (exports, _ember, _karomiEmberMixinsResetScroll) {

  var baseUrl = 'assets/img/Products/Table-sets';

  var data = {
    collectionName: 'Table Sets',
    category: 'Table & Kitchen',
    data: [{
      name: 'Tissue napkins and table mat set',
      longName: 'Tissue flower embroidered napkins and table mat set',
      size: '9.5 x 9.5 (in inches) – Napkins – 2 pieces & 19.5 x 13 (in inches) – Mat – 1 piece',
      material: 'Tissue',
      color: 'White',
      careInstruction: 'Washable',
      info: ['Tissue', 'Embroidery', 'Set of 3 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/1.jpg',
      routeUrl: '/table-kitchen/table-sets/1',
      description: 'Decorate your dining table with this subtle and beautiful napkins and mat set. This set will leave your guests marveling. This set is thoughtfully designed to meet your daily use on the table.'
    }, {
      name: 'Tissue napkins and table mat set',
      longName: 'Eri Cotton Floral Coaster Mats and Runner Set',
      size: '8 x 8 (in inches) – Coaster Mats – 5 pieces & 37 x 14 (in inches) – Runner – 1 piece',
      material: 'Eri cotton and Casement',
      color: 'Forest Green and Ochre',
      careInstruction: 'Dry Clean only',
      info: ['Eri Cotton', 'Casement', 'Set of 6 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/2.jpg',
      routeUrl: '/table-kitchen/table-sets/2',
      description: 'This set is a deluxe collection of coaster mats and runner. This is a beautifully crafted set of hand weaving. The poise of this set is certainly going to captivate everyone.'
    }, {
      name: 'Floral Runner and Napkins set',
      longName: 'Brown Floral Runner and Napkins set',
      size: '18 x 18 (in inches) – Napkins – 10 pieces & 49 x 16 (in inches) – Runner – 1 piece',
      material: 'Cotton and Hand loom Jacquard',
      color: 'Brown and Crème',
      careInstruction: 'Washable',
      info: ['Hand Embroidery', 'Set of 11 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/3.jpg',
      routeUrl: '/table-kitchen/table-sets/3',
      description: 'Add warmth to your dining table with our floral Napkins and Runner set. This collection matches with all tableware and adds a new colour to your wide range of dining.'
    }, {
      name: 'Embroidered Floral Runner and Mats set',
      longName: 'Brown floral embroidered runner and mats set',
      size: '15 x 12 (in inches) – Mats – 8 pieces & 44 x 17 (in inches) – Runner – 1 piece',
      material: 'Georgette and Satin',
      color: 'Dark Brown and Black',
      careInstruction: 'Dry Clean only',
      info: ['Embroidery', 'Foam Quilted', 'Set of 9 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/4.jpg',
      routeUrl: '/table-kitchen/table-sets/4',
      description: 'Add drama and texture to your dining with the use of these foam quilted mats and runner set. This set can be beautifully mingled with the decor in your dining room with its subtle and single use of colour.'
    }, {
      name: 'Crème and Black Dotted dining table set',
      longName: 'Crème and Black Dotted dining set consisting of Napkins, Runner and Table Linen',
      size: '78 x 56 (in inches) – Table Linen – 1 piece, 16 x 16 (in inches) – Napkins – 6 pieces & 39 x 10 (in inches) – Runner – 1 piece',
      material: 'Printed Casement',
      color: 'Crème and Black',
      careInstruction: 'Washable',
      info: ['Black and Beige', 'Dotted', 'Set of 8 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/5.jpg',
      routeUrl: '/table-kitchen/table-sets/5',
      description: 'This dining table set runs through the cotton surface in the colour of crème and black, creating light and shade and reflecting its quality fabric. Place it on your table for a spread of tactile luxury.'
    }, {
      name: 'Flower printed runner and side table mats set',
      longName: 'Printed Floral set of a Runner and side Table Mats',
      size: '75 x 28 (in inches) – Runner – 1 piece & 20 x 20 (in inches) – Side Table Mats – 2 pieces',
      material: 'Printed hand loom Jacquard and Raw silk',
      color: 'White with shades of Blue, Yellow and Brown',
      careInstruction: 'Dry Clean only',
      info: ['Floral Printed', 'Cotton Lace Embroidery', 'Set of 3 pieces', 'Contemporary'],
      imageUrl: baseUrl + '/6.jpg',
      routeUrl: '/table-kitchen/table-sets/6',
      description: 'This set consisting of a runner and side table mats instantly brings a jazz up to your room. Multiply your living experience by relishing this blissful and eye-catching exclusively designed set.'
    }]
  };

  exports['default'] = _ember['default'].Route.extend(_karomiEmberMixinsResetScroll['default'], {
    model: function model(params) {
      var id = params.id;
      if (id == 'home') {
        return {
          data: data,
          isProduct: 0
        };
      } else {
        return {
          data: data.data[id - 1],
          isProduct: 1,
          collectionName: data.collectionName
        };
      }
    }
  });
});
define('karomi-ember/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("karomi-ember/templates/404", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nMXnnU3U", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"breadcrumb-section-box\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"special-style special-style-full special-style-semidark col-md-12 col-md-offset-0 pull-right\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"bg-image\"],[\"static-attr\",\"style\",\"background-image:url('assets/img/all/breadcrumb-img.png');\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 pad-top100 pad-bottom100 heading-box\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"heading-breadcrumb box-z text-center\"],[\"flush-element\"],[\"text\",\"404 error\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"clear\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"breadcrumb-box\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"breadcrumb\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"sab-heading-breadcrumb box-z\"],[\"static-attr\",\"href\",\"index.html\"],[\"flush-element\"],[\"text\",\"home\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"heading-wa box-z activ\"],[\"flush-element\"],[\"text\",\"404 error\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pad-bottom80 pad-top80 blog-griad section\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"boxs-404\"],[\"static-attr\",\"style\",\"text-align:center;\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"figure\",[]],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"dark-404\"],[\"static-attr\",\"src\",\"assets/img/all/404.png\"],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"pad-top20 boxs-404-text theme-headdings\"],[\"flush-element\"],[\"text\",\"Page Not Found\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Page you are looking have been deleted or does not exist\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"/\"],[\"static-attr\",\"class\",\"itg-button mar-top20\"],[\"flush-element\"],[\"text\",\"Go Home\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/404.hbs" } });
});
define("karomi-ember/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rvBW9WLK", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"about-page\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/about.hbs" } });
});
define("karomi-ember/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "bua6CRcG", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"karomi-header\"]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"karomi-footer\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/application.hbs" } });
});
define("karomi-ember/templates/collection/block-printed-bedroom-collection", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0Twstede", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/collection/block-printed-bedroom-collection.hbs" } });
});
define("karomi-ember/templates/collection/meditation-area", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hwizAdwu", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/collection/meditation-area.hbs" } });
});
define("karomi-ember/templates/components/about-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "RxbKz/X6", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"breadcrumb-section-box\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"special-style special-style-full special-style-semidark col-md-12 col-md-offset-0 pull-right\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"bg-image\"],[\"dynamic-attr\",\"style\",[\"concat\",[\"background-image:url('\",[\"unknown\",[\"rootURL\"]],\"assets/img/backdrop.jpg');background-position: bottom;\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 pad-top100 pad-bottom100 heading-box\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"heading-breadcrumb box-z text-center\"],[\"flush-element\"],[\"text\",\"About\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"clear\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"breadcrumb-box\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"breadcrumb\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"sab-heading-breadcrumb box-z\"],[\"static-attr\",\"href\",\"index.html\"],[\"flush-element\"],[\"text\",\"home\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"heading-wa box-z activ\"],[\"flush-element\"],[\"text\",\"About\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pad-bottom80 pad-top20 blog-griad\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"comment\",\"//==Sidebar Start==//\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 col-sm-12 col-xs-12 Faqs-box col-md-offset-3\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"figure\",[]],[\"static-attr\",\"class\",\"blog-img-section\"],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"figcaption\",[]],[\"static-attr\",\"class\",\"blog-text-section\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"theme-headdings pad-top20\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"The Label\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 pad-top20 blog-paragraph-text\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Noopur Mundra, the Founder and Designer started the label “Karomi” in September, 2016. In this short span of time, Karomi has won many customers because of its Goodwill, Quality, Loyalty, Exclusivity and Dedication towards its work. It has made a mark in the retail sector with its beautiful and intricate hand embellished and hand embroidered home improvement furnishings. The brand is essentially a soft furnishing design house that believes in giving its clients the best of everything, be it design, finish or fabric, or even personalized services. The brand does not shy away from anything and has a team of very hardworking Weavers, Tailors and Embroiders. The store is located in Silchar, the hub of Barak Valley in Assam. “Karomi”, widely focuses on the tradition and colours of the North East India. The label is also a great promoter of socially and ethically aware designs. The label happens to be Tradionally active as they have a line of woven home furnishings that is very close to the designer’s heart. \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\" Our Products \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"We create a fascinating range of home improvement furnishings having incomparable beauty and elegance. Furthermore, we also acquaint the buyers with an exciting array of contemporary and tradional products which certainly help in adorning homes. The fabrics that are worked on are either hand woven or embroidered. Other than the products showcased, we also deal in Duvet Covers, Bed Spread Sheets, Bed Covers, Pillow Cases, Pillow Shams, Bolster Covers, Curtains and other customized home décor accessories. \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Our Quality\"],[\"close-element\"],[\"text\",\" \\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"We ensure quality services and timely delivery to the buyers. We also apply the most effective and customer centric approach. In Karomi, we believe that tradition is maintained by Quality. There is a comprehensive and sophisticated system of Quality Control and strict vigil is maintained at every stage. There are regular rounds and inspection by the founder and designer to improve all shortcomings. \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Our Workplace \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"The main office is also the store for Karomi and is located at Club Road - Near HDFC Bank, Silchar,  Assam – 788001 \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Our Strengths\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"The Cost effective Production Techniques ensure the Customers of impeccable quality products at reasonable prices.\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"The Wide Distribution Network and excellent transport facility ensure the customers of safe, sound and prompt delivery of products.\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"We go by the tread and boast a fine infrastructure store and excellent team of skilled craftsmen to serve the customers with the best products.\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"We have very professional and skilled Tailors and Karigars who ensure to deliver the best in every piece of workmanship. \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 col-xs-12 pad-top20 blog-paragraph-text\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4 col-sm-6 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"figure\",[]],[\"static-attr\",\"class\",\"blog-img-section\"],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"assets/img/founder.jpg\"]]],[\"static-attr\",\"alt\",\"\"],[\"static-attr\",\"style\",\"max-height: 300px; width: auto;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"figcaption\",[]],[\"static-attr\",\"class\",\"blog-text-section\"],[\"flush-element\"],[\"text\",\"\\n                                    \\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8 col-sm-6 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                                 \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"theme-headdings\"],[\"flush-element\"],[\"text\",\"Noopur Mundra\"],[\"close-element\"],[\"text\",\"\\n                                 \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Founder and Designer at Karomi\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Fascinated by the colours and the tribes of the North-East India, she started her carrier as a Designer and pursued her dreams by joining NIFT, Kolkata. She is a Textile Design graduate and also holds an award for the best Graduation collection of NIFT, Kolkata - Textile design in 2016.  This success and her dedication to know more about textiles inspired her to start “Karomi”, in September 2016. \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"She spent her formative months closely with the weavers and embroiders and then began to interweave her love for textures, embellishments and fabrics. She also holds work experience in a West Bengal based printing company and an Assam based weaving design house. Here she got the opportunity to design for various well known brands and feels grateful for all the practical experience that she got within the company. \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"This 24 year young and energetic girl closely works with the North east culture to promote the local talent and also to encourage the youth in this sector. \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                                \\n                            \"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 pad-top20 \"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/components/about-page.hbs" } });
});
define("karomi-ember/templates/components/collection-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FAqfTFYW", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"breadcrumb-section-box\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"special-style special-style-full special-style-semidark col-md-12 col-md-offset-0 pull-right\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"bg-image\"],[\"dynamic-attr\",\"style\",[\"concat\",[\"background-image:url('\",[\"unknown\",[\"rootURL\"]],\"assets/img/backdrop.jpg');background-position: bottom;\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 pad-top100 pad-bottom100 heading-box\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"heading-breadcrumb box-z text-center\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"collectionName\"]],false],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"clear\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"breadcrumb-box\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"breadcrumb\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"sab-heading-breadcrumb box-z\"],[\"static-attr\",\"href\",\"/\"],[\"flush-element\"],[\"text\",\"home\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"heading-wa box-z activ\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"category\"]],false],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"comment\",\"//==blog section Start==//\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pad-bottom80 pad-top80 blog-griad\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"collectiongrid\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"products-section\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"page-tool box\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8 col-sm-8 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"page-tool-box padT5\"],[\"flush-element\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                                                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-5 col-sm-7 col-xs-12 marB10 padT5\"],[\"flush-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"viewGrid\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showList\"]],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-th\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"viewList\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showGrid\"]],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-th-list\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Item 1 to \"],[\"append\",[\"unknown\",[\"model\",\"length\"]],false],[\"text\",\" of \"],[\"append\",[\"unknown\",[\"model\",\"length\"]],false],[\"text\",\" items\"],[\"close-element\"],[\"text\",\"\\n                                                    \"],[\"close-element\"],[\"text\",\"\\n                                                    \\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"productsgriads\"],[\"static-attr\",\"class\",\"products mar-top40\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,3],[\"text\",\"                                      \\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"productslist\"],[\"static-attr\",\"class\",\"products list box mar-top30 hide-me\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,1],[\"text\",\"                                        \\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"        \"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                                                    \"],[\"open-element\",\"figure\",[]],[\"static-attr\",\"class\",\"itg-hover-style2\"],[\"flush-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],[\"unknown\",[\"item\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"products-boxes\"],[\"flush-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 col-sm-12 col-xs-12 responsive-top box\"],[\"flush-element\"],[\"text\",\"\\n                                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 col-sm-6 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[[\"helper\",[\"route-fix\"],[[\"get\",[\"item\",\"routeUrl\"]]],null],[\"helper\",[\"route-param\"],[[\"get\",[\"item\",\"routeUrl\"]]],null]],null,0],[\"text\",\"                                                \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 col-sm-6 col-xs-12 box-list-page\"],[\"flush-element\"],[\"text\",\"\\n                                                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pad-bottom10 figure-boxx figure-section-hover\"],[\"flush-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"theme-headdings text-left pad-top10\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"item\",\"routeUrl\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"name\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Price on Demand\"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"per-box\"],[\"flush-element\"],[\"text\",\"\\n                                                            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"description\"]],false],[\"text\",\"\\n                                                            \"],[\"close-element\"],[\"text\",\"\\n                                                        \"],[\"close-element\"],[\"text\",\"\\n                                                    \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"item\"]},{\"statements\":[[\"text\",\"                                            \"],[\"open-element\",\"figure\",[]],[\"static-attr\",\"class\",\"itg-hover-style2\"],[\"flush-element\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],[\"unknown\",[\"item\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"products-boxes\"],[\"flush-element\"],[\"text\",\"\\n                                                    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"icon-hover\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"text\",\"                                                    \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"open-element\",\"figcaption\",[]],[\"static-attr\",\"class\",\" figure-boxx figure-section-hover\"],[\"flush-element\"],[\"text\",\"\\n                                                    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"theme-headdings text-center pad-top10\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"item\",\"routeUrl\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"name\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                                \"],[\"close-element\"],[\"text\",\"\\n                                            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3 col-sm-3 col-xs-12 product-item\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[[\"helper\",[\"route-fix\"],[[\"get\",[\"item\",\"routeUrl\"]]],null],[\"helper\",[\"route-param\"],[[\"get\",[\"item\",\"routeUrl\"]]],null]],null,2],[\"text\",\"                                        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"item\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/components/collection-page.hbs" } });
});
define("karomi-ember/templates/components/contact-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4JiBvekr", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"breadcrumb-section-box\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"special-style special-style-full special-style-semidark col-md-12 col-md-offset-0 pull-right\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"bg-image\"],[\"dynamic-attr\",\"style\",[\"concat\",[\"background-image:url('\",[\"unknown\",[\"rootURL\"]],\"assets/img/backdrop.jpg');background-position: bottom;\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 pad-top100 pad-bottom100 heading-box\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"heading-breadcrumb box-z text-center\"],[\"flush-element\"],[\"text\",\"Contact Us\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"clear\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"breadcrumb-box\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"breadcrumb\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"sab-heading-breadcrumb box-z\"],[\"static-attr\",\"href\",\"index.html\"],[\"flush-element\"],[\"text\",\"home\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"heading-wa box-z activ\"],[\"flush-element\"],[\"text\",\"Contact\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"blog-griad\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"message-box-sec1 pad-top80 pad-bottom80\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 col-sm-6 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"theme-headdings\"],[\"flush-element\"],[\"text\",\"Our Location\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"map-box pad-top30\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"iframe\",[]],[\"static-attr\",\"src\",\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9902108023675!2d92.79813801484516!3d24.830008384068236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4a5f9f3093ad%3A0xcf0c4af37cf4b363!2sClub+Rd%2C+Tarapur%2C+Silchar%2C+Assam+788001!5e0!3m2!1sen!2sin!4v1501407088214\"],[\"static-attr\",\"width\",\"600\"],[\"static-attr\",\"height\",\"465\"],[\"static-attr\",\"frameborder\",\"0\"],[\"static-attr\",\"style\",\"border:0\"],[\"static-attr\",\"allowfullscreen\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 col-sm-6 col-xs-12 siad-bar-sec\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"theme-headdings\"],[\"flush-element\"],[\"text\",\"Leave Us Message\"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row pad-top25\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 col-xs-12 Profile setting box\"],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"First Name\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"search_terms\",\"\",[\"get\",[\"firstName\"]]]]],false],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Email Address\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"email\",\"search_terms\",\"\",[\"get\",[\"emailId\"]]]]],false],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Phone\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"search_terms\",\"\",[\"get\",[\"phoneNumber\"]]]]],false],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Message\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"cols\",\"rows\",\"placeholder\",\"id\",\"class\",\"name\",\"value\"],[\"10\",\"5\",\"\",\"order_comments\",\"form-controller search_terms\",\"order_comments\",[\"get\",[\"bodyMessage\"]]]]],false],[\"text\",\"\\n                                    \"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[\"mailto:contact@karomi.in?subject=Contact Enquiry&body=\",[\"unknown\",[\"contactBody\"]]]]],[\"flush-element\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"itg-button mar-top20\"],[\"flush-element\"],[\"text\",\"Send Message\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row pad-bottom80\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4 col-sm-4 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"contact-loction-box\"],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"loction-icon-box\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-map-marker\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"theme-headdings text-center address-title\"],[\"flush-element\"],[\"text\",\"Store\"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Club Road - Near HDFC Bank,\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" Silchar,  Assam – 788001\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4 col-sm-4 col-xs-12 responsive-top\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"contact-loction-box\"],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"loction-icon-box\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-rocket\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"theme-headdings text-center address-title\"],[\"flush-element\"],[\"text\",\"Main Office\"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Club Road - Near HDFC Bank,\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\" Silchar,  Assam – 788001\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4 col-sm-4 col-xs-12 responsive-top\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"contact-loction-box\"],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"loction-icon-box\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-envelope\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"theme-headdings text-center address-title\"],[\"flush-element\"],[\"text\",\"Get in Touch\"],[\"close-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"contact@karomi.in\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"+91 - 94355 53333\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/components/contact-page.hbs" } });
});
define("karomi-ember/templates/components/index-shim", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "WAMYl0R4", "block": "{\"statements\":[[\"text\",\"   \"],[\"comment\",\"//===product-items-section Start==//\"],[\"text\",\"\\n  \"],[\"open-element\",\"section\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"product-items-section pad-bottom80 pad-top40\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"style\",\"text-align:center;\"],[\"static-attr\",\"class\",\"pad-top20 pad-bottom20\"],[\"flush-element\"],[\"text\",\"Karomi, the design house based in North East India, \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"brings to you a wide range of creative, custom made \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"and hand crafted home improvement furnishings.\\n              \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"headding-box mar-bottom40\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"theme-headdings\"],[\"flush-element\"],[\"text\",\"Popular items\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"product-items-slider\"],[\"static-attr\",\"class\",\"owl-carousel owl-theme\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"products\"]]],null,4],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"comment\",\"//===product-items-section End==//\"],[\"text\",\"\\n  \\n  \"],[\"comment\",\"//===banner-section Start==//\"],[\"text\",\"\\n  \"],[\"open-element\",\"section\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"banner-section\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"special-style special-style-full special-style-semidark col-md-12 col-md-offset-0 pull-right\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"bg-image\"],[\"static-attr\",\"style\",\"background-image:url('assets/img/slider/banner1.jpg');\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container pad-top-bottom130\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"banner-text-box\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"Show your Home Some Love\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Flat 10% off on Couple Cushions\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"cushions.couple-cushions\",\"home\"],[[\"class\"],[\"itg-button mar-top20\"]],2],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"comment\",\"//===banner-section End==//\"],[\"text\",\"\\n  \"],[\"comment\",\"//===Categories-section Start==//\"],[\"text\",\"\\n  \"],[\"open-element\",\"section\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"Categories-box pad-top80 pad-bottom80\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"headding-box\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"theme-headdings\"],[\"flush-element\"],[\"text\",\"Our Categories\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"Categories-blog pad-top40\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"collections\"]]],null,1],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"comment\",\"//===Categories-section End==//\"],[\"text\",\"\\n \\n  \\n  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                   View Shop\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3 col-sm-6 col-xs-12 pad-bottom30\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"figure\",[]],[\"static-attr\",\"class\",\"itg-hover-style1\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],[\"unknown\",[\"item\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"figcaption\",[]],[\"static-attr\",\"class\",\"pad-bottom10 figure-boxx cotegories\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"theme-headdings text-center\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"collectionName\"]],false],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"View the collection\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"categorie-text-box\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"collection-list-sidebar.html\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"collectionName\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[[\"helper\",[\"route-fix\"],[[\"get\",[\"item\",\"routeUrl\"]]],null],\"home\"],[[\"class\"],[\"itg-button mar-top20\"]],0],[\"text\",\"                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"item\"]},{\"statements\":[[\"text\",\"          Shop Now\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"item\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"figure\",[]],[\"static-attr\",\"class\",\"itg-hover-style2\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"product\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"products-boxes\"],[\"flush-element\"],[\"text\",\"\\n                    \\n                  \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"figcaption\",[]],[\"static-attr\",\"class\",\" figure-boxx figure-section-hover\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"theme-headdings text-center pad-top10\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"product\",\"routeUrl\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"product\",\"name\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[[\"helper\",[\"route-fix\"],[[\"get\",[\"product\",\"routeUrl\"]]],null],[\"helper\",[\"route-param\"],[[\"get\",[\"product\",\"routeUrl\"]]],null]],null,3]],\"locals\":[\"product\"]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/components/index-shim.hbs" } });
});
define("karomi-ember/templates/components/karomi-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GWVcoDJi", "block": "{\"statements\":[[\"open-element\",\"footer\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"footer-main-section\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row pad-top40 pad-bottom20\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3 col-sm-6 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"footer-section1\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"footer-head-line\"],[\"flush-element\"],[\"text\",\"About us\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Karomi, the design house based in North East India, brings to you a wide range of creative, custom made and hand crafted home improvement furnishings.\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"text-box\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-envelope-o\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"mailto:contact@karomi.in\"],[\"flush-element\"],[\"text\",\"contact@karomi.in\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-phone\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"tel:+919435553333\"],[\"flush-element\"],[\"text\",\"94355 53333\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-map-marker\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\" Club Road, Silchar,  Assam – 788001\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3 col-sm-6 col-xs-12 responsive-top\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"footer-section2\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"footer-head-line\"],[\"flush-element\"],[\"text\",\"Cushions\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"footer-box2 pad-top15\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.couple-cushions\",\"home\"],null,14],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.cushion-sets\",\"home\"],null,13],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.decor-metallic-cushions\",\"home\"],null,12],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.kids-cushions\",\"home\"],null,11],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.pair-cushions\",\"home\"],null,10],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.theme-cushions\",\"home\"],null,9],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3 col-sm-6 col-xs-12 responsive-top\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"footer-section2\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"footer-head-line\"],[\"flush-element\"],[\"text\",\"Table & Kitchen\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"footer-box2 pad-top15\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.kitchen-oven-accessories\",\"home\"],null,8],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.table-linens\",\"home\"],null,7],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.table-napkins\",\"home\"],null,6],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.table-placemats\",\"home\"],null,5],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.table-runners\",\"home\"],null,4],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.table-sets\",\"home\"],null,3],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-3 col-sm-6 col-xs-12 responsive-top\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"footer-section2\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"footer-head-line\"],[\"flush-element\"],[\"text\",\"Collection\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"footer-box2 pad-top15\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"collection.meditation-area\",\"home\"],null,2],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"collection.block-printed-bedroom-collection\",\"home\"],null,1],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"footer-section2\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"footer-head-line\"],[\"flush-element\"],[\"text\",\"Other\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"footer-box2 pad-top15\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"block\",[\"link-to\"],[\"cross-stitch-frames\",\"home\"],null,0],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"footer-bottom-bar pad-top-bottom25\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Copyright © 2017 Karomi - All Rights Reserved\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Cross Stitch Frames\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Block Printed Bedroom Collection\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Meditation Area\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Table Sets\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Table Runners\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Table Placemats\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Table Napkins\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Table Linens\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Kitchen & Oven Accessories\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Theme Cushions\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Pair Cushions\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Kids Cushions\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Decor and Metallic Cushions\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Cushion Sets\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Couple Cushions\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/components/karomi-footer.hbs" } });
});
define("karomi-ember/templates/components/karomi-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "o8ttYYOg", "block": "{\"statements\":[[\"open-element\",\"header\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"comment\",\"//==preloader Start==//\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"comment\",\"//==preloader End==//\"],[\"text\",\"\\n    \"],[\"comment\",\"//==top bar start==//\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-middle-section\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row pad-top-bottom10 head-top-sec\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 col-sm-5 col-xs-12 \"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"figure\",[]],[\"static-attr\",\"class\",\"logo-box\"],[\"static-attr\",\"style\",\"padding-top: 0;\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],null,17],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 col-sm-7 col-xs-12\"],[\"static-attr\",\"style\",\"padding-top: 12px;\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-bars-icon-section\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4 col-sm-4 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-icons-box1\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-phone\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-icons-box2\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"style\",\"padding-top: 8px;\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"tel:+919435553333\"],[\"flush-element\"],[\"text\",\"94355 53333\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4 col-sm-4 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-icons-box1\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"fa fa-envelope-o\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"top-icons-box2\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"style\",\"padding-top: 8px;\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"mailto:contact@karomi.in\"],[\"flush-element\"],[\"text\",\"contact@karomi.in\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"  \\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"comment\",\"//==mega menu start==//\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"main-menu\"],[\"static-attr\",\"class\",\"wa-main-menu\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"comment\",\" Menu \"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"wathemes-menu relative\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"comment\",\" navbar \"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar navbar-default navbar-bg-dark\"],[\"static-attr\",\"role\",\"navigation\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header pad-top15 pad-bottom15\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"comment\",\" Button For Responsive toggle \"],[\"text\",\"\\n                  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\".navbar-collapse\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                  \\n                  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"navbar-brand hidden-sm hidden-md hidden-lg logo-second\"],[\"static-attr\",\"href\",\"/\"],[\"flush-element\"],[\"text\",\"\\n                                        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"site_logo\"],[\"static-attr\",\"alt\",\"Site Logo\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"assets/img/small-logo.png\"]]],[\"static-attr\",\"height\",\"40\"],[\"static-attr\",\"style\",\"margin: 0 10px;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                                        \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"comment\",\" Navbar Collapse \"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-collapse collapse\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"comment\",\" nav \"],[\"text\",\"\\n                  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"text\",\"                    \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"block\",[\"link-to\"],[\"about\"],null,16],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Cushions\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown-menu\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.couple-cushions\",\"home\"],null,15],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.cushion-sets\",\"home\"],null,14],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.decor-metallic-cushions\",\"home\"],null,13],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.kids-cushions\",\"home\"],null,12],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.pair-cushions\",\"home\"],null,11],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"cushions.theme-cushions\",\"home\"],null,10],[\"close-element\"],[\"text\",\"\\n                      \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Collection\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown-menu\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"collection.meditation-area\",\"home\"],null,9],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"collection.block-printed-bedroom-collection\",\"home\"],null,8],[\"close-element\"],[\"text\",\"\\n                      \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Table & Kitchen\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown-menu\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.kitchen-oven-accessories\",\"home\"],null,7],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.table-linens\",\"home\"],null,6],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.table-napkins\",\"home\"],null,5],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.table-placemats\",\"home\"],null,4],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.table-runners\",\"home\"],null,3],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"table-kitchen.table-sets\",\"home\"],null,2],[\"close-element\"],[\"text\",\"\\n                        \"],[\"comment\",\" <li class=\\\"left-side\\\">\\n                          <a href=\\\"#\\\">Single Blog</a>\\n                          <ul class=\\\"dropdown-menu\\\">\\n                            <li><a href=\\\"blog-detail-sidebar.html\\\">With Sidebar</a></li>\\n                            <li><a href=\\\"blog-detail-no-sidebar.html\\\">Without Sidebar</a></li>\\n                          </ul>\\n                        </li> \"],[\"text\",\"\\n                      \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"block\",[\"link-to\"],[\"cross-stitch-frames\",\"home\"],null,1],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"collapseNavbar\"]],[\"flush-element\"],[\"text\",\"\\n                     \"],[\"block\",[\"link-to\"],[\"contact\"],null,0],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"comment\",\" navbar-collapse \"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"comment\",\" col-md-12 \"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"comment\",\" row \"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"comment\",\" container \"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"comment\",\" navbar \"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"comment\",\"  Menu \"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"comment\",\"//==mega menu end==//\"],[\"text\",\"\\n  \"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Contact\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Cross Stitch Frames\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Table Sets\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Table Runners\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Table Placemats\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Table Napkins\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Table Linens\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Kitchen & Oven Accessories\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Block Printed Bedroom Collection\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Meditation Area\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Theme Cushions\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Pair Cushions\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Kids Cushions\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Decor and Metallic Cushions\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Cushion Sets\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Couple Cushions\"]],\"locals\":[]},{\"statements\":[[\"text\",\"About\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"alt\",\"\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"rootURL\"]],\"assets/img/logo.png\"]]],[\"static-attr\",\"height\",\"75\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/components/karomi-header.hbs" } });
});
define("karomi-ember/templates/components/product-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "9sTeCJ71", "block": "{\"statements\":[[\"comment\",\"//==breadcrumb-section Start==//\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"breadcrumb-section-box\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"special-style special-style-full special-style-semidark col-md-12 col-md-offset-0 pull-right\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"bg-image\"],[\"dynamic-attr\",\"style\",[\"concat\",[\"background-image:url('\",[\"unknown\",[\"rootURL\"]],\"assets/img/backdrop.jpg');background-position: bottom;\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 pad-top100 pad-bottom100 heading-box\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"heading-breadcrumb box-z text-center\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"clear\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"breadcrumb-box\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"breadcrumb\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"sab-heading-breadcrumb box-z\"],[\"static-attr\",\"href\",\"index.html\"],[\"flush-element\"],[\"text\",\"home\"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"heading-wa box-z activ\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"collectionName\"]],false],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"blog-griad product\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row pad-bottom40 pad-top80\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-5 col-sm-5 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-10 col-sm-10 col-xs-12 pull-right \"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"figure\",[]],[\"static-attr\",\"class\",\"product-img\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"text\",\"                                    \"],[\"append\",[\"helper\",[\"light-box\"],null,[[\"href\",\"data-lightbox\",\"data-title\"],[[\"helper\",[\"concat\"],[[\"get\",[\"rootURL\"]],[\"get\",[\"model\",\"imageUrl\"]]],null],\"Product Image\",[\"get\",[\"model\",\"longName\"]]]]],false],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-7 col-sm-7 col-xs-12 responsive-top\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"theme-headdings text-left product-detail-title\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"star-box-section left product-det text-left pad-top15\"],[\"flush-element\"],[\"text\",\"\\n                           \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\" Price on Demand \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"clear\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"per-box texy-left mar-top15\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"head-medial-text pad-top10\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Material: \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"Products-in-stock\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"material\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"head-medial-text pad-top10\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Color: \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"Products-in-stock\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"color\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"head-medial-text pad-top10\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Size: \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"Products-in-stock\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"size\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"head-medial-text pad-top10\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Tags :  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"Products-in-stock\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"collectionName\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-7 col-sm-7 product-box-btm-blog row\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[\"mailto:contact@karomi.in?subject=Karomi Product Enquiry&body=Hey, I am interested in buying \",[\"unknown\",[\"model\",\"longName\"]],\", please give me the details\"]]],[\"static-attr\",\"class\",\"itg-button pro btn left mar-top15\"],[\"flush-element\"],[\"text\",\"Buy Now\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8 col-sm-12 col-xs-12 col-md-offset-1 pad-bottom30 pro-detals-post\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"altImages\",\"length\"]]],null,4],[\"text\",\"                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Details\"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 col-sm-12 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n                                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"Profile box text border pad-top20 pad-bottom20\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"description\"]]],null,2],[\"text\",\"                                        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"style\",\"list-style:initial;\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"info\"]]],null,1],[\"text\",\"                                        \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"careInstruction\"]]],null,0],[\"text\",\"                                    \"],[\"close-element\"],[\"text\",\"\\n                                \"],[\"close-element\"],[\"text\",\"\\n                            \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                                        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Care Instruction: \"],[\"append\",[\"unknown\",[\"model\",\"careInstruction\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                                                \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"style\",\"list-style:initial;\"],[\"flush-element\"],[\"append\",[\"get\",[\"info\"]],false],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"info\"]},{\"statements\":[[\"text\",\"                                        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4 col-sm-6 col-xs-12 \"],[\"flush-element\"],[\"text\",\"\\n\"],[\"text\",\"                                    \"],[\"append\",[\"helper\",[\"light-box\"],null,[[\"href\",\"data-lightbox\",\"data-title\"],[[\"helper\",[\"concat\"],[[\"get\",[\"rootURL\"]],[\"get\",[\"image\"]]],null],\"Product Image\",[\"get\",[\"model\",\"longName\"]]]]],false],[\"text\",\"\\n\"],[\"text\",\"                            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"image\"]},{\"statements\":[[\"text\",\"                    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\" More Images \"],[\"close-element\"],[\"text\",\"\\n                        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"altImages\"]]],null,3],[\"text\",\"                        \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/components/product-page.hbs" } });
});
define("karomi-ember/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "H7srtdkx", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"contact-page\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/contact.hbs" } });
});
define("karomi-ember/templates/cross-stitch-frames", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "pnbXiKZ7", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/cross-stitch-frames.hbs" } });
});
define("karomi-ember/templates/cushions/couple-cushions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qJiGVHXr", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/cushions/couple-cushions.hbs" } });
});
define("karomi-ember/templates/cushions/cushion-sets", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "t+cnMknl", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/cushions/cushion-sets.hbs" } });
});
define("karomi-ember/templates/cushions/decor-metallic-cushions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nmR9elPJ", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/cushions/decor-metallic-cushions.hbs" } });
});
define("karomi-ember/templates/cushions/kids-cushions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SEPFBrTW", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/cushions/kids-cushions.hbs" } });
});
define("karomi-ember/templates/cushions/pair-cushions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7y4+Z+kt", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/cushions/pair-cushions.hbs" } });
});
define("karomi-ember/templates/cushions/theme-cushions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NN/8pGtA", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/cushions/theme-cushions.hbs" } });
});
define("karomi-ember/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "IYphtpU/", "block": "{\"statements\":[[\"append\",[\"helper\",[\"index-shim\"],null,[[\"model\"],[[\"get\",[\"model\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/index.hbs" } });
});
define("karomi-ember/templates/table-kitchen/kitchen-oven-accessories", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Ee/unIUQ", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/table-kitchen/kitchen-oven-accessories.hbs" } });
});
define("karomi-ember/templates/table-kitchen/table-linens", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uOUMzin6", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/table-kitchen/table-linens.hbs" } });
});
define("karomi-ember/templates/table-kitchen/table-napkins", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PD/n04h6", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/table-kitchen/table-napkins.hbs" } });
});
define("karomi-ember/templates/table-kitchen/table-placemats", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "D6oXDlh9", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/table-kitchen/table-placemats.hbs" } });
});
define("karomi-ember/templates/table-kitchen/table-runners", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3yKnhjoM", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/table-kitchen/table-runners.hbs" } });
});
define("karomi-ember/templates/table-kitchen/table-sets", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "88RTxver", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isProduct\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"collection-page\"],null,[[\"model\",\"collectionName\",\"category\"],[[\"get\",[\"model\",\"data\",\"data\"]],[\"get\",[\"model\",\"data\",\"collectionName\"]],[\"get\",[\"model\",\"data\",\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"product-page\"],null,[[\"collectionName\",\"model\"],[[\"get\",[\"model\",\"collectionName\"]],[\"get\",[\"model\",\"data\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "karomi-ember/templates/table-kitchen/table-sets.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('karomi-ember/config/environment', ['ember'], function(Ember) {
  var prefix = 'karomi-ember';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("karomi-ember/app")["default"].create({"name":"karomi-ember","version":"0.0.0+a24e8722"});
}

/* jshint ignore:end */
//# sourceMappingURL=karomi-ember.map
