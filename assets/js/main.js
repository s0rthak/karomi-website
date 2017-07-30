/*
 *****************************************************
 *  CUSTOM JS DOCUMENT                              *
 *  Single window load event                        *
 *   "use strict" mode on                           *
 *****************************************************
 */
$(window).on('load', function() {

  "use strict";

  var preLoader = $('.loading');
  // var fancybox = $('.fancybox');
  // var comingsoontimer = $("#coming-soon-timer");
  // var faqs = $('#faq');
  var rangslider = $("#rangslider");
  var showlogin = $('.showlogin');
  var loginDiv = $('.login');
  var showcoupon = $('.showcoupon');
  var checkout_coupon = $('.checkout_coupon');
  var differentAddress = $('#ship-to-different-address-checkbox');
  var shippingFields = $('.shipping-fields');
  var createAccountCheck = $('#createaccount');
  var createAccount = $('.create-account');
  var vSlider = $('.slider8');
  var vSlider1 = $('.slider10');
  var hSlider = $('.slider9');

  /*
  ========================================
  PreLoader On window Load
  ========================================
  */
  if (preLoader.length) {
    preLoader.fadeOut();
  }



  /*
  ========================================
  Coming Soon Setting
  ========================================
  */

  /*
  ========================================
  Price Filter Setting
  ========================================
  */
  if (rangslider.length) {
    rangSliderint();
  }

  /*
  ========================================
  CheckOut Page Setting
  ========================================
  */

  /*
  ========================================
  vertical slider
  ========================================
  */
  // vSlider.bxSlider({
  //   mode: 'vertical',
  //   slideWidth: 300,
  //   minSlides: 3,
  //   slideMargin: 10,
  //   pager: false,
  // });

  // vSlider1.bxSlider({
  //   slideWidth: 200,
  //   minSlides: 4,
  //   maxSlides: 3,
  //   pager: false,
  //   slideMargin: 10,

  // });

  // hSlider.bxSlider({
  //   slideWidth: 300,
  //   minSlides: 3,
  //   slideMargin: 10,
  //   pager: false,
  // });



  /*
========================================
Product Grig list Setting
========================================
*/

});

/*
========================================
Filter
========================================
*/
function rangSliderint() {

  "use strict";

  var sliderRange = $("#slider-range");
  var amounts = $("#amount");

  sliderRange.slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function(event, ui) {
      amounts.val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  amounts.val("$" + sliderRange.slider("values", 0) +
    " - $" + sliderRange.slider("values", 1));

}
