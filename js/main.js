"use strict";

window.addEventListener('load', function () {
  var sliderToggle = function sliderToggle(toggles, containers) {
    var tabSlides = document.querySelectorAll(toggles);
    var promoSlides = document.querySelectorAll(containers);

    for (var _i2 = 0, _length2 = tabSlides.length; _i2 < _length2; _i2++) {
      var tab = tabSlides[_i2];
      tab.addEventListener('click', function (e) {
        e.preventDefault();

        for (var _i4 = 0, _length4 = tabSlides.length; _i4 < _length4; _i4++) {
          var _tab = tabSlides[_i4];

          _tab.classList.remove('active-tab');
        }

        this.classList.add('active-tab');
        var tabId = this.dataset.tab;

        for (var _i6 = 0, _length6 = promoSlides.length; _i6 < _length6; _i6++) {
          var test = promoSlides[_i6];
          test.classList.remove('active');
        }

        var slide = document.querySelector("#".concat(tabId));
        slide.classList.add('active');
      });
    }
  };

  sliderToggle('.promo-slider__tab', '.promo-slider__slide');
  sliderToggle('.purchase__inset-link', '.purchase__terms-item'); //scroll

  var scrollPage = function scrollPage() {
    var smoothLinks = document.querySelectorAll('a[href^="#"]');

    var _loop = function _loop(_i8, _length8) {
      var smoothLink = smoothLinks[_i8];
      smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        var id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      });
    };

    for (var _i8 = 0, _length8 = smoothLinks.length; _i8 < _length8; _i8++) {
      _loop(_i8, _length8);
    }

    ;
  };

  scrollPage(); //To top btn

  var goTopBtn = function goTopBtn() {
    var goTopBtn = document.querySelector('.back_to_top');
    var scrolled;
    var coords;

    var backToTop = function backToTop() {
      if (scrolled > 0) {
        window.scrollBy(0, -scrolled);
      }
    };

    var trackScroll = function trackScroll() {
      scrolled = window.pageYOffset;
      coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top--show');
      }

      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top--show');
      }
    };

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  };

  goTopBtn(); //Map

  var openMap = function openMap() {
    var mapImg = document.querySelector('.about__location-map');
    var mapPopup = document.querySelector('.modal-map');
    var mapPopupBtnClose = mapPopup.querySelector('.modal-map__close');
    mapImg.addEventListener('click', function (e) {
      e.preventDefault();
      mapPopup.classList.toggle('modal-map--open');
    });
    mapPopupBtnClose.addEventListener('click', function (e) {
      e.preventDefault();
      mapPopup.classList.remove('modal-map--open');
    });
  };

  openMap(); //temporary stubs

  var disableStubs = function disableStubs() {
    var disableStubsLinks = document.querySelectorAll('a[href=""]');

    for (var _i10 = 0, _length10 = disableStubsLinks.length; _i10 < _length10; _i10++) {
      var link = disableStubsLinks[_i10];
      link.addEventListener('click', function (e) {
        e.preventDefault();
      });
    }
  };

  disableStubs();
});