/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */


$(document).ready(function () {

  /**************************** Registration page *************************************/

  function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  }
  $(document).ready(function () {
    if ($('.fsNextButton').length || $('.fsPreviousButton').length) {
      $(document).on('click', '.fsNextButton', scrollToTop)
      $(document).on('click', '.fsPreviousButton', scrollToTop)
    }
  });

  const announcementTimer = {
    timer: $(document).find('.AnnouncementBar__Timer'),

    timerInit: function () {
      this.timer.each(function () {
        const $days = $(this).find('.timer__days');
        const $daysTitle = $(this).find('.Days_Title');
        const $hoursTitle = $(this).find('.HRS_Title');
        const $hours = $(this).find('.timer__hours');
        const $minutes = $(this).find('.timer__minutes');
        const $seconds = $(this).find('.timer__seconds');

        const val = $(this).data("end-date") + " GMT-08:00";
        const deadline = new Date(val);
        let timerId = null;

        function countdownTimer() {
          const diff = deadline - new Date();

          if (diff <= 0) {
            clearInterval(timerId);
          }
          const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
          const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
          const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
          const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

          $days.text(days < 10 ? '0' + days : days);
          $hours.text(hours < 10 ? '0' + hours : hours);
          $minutes.text(minutes < 10 ? '0' + minutes : minutes);
          $seconds.text(seconds < 10 ? '0' + seconds : seconds);

          if (days == '01' || days == '00') {
            $daysTitle.text('DAY |')
          } else {
            $daysTitle.text('DAYS |')
          }

          if (hours == '01' || hours == '00') {
            $hoursTitle.text('HR :')
          } else {
            $hoursTitle.text('HRS :')
          }
        }
        countdownTimer();

        timerId = setInterval(countdownTimer, 1000);
      });
    },
  }

  announcementTimer.timerInit()
  // Mega menu effects

  function hoverMegaMenuItem() {
    var menuItem = $('.megamenu-item');

    menuItem.on('mouseenter', function () {
      var subMegaMenu = $(this).parent().parent().parent().parent().find('.SubMegaMenu');
      var linkId = $(this).data('link-id');
      var subMenuThisId = $('.SubMegaMenu[data-submenu-id="' + linkId + '"]');

      if (linkId) {
        $(this).parent().find(menuItem).removeClass('active');
        subMegaMenu.removeClass('active');
        $(this).addClass('active');
        subMenuThisId.addClass('active');
      }
    })
  }

  hoverMegaMenuItem();

  $('.slideshow-with-block__slideshow').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerPadding: '70px',
          centerMode: true
        }
      }
    ]
  });

  $('.slideshow-iwt__logos').slick({
    slidesToShow: $('.slideshow-iwt__logos').data('logo-count'),
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.slideshow-iwt__nav-slider',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1007,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  function setSlideVisibility() {
    var visibleSlides = $('.slideshow-iwt__logos .slick-slide[aria-hidden="false"]');
    $(visibleSlides).each(function() {
      $(this).css('opacity', 1);
    });
    $(visibleSlides).first().prev().css('opacity', 0);
    $(visibleSlides).last().next().css('opacity', 0);
  }

  function setSlideTabIndex() {
    var $hiddenSlides = $('.slick-slide[aria-hidden="true"]');
    $hiddenSlides.each(function() {
      $(this).attr('tabindex', -1);

      if ($(this).hasClass('slick-current'))  {
        $(this).attr('tabindex', 0).attr('aria-hidden', false);
      }
    });
  }

  // setSlideVisibility()



  // $('.slideshow-iwt__logos').on('beforeChange', function() {
  //   $('.slick-slide').each(function() {
  //     $(this).css('opacity', 1);
  //   });
  // });

  $('.slideshow-iwt__logos').on('afterChange', function() {
    // setSlideVisibility();
    setSlideTabIndex();
  });

  $('.slideshow-iwt__images').slick({
    asNavFor: '.slideshow-iwt__nav-slider',
    dots: false,
    arrows: false,
    fade: true
  });

  $('.slideshow-iwt__content-wrapper').slick({
    asNavFor: '.slideshow-iwt__nav-slider',
    dots: false,
    arrows: false,
    infinite: false,
    adaptiveHeight: true
    //appendArrows: '.slideshow-iwt__slideshow'
  });

  $('.slideshow-iwt__videos').slick({
    asNavFor: '.slideshow-iwt__nav-slider',
    dots: false,
    arrows: false,
    fade: true
  });

  setSlideTabIndex();

  var players = {};
  function youTubePlayerLoad(playerContainer, videoId) {
    players[videoId] = new YT.Player(playerContainer, {
      videoId: videoId,
      playerVars: {
        showinfo: 0,
        controls: 0,
        fs: 0,
        rel: 0,
        height: '100%',
        width: '100%',
        iv_load_policy: 3,
        html5: 1,
        loop: 1,
        playsinline: 1,
        modestbranding: 1,
        disablekb: 1,
        origin: 'https://potsandpansshop.myshopify.com'
      },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  $(document).on('click', '.slideshow-iwt__play-button', function (event) {
    event.preventDefault();

    $(this).fadeOut();
    var videoId = $(this).data('video-player-id');

    $('#' + videoId).addClass('video-player--active');
    if (players[videoId]) {
      players[videoId].playVideo();
    } else  {
      youTubePlayerLoad(videoId, videoId);
    }
    $(this).parents('.slideshow-iwt__video-slide').find('.slideshow-iwt__video-player--close').fadeIn();
  })

  $(document).on('click', '.slideshow-iwt__video-player--close', function () {
    var $curentPlayer = $(this).parents('.slideshow-iwt__video-slide').find('.slideshow-iwt__video-player'),
        $curentPlayBtn = $(this).parents('.slideshow-iwt__video-slide').find('.slideshow-iwt__play-button'),
        playerId = $curentPlayer.attr('id');
    players[playerId].stopVideo();
    $curentPlayer.removeClass('video-player--active');
    $curentPlayBtn.fadeIn();
    $(this).fadeOut();
  })

  $('.Footer__Block--links .Footer__Title').on('click', function () {
    $(this).toggleClass('active').next().slideToggle();
  });

  $('.product-reviews__button').on('click', function () {
    var items = $('.product-reviews__content .spr-reviews');
    var item = $('.product-reviews__content .spr-reviews .spr-review');

    $(this).text($(this).text() == 'load more' ? 'show less' : 'load more');

    if (items.hasClass('opened')) {
      item.each(function (index, element) {
        var $element = $(element);

        items.removeClass('opened');

        if (index > 1) {
          $element.hide();
        }
      });
    } else {
      item.each(function (index, element) {
        var $element = $(element);

        items.addClass('opened');

        $element.show();
      });
    }
  });

  $('.shop-expanded__slideshow').slick({
    mobileFirst: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1008,
        settings: 'unslick'
      }
    ]
  });

  $(window).on('resize', function () {
    var width = $(window).width();
    if (width < 1008 && !$('.shop-expanded__slideshow').hasClass('slick-initialized')) {
      $('.shop-expanded__slideshow').slick({
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: false,
        adaptiveHeight: true
      });
    } else if (width >= 1008 && $('.shop-expanded__slideshow').hasClass('slick-initialized')) {
      $('.shop-expanded__slideshow').slick('unslick');
    }
  });


  $('.blog-posts-mf__slideshow').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          infinite: false,
          dots: false,
          arrows: false
        }
      }
    ]
  });

  $('.blog-tag-btn').on('click', function () {
    var tag = $(this).data('tag-id');

    if (!$(this).hasClass('active')) {
      $('[data-tag-id]').removeClass('active');
      $(this).addClass('active');
      $('[data-tag-menu]').hide();
      $('[data-tag-menu="' + tag + '"]').fadeIn(450).css('display', 'flex').parent().slideDown();
    }
  });

  let variants = ['33064920350797', '33049682673741', '33049682313293', '33049681789005', '33049681592397', '33049677594701', '33049675268173', '33003906138189', '33003904794701', '33003904827469', '33003902599245', '33003902632013', '33003898110029', '33003898142797', '33003894112333', '32737573863501', '32956324937805', '32737573896269', '32956324970573', '32895960940621', '32895960973389', '32863085133901', '32863083266125', '32863082971213', '32863081005133', '32863080841293', '32863080480845', '32863079825485', '32863079497805', '32863078776909', '32863078842445', '32863077466189', '32863077433421', '32863077335117', '32863076909133', '32863076679757', '32863076417613', '32863076221005', '32863076089933', '32863075991629', '32863075926093', '32789313224781', '32789312700493', '32789312503885', '32789312438349', '32789312274509', '32789312110669', '32789311979597', '32789311553613', '32789311586381', '32789311094861', '32789311062093', '32789310341197', '32789305655373', '32789301821517', '32789301854285', '32789297528909', '32789294645325', '32789294088269', '32789292646477', '32789292417101', '32789292449869', '32738395816013', '32738394964045', '32738394308685', '32738393522253', '32738393161805', '32738393096269', '32738392211533', '32738389065805', '32738387624013', '32738387460173', '32738386837581', '32738386608205', '32738383626317', '32738383495245', '32738381398093', '32738369699917', '32738368225357', '32738367242317', '32738366521421', '32738365997133', '32738364784717', '32738360164429', '32738359377997', '32738352660557', '32738347778125', '32738345287757', '32738335686733', '32738333425741', '32738332147789', '32738331885645', '32738331557965', '32738330280013', '32738324021325', '32738305704013', '32738305736781', '32738305769549', '32738301247565', '32738292367437', '32738290827341', '32738290860109', '32738289614925', '32738287583309', '32738284601421', '32738282438733', '32738282471501', '32738282537037', '32738282569805', '32738282504269', '32737663582285', '32737661288525', '32737658568781', '32737657552973', '32737657585741', '32737654374477', '32737653358669', '32737653424205', '32737652998221', '32737652539469', '32737652244557', '32737651687501', '32737651064909', '32737648836685', '32737648246861', '32737647689805', '32737647591501', '32737646903373', '32737645789261', '32737636810829', '32737636450381', '32737636483149', '32956515024973', '32737635631181', '32737635500109', '32737634811981', '32737634648141', '32737629306957', '32737629143117', '32737629012045', '32737628684365', '32737628389453', '32737628291149', '32737627635789', '32737625571405', '32737625440333', '32737624031309', '32737620328525', '32737617215565', '32737615609933', '32737614561357', '32737612202061', '32737611808845', '32737611153485', '32737609547853', '32737602994253', '32737602535501', '32737602142285', '32737601847373', '32737601028173', '32737600766029', '32737596997709', '32737596276813', '32737593983053', '32737593393229', '32737593032781', '32737590378573', '32737588510797', '32737587953741', '32737587101773', '32737586249805', '32737586184269', '32737585266765', '32737581760589', '32737576386637', '32737572683853', '32737571143757', '32737518321741', '32737510588493', '32737508425805', '32737507246157', '32737507278925', '32737504821325', '32737504198733', '32737501839437', '32737501872205', '32737501904973', '32737501184077', '32737501216845', '32737499185229', '32737499054157', '32737498398797', '32737495908429', '32737493549133', '32737493024845', '32737488535629', '32737485455437', '32737483259981', '32737482408013', '32737478770765', '32737477754957', '32737474412621', '32956073082957', '32737471201357', '32737470480461', '32737468481613', '32732071428173', '32732070477901', '32732070084685', '32732066971725', '32732066152525', '32732063629389', '32732062154829', '32732062187597', '32732062220365', '32732061827149', '32732058812493', '32732058943565', '32732056715341', '32732056780877', '32732056813645', '32732056879181', '32732056944717', '32732056027213', '32732054847565', '32732044034125', '32732043477069', '32732039938125', '32732039970893', '32732035743821', '32732030500941', '32732029419597', '32732027551821', '32732025618509', '32732023488589', '32732023521357', '32732019359821', '32732019392589', '32732019425357', '32732011135053', '32732011167821', '32732008644685', '32732008677453', '32732008120397', '32732007039053', '32732005892173', '32732005924941', '32732004843597', '32732004450381', '32732000387149', '32732000419917', '32732000452685', '32731996553293', '32731990851661', '32731990884429', '32731986985037', '32731987017805', '32731983904845', '32731982299213', '32731982331981', '32731981217869', '32731966996557', '32731967029325', '32731966308429', '32731966373965', '32731966472269', '32731966505037', '32731966570573', '32731966603341', '32731966636109', '32731966767181', '32731959558221', '32731959590989', '32731953594445', '32731952578637', '32731950841933', '32731951005773', '32731940094029', '32731939831885', '32731916763213', '32731916795981', '32731916894285', '32731905196109', '32731900379213', '32731896381517', '32731895267405', '32731893039181', '32731890810957', '32731890909261', '32731885895757', '32731885338701', '32731885404237', '32731884519501', '32731878064205', '32731878096973', '32731878129741', '32731878228045', '32731876917325', '32731876950093', '32731874787405', '32731874754637', '32731873280077', '32731359412301', '32731358724173', '32731356528717', '32731351679053', '32731337818189', '32731329495117', '32731329527885', '32731326087245', '32731323760717', '32745322807373', '32731323531341', '32731323596877', '32731321303117', '32731314913357', '32731314946125', '32731314978893', '32731313799245', '32731313864781', '32731313897549', '32731312128077', '32731312160845', '32731312226381', '32731312259149', '32731308425293', '32731298988109', '32731299053645', '32731272577101', '32731267137613', '32731267170381', '32731255308365', '32731247607885', '32731247640653', '32731247706189', '32731238400077', '32731236630605', '32731229061197', '32731227062349', '32731226734669', '32731226374221', '32730944307277', '32730943389773', '32730943094861', '32730942537805', '32730940112973', '32729204457549', '32729204064333', '32729203933261', '32729203802189', '32729203638349', '32729203441741', '32729202491469', '32729201475661', '32729201573965', '32729201606733', '32729200525389', '32729199509581', '32729199378509', '32729199214669', '32729198854221', '32729198755917', '32729198231629', '32729197051981', '32729195937869', '32729195806797', '32729194004557', '32729191809101', '32729191841869', '32729186140237', '32728913313869', '32728911052877', '32728907350093', '32728903647309', '32728903680077', '32728903057485', '32728902598733', '32728899584077', '32728898994253', '32728896602189', '32728895160397', '32728895193165', '32728893161549', '32728892473421', '32728892506189', '32728884805709', '32728884838477', '32728881397837', '32728878547021', '32728878415949', '32728875761741', '32728875794509', '32728874352717', '32728872812621', '32728866947149', '32728862097485', '32728859639885', '32728852824141', '32728852856909', '32728851480653', '32728850628685', '32728850169933', '32728848302157', '32728848334925', '32728848367693', '32728845353037', '32728840765517', '32728839290957', '32728837914701', '32728837947469', '32728836505677', '32728835981389', '32728834113613', '32728833491021', '32728833196109', '32728826413133', '32728826445901', '32728822939725', '32728821956685', '32728820318285', '32728817139789', '32728816353357', '32728816386125', '32728813994061', '32728813273165', '32728812224589', '32728809144397', '33070902542413', '33070910505037', '33070909030477', '32728799543373', '32728798888013', '32728797249613', '32728797151309', '32728797184077', '32728797216845', '32728797282381', '32728793350221', '32728791285837', '32728790761549', '32728790401101', '32728788435021', '32728788467789', '32728785059917', '32728785092685', '32728783224909', '32728641273933', '32728639995981', '32728638980173', '32728638390349', '32728637440077', '32728636555341', '32728635473997', '32728634425421', '32728631705677', '32728630722637', '32718332100685', '32718331215949', '32718331117645', '32718331019341', '32718330921037', '32718330069069', '32718329249869', '32718328561741', '32718327611469']
  document.addEventListener('variant:changed', function (event) {
    var variant = event.detail.variant;
    var sku = variant['sku'];
    var variant_id = variant.id;
    var description_tab = $('#description_tab');
    var curbside_pickup = $('.curbside_pickup');

    if(!variants.includes(variant_id.toString())){
      $('.curbside_pickup').hide();
    }else{
      if($('.curbside_pickup').is(":hidden"))
      	$('.curbside_pickup').toggle();

    }
    if (description_tab != null) {
      $('.product_content_dimensions').hide();
      $('.product_content_dimensions[data-attribute="' + variant_id + '"]').fadeIn();

      if (sku) {
        $('.ProductMeta__SkuNumber').text(sku).parent().fadeIn();
      } else {
        $('.ProductMeta__SkuNumber').parent().hide();
      }

    }
  });

  if ($('[data-section-type="announcement-bar"]').length) {
    var speed = $('[data-announcement-bar-slideshow]').attr('data-slideshow-speed');
    var vertical = $('[data-announcement-bar-slideshow]').attr('data-slideshow-vertical-mode');
    var autoplay = $('[data-announcement-bar-slideshow]').attr('data-enable-autoplay');
    var verticalMode;

    if (vertical == 'true') {
      verticalMode = true;
    } else {
      verticalMode = false;
    }

    $('[data-announcement-bar-slideshow]').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: autoplay === 'false' ? 0 : 1,
      arrows: false,
      autoplaySpeed: speed,
      vertical: verticalMode
    });
  }

  var $announcementBarLink = $('[data-link]');
  var $announcementBarClose = $('.AnnouncementBar__Pop-up--close');

  jQuery.each($announcementBarLink, function () {
    $(this).on("click", function (e) {
      e.preventDefault();

      let linkName = $(this).attr('data-link'),
          pop = $('[data-modal=' + linkName + ']');

      pop.show();
      $('body').addClass('body-scroll-off');
      $('html').addClass('body-scroll-off');

      $(document).on('click', function (e) {
        if ($(e.target).is(pop)) {
          pop.hide();
          $('body').removeClass('body-scroll-off');
          $('html').removeClass('body-scroll-off');
        }
      });

      $announcementBarClose.on('click', function () {
        pop.hide();
        $('body').removeClass('body-scroll-off');
        $('html').removeClass('body-scroll-off');
      })
    })
  });

  $( window ).resize(function() {
    announcementResize()
  });

  $( window ).on("orientationchange", function() {
    setTimeout(announcementResize,300)
  });
  
  function announcementResize() {
    var announcementBarHeight = $('#section-announcement').outerHeight();
    document.documentElement.style.setProperty('--announcement-bar-height', announcementBarHeight + 'px');
  }
  announcementResize()

  var $heroSlider = $('.SectionHero__Slider');

  if ($heroSlider.length) {
    $heroSlider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      arrows: $heroSlider.attr('data-slideshow-arrows') == 'true' ? true : false,
      dots: $heroSlider.attr('data-slideshow-dots') == 'true' ? true : false,
      autoplaySpeed: $heroSlider.attr('data-slideshow-speed'),
      pauseOnHover: $heroSlider.attr('data-pause-on-hover') == 'true' ? true : false,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            dots: $heroSlider.attr('data-slideshow-mobile-dots') == 'true' ? true : false,
            arrows: $heroSlider.attr('data-slideshow-mobile-arrows') == 'true' ? true : false
          }
        }
      ]
    });
  }
});

