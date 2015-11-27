if (typeof jQuery === 'undefined') {
  throw new Error('Responsive-Tab plugin requires jQuery');
}
(function ($) {
  'use strict';
  var Tabs = {

    init: function() {
      Tabs.bindEvents();
    },

    bindEvents: function() {
      $(document)
        .on("click", "nav a[href^='#']:not('.active')", function(event) {
          Tabs.changeTab(this.hash);
          event.preventDefault();
        })
        .on("click", "nav a.active", function(event) {
          Tabs.toggleMobileMenu(event, this);
          event.preventDefault();
        });
    },

    changeTab: function(hash) {
      var anchor = $("[href=" + hash + "]");
      var div = $(hash);

      anchor.addClass("active").parent().siblings().find("a").removeClass("active");
      div.addClass("active").siblings().removeClass("active");

      // In case of mobile, close the tab
      anchor.closest("ul").removeClass("open");
    },

    toggleMobileMenu: function(event, el) {
      $(el).closest("ul").toggleClass("open");
    }

  };
  $.fn.responsiveTab = Tabs.init;
})(jQuery);