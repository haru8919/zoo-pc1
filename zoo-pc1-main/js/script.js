
$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer,.js-drawer a").click(function (event) {
    event.stopPropagation(); // イベント伝播を止める
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
  
  // ドロワーメニュー内のリンクがクリックされた場合に、ドロワーメニューを非表示にする
  $(".js-drawer a").click(function (event) {
    $(".js-hamburger").removeClass("is-active");
    $(".js-drawer").fadeOut();
  });
});


// スワイパー
  $(function () {const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });});
  
  $(function () {
    $(window).on('scroll', function () {
      if ($('.mv').height()  < $(this).scrollTop()) {
          $('.js-header').addClass('change-color');
      } else {
          $('.js-header').removeClass('change-color');
      }
    });
  });

  $(function () {
    const pageTop = $(".js-page-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        300
      );
      return false;
    });
  });