//support page heading toggle class
$('.support-description_sub-heading').click(function () {
  $(this).siblings().removeClass('open');
  $(this).toggleClass('open');
});

//Product thumbnail slider

if(!$('.Product__Gallery').hasClass('Product__Gallery--stack'))
{
  $('.Product__SlideshowNavScroller').flickity({
    asNavFor: '.Product__Slideshow',
    contain: true,
    pageDots: true,
    groupCells: 4,
    percentPosition: true,
    cellAlign: 'left'
  });
}
// end Product thumbnail slider

//product slider active thumbnail
$('.Product__SlideshowNavScroller img').click(function(){
  $('.Product__SlideshowNavScroller span').removeClass('is-active');
  $(this).parent('span').addClass('is-active');
});
$('.Product__SlideshowNavScroller span:first').addClass('is-active');

//end product slider active thumbnail


class QuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', { bubbles: true })

    this.querySelectorAll('.QuantitySelector__Button').forEach(
      (button) => button.addEventListener('click', this.onButtonClick.bind(this))
    );
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;

    event.target.classList.contains('QuantitySelector__ButtonIncrease') ? this.input.stepUp() : this.input.stepDown();
    if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
  }
}

customElements.define('quantity-input', QuantityInput);


// Quick view
class QuickViewOpener extends HTMLElement {
  constructor() {
    super();

    this.button = this.querySelector('button');
    this.modal = document.querySelector('quick-view');
    this.overlay = document.querySelector('.PageOverlay');
    this.skeleton = this.modal.querySelector('.QuickViewSkeleton');
    this.quickViewInner = this.modal.querySelector('#product__quick-view');

    if (!this.button) return;

    this.button.addEventListener('click', () => {
      if (!this.modal) return;
      this.setQuickView()
    });
  }

