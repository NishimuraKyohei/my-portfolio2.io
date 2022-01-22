import $ from 'jquery'

export default function animateTab() {
  function GethashID (hashIDName){
    if(hashIDName){
      $('.p-tab li').find('a').each(function() {
        var idName = $(this).attr('href');
        if(idName == hashIDName){
          var parentElm = $(this).parent();
          $('.p-tab li').removeClass("active");
          $(parentElm).addClass("active");
          $(".p-tab__area").removeClass("is-active");
          $(hashIDName).addClass("is-active");
        }
      });
    }
  }

  $('.p-tab a').on('click', function() {
    var idName = $(this).attr('href');
    GethashID (idName);
    return false;
  });

  $(window).on('load', function () {
      $('.p-tab li:first-of-type').addClass("active");
      $('.p-tab__area:first-of-type').addClass("is-active");
    var hashName = location.hash;
    GethashID (hashName);
  });
}