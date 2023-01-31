
//=====画面読込時のjquery
$(window).on('load',function(){
$("#splash-logo").delay(0).fadeOut('slow');

//=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる
$("#splash").delay(10).fadeOut('slow',function(){

$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

});
//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

});

//====================================
//====================================
//====================================
//====================================
//====================================


//=====ハンバーガーメニューのjquery
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

//====================================
//====================================
//====================================
//====================================
//====================================

//=====slickを使ったスライダー

$('.slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"><i class="fa-solid fa-angle-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa-solid fa-angle-right"></i></div>',
    dots: true,//下部ドットナビゲーションの表示
    responsive: [
        {
        breakpoint: 1080,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
]
});