  setQuickView () {
    if (!this.dataset.url) return
    this.openModal();

    fetch(`${this.dataset.url}?section_id=quick-view`)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html')
        const destination = document.querySelector('#product__quick-view');
        const skeleton = document.querySelector('.QuickViewSkeleton');
        const source = html.querySelector('.shopify-section');

        skeleton.style.display = 'none'
        if (source && destination) destination.innerHTML = source.innerHTML;

        this.initSlider();
        this.initForm();
      })
  }

  openModal() {
    this.overlay.classList.add('is-visible', 'PageOverlay--QuickView');
    this.modal.setAttribute('aria-hidden', 'false')
    document.querySelector('body').classList.add('no-scroll')
  }

  initSlider() {
    const slider = this.modal.querySelector('.QuickViewModal .Product__Slideshow')
    const thumbnailsSlider = this.modal.querySelector('.QuickViewModal .Product__SlideshowNavScroller')

    if (slider) {
      const sliderConfig = JSON.parse(slider.getAttribute('data-flickity-config'));
      if(sliderConfig) new Flickity(slider, sliderConfig);
    }

    if (thumbnailsSlider) {
      const thumbnailsSliderConfig = JSON.parse(thumbnailsSlider.getAttribute('data-flickity-config'));
      if (thumbnailsSliderConfig) new Flickity(thumbnailsSlider, thumbnailsSliderConfig);
    }
  }

  initForm() {
    this.form = this.modal.querySelector('.QuickViewModal .ProductForm');

    if (!this.form) return
    this.getVariantData()

    this.form.addEventListener('submit', (e) => {
      const variantID = this.form.querySelector('[name="id"]').value;
      const quantity = this.form.querySelector('[name="quantity"]').value;

      e.preventDefault();
      const formData = {
        'items': [{
          'id': variantID,
          'quantity': quantity
        }]
      };

      fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => {
          return response.json();
        })
        .then(response => {

          if (response.status) {
            const errorMessage = this.form.querySelector('.ProductForm__Error')
            errorMessage.textContent = response.description;
            errorMessage.style.display = 'block';

            setTimeout(() => {
              errorMessage.style.display = 'none';
            },5000)

          } else {

            this.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                variant: variantID,
                quantity: quantity
              }
            }));

            this.modal.closeModal();
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    })

    this.form.addEventListener('change', this.onVariantChange.bind(this))
  }

  onVariantChange() {
    this.updateOptions();
    this.updateMasterId();

    if (this.currentVariant) {
      this.updateVariantInput()
      this.updateVariantInfo()
    }
  }

  updateVariantInfo() {
    fetch(`${this.dataset.url}?variant=${this.currentVariant.id}&section_id=quick-view`)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html')
        const selectors = {
          price: '.ProductQuickView .ProductMeta__PriceList',
          variantLabel: '.ProductQuickView .ProductForm__Label-bottom',
          variantInfo: '.ProductQuickView .ProductMeta__Description',
          viewMore: '.ProductQuickView .ProductMeta__ViewMoreWrapper'
        }
        const selectorsValues = Object.values(selectors);
        selectorsValues.forEach((item) => {
            let destination = document.querySelector(item);
            let source = html.querySelector(item);
            if (source && destination) destination.innerHTML = source.innerHTML;
          }
        )
        this.updateGallery(html)
      })
  }

  updateOptions() {
    const options = Array.from(this.form.querySelectorAll('.ProductForm__Option'));
    this.options = options.map((item) => {
      return Array.from(item.querySelectorAll('input')).find((radio) => radio.checked).value;
    });
  }

  updateMasterId() {
    this.currentVariant = this.getVariantData().product.variants.find((variant) => {
      return !variant.options.map((option, index) => {
        return this.options[index] === option;
      }).includes(false);
    });
  }

  getVariantData() {
    this.variantData = this.variantData || JSON.parse(document.querySelector('.QuickViewModal [type="application/json"]').textContent);
    return this.variantData;
  }

  updateVariantInput() {
    const formInput = this.form.querySelector('input[name="id"]')
    formInput.value = this.currentVariant.id;

    const notifyVariantNotifyForm = document.querySelector('[data-notify-variant]');
    const notifyForm = document.querySelector('[data-notify-product]');
    const productAvaibleForm = document.querySelector('[data-product-avaible]');
    notifyVariantNotifyForm.value = this.currentVariant.id;

    if(this.currentVariant.available) {
      notifyForm.classList.add('hide');
      productAvaibleForm.classList.remove('hide');
    }else{
      notifyForm.classList.remove('hide');
      productAvaibleForm.classList.add('hide');
    }

  }

  updateGallery(html) {
    if (!html) return
    const productGallerySource = document.querySelector('.QuickViewModal .Product__Gallery');
    const productGalleryNew = html.querySelector('.Product__Gallery');

    if (productGallerySource && productGalleryNew) {
      productGallerySource.innerHTML = productGalleryNew.innerHTML;

      const galleryElem = document.querySelector('.QuickViewModal .Product__Slideshow');
      const thumbnailsElem = document.querySelector('.QuickViewModal .Product__SlideshowNavScroller');
      if (galleryElem) {
        let galleryConfig = JSON.parse(galleryElem.getAttribute('data-flickity-config'));
        if (galleryConfig) new Flickity(galleryElem, galleryConfig);
      }
      if (thumbnailsElem) {
        let thumbnailsConfig = JSON.parse(thumbnailsElem.getAttribute('data-flickity-config'));
        if (thumbnailsConfig) {
          const galleryWrapper =  document.querySelector('.QuickViewModal .Product__Gallery');
          galleryWrapper.classList.add('Product__Gallery--withThumbnails');
          new Flickity(thumbnailsElem, thumbnailsConfig);
        }
      }
    }
  }
}
customElements.define('quick-view-opener', QuickViewOpener);


