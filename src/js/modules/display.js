import scrollreveal  from "scrollreveal";

export default function animateDisplay() {
  scrollreveal().reveal('.p-about__list');
  scrollreveal().reveal('.p-accordion__item');
  scrollreveal().reveal('.p-tab');
  scrollreveal().reveal('.p-tab__contents');
  scrollreveal().reveal('.p-contact__sns');
  scrollreveal().reveal('.p-inquiry');

  scrollreveal().reveal('.p-about__list', {
  duration: 1000,
  scale: 0.1,
  reset: true
  });
  scrollreveal().reveal('.p-accordion__item', {
  duration: 1000,
  scale: 0.1,
  reset: true
  });
  scrollreveal().reveal('.p-tab', {
  duration: 1000,
  scale: 0.1,
  reset: true
  });
  scrollreveal().reveal('.p-tab__contents', {
  duration: 1000,
  scale: 0.1,
  reset: true
  });
  scrollreveal().reveal('.p-contact__sns', {
  duration: 1000,
  scale: 0.1,
  reset: false
  });
  scrollreveal().reveal('.p-inquiry', {
  duration: 1000,
  scale: 0.1,
  reset: true
  });
}
