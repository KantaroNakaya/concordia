//=====画面読込時のjquery
$(window).on('load',function(){
$("#splash-logo").delay(0).fadeOut('slow');

//=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる
$("#splash").delay(10).fadeOut('slow',function(){

$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

});
//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

});


//=====ハンバーガーメニューのjquery
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});