class QuickView extends HTMLElement {
  constructor() {
    super();

    this.closeBtn = this.querySelector('#modal-close-popup-quick-view');
    this.overlay = document.querySelector('.PageOverlay');
    this.skeleton = this.querySelector('.QuickViewSkeleton');
    this.quickViewInner = this.querySelector('#product__quick-view');

    this.closeBtn.addEventListener('click',  this.closeModal.bind(this))
    this.overlay.addEventListener('click',  this.closeModal.bind(this))
  }

  closeModal() {
    this.setAttribute('aria-hidden', 'true')
    this.overlay.classList.remove('is-visible', 'PageOverlay--QuickView');
    document.querySelector('body').classList.remove('no-scroll');

    this.skeleton.style.display = 'block';
    this.quickViewInner.innerHTML = '';
  }
}
customElements.define('quick-view', QuickView);

if (!customElements.get('notify-me-form')) {
  class NotifyMe extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.companyId = 'KsfdTa'
    }

    onSubmitHandler(e) {
      e.preventDefault();

      const formData = new FormData(this.form);
      const email = formData.get('email');
      const variantId = formData.get('variant');

      if (!this.validateEmail(email)) {
        this.showMessage('error-email');
        return false;
      }

      const config = {
        method: 'POST',
        headers: {accept: 'application/json', revision: '2023-10-15', 'content-type': 'application/json'},
        body: JSON.stringify({
          data: {
            type: 'back-in-stock-subscription',
            attributes: {
              profile: {
                data: {
                  type: 'profile',
                  attributes: {
                    email: `${email}`
                  }
                }
              },
              channels: ['EMAIL'],
            },
            relationships: {
              variant: {
                data: {
                  type: 'catalog-variant',
                  id: `$shopify:::$default:::${variantId}`
                }
              }
            }
          }
        })
      };

      this.sendRequest(config)
    }

    sendRequest(config) {
      const _this = this

      fetch(`https://a.klaviyo.com/client/back-in-stock-subscriptions/?company_id=${this.companyId}`, config)
        .then(response => {(response.status === 202) ? _this.showMessage('success') : _this.showMessage('error')})
        .catch(err => {console.error(err); _this.showMessage('error')});
    }

    validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    showMessage(type) {
      document.querySelector('.notify-message__' + type).classList.remove('hide');

      setTimeout(() => {
        if (document.querySelector('.notify-message__' + type)) {
          document.querySelector('.notify-message__' + type).classList.add('hide');
        }
      }, 6000)
    }
  }

  customElements.define('notify-me-form', NotifyMe);
}
