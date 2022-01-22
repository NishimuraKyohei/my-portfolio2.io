import $ from 'jquery'

export default function animateNav() {
  var elemTop = [];

function PositionCheck(){

var headerH = $(".l-header").outerHeight(true);

$(".scroll-point").each(function(i) {
elemTop[i] =Math.round(parseInt($(this).offset().top-headerH));
});
}

function ScrollAnime() {
var scroll = Math.round($(window).scrollTop());
var NavElem = $(".l-header__navItem");
$(".l-header__navItem").removeClass('current');
if(scroll >= 0 && scroll < elemTop[1]) {
$(NavElem[0]).addClass('current');
}
else if(scroll >= elemTop[1] && scroll < elemTop[2]) {
$(NavElem[1]).addClass('current');
}
else if(scroll >= elemTop[2] && scroll < elemTop[3]) {
$(NavElem[2]).addClass('current');
}
else if(scroll >= elemTop[3]) {
$(NavElem[3]).addClass('current');
}
}

$('.l-header__navLink').click(function () {
var elmHash = $(this).attr('href');
var headerH = $(".l-header").outerHeight(true);
var pos = Math.round($(elmHash).offset().top-headerH);
$('body,html').animate({scrollTop: pos}, 500);
return false;
});

$(window).scroll(function () {
PositionCheck();
ScrollAnime();
});

$(window).on('load', function () {
PositionCheck();
ScrollAnime();
});

$(window).resize(function() {
PositionCheck()
});
}