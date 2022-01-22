import $ from 'jquery'

export default function animateAccordion() {
  $('.p-accordion__title').on('click', function() {
    $('.p-accordion__box').slideUp(500);

    var findElm = $(this).next(".p-accordion__box");

    if($(this).hasClass('close')){
      $(this).removeClass('close');
    }else{
      $('.close').removeClass('close');
      $(this).addClass('close');
      $(findElm).slideDown(500);
    }
  });
}