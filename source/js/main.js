window.addEventListener('load', function () {

  const sliderToggle = (toggles, containers) => {
    const tabSlides = document.querySelectorAll(toggles);
    const promoSlides = document.querySelectorAll(containers);

    for (let tab of tabSlides) {
      tab.addEventListener('click', function (e) {
        e.preventDefault();
        for (let tab of tabSlides) {
          tab.classList.remove('active-tab');
        }
        this.classList.add('active-tab');
        let tabId = this.dataset.tab;
        for (let test of promoSlides) {
          test.classList.remove('active');
        }
        let slide = document.querySelector(`#${tabId}`);
        slide.classList.add('active');
      })
    }
  };
  sliderToggle('.promo-slider__tab', '.promo-slider__slide');
  sliderToggle('.purchase__inset-link', '.purchase__terms-item');

  //scroll
  const scrollPage = () => {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      });
    };
  };
  scrollPage();

  //To top btn
  const goTopBtn = () => {
    let goTopBtn = document.querySelector('.back_to_top');
    let scrolled;
    let coords;

    const backToTop = () => {
      if (scrolled > 0) {
        window.scrollBy(0, -scrolled);
      }
    }
    const trackScroll = () => {
      scrolled = window.pageYOffset;
      coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top--show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top--show');
      }
    }
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  };

  goTopBtn();

  //Map
  const openMap = () => {
    let mapImg = document.querySelector('.about__location-map');

    let mapPopup = document.querySelector('.modal-map');
    let mapPopupBtnClose = mapPopup.querySelector('.modal-map__close');

    mapImg.addEventListener('click', function (e) {
      e.preventDefault();
      mapPopup.classList.toggle('modal-map--open')
    });
    mapPopupBtnClose.addEventListener('click', function (e) {
      e.preventDefault();
      mapPopup.classList.remove('modal-map--open')
    });
  };
  openMap();

  //temporary stubs
  const disableStubs = () => {
    const disableStubsLinks = document.querySelectorAll('a[href=""]');
    for (const link of disableStubsLinks) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
      })
    }
  }
  disableStubs();
});
