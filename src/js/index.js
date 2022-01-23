import $ from 'jquery';
import router from './modules/Router';
import animateNav from './modules/headerNav';
import animateHome from './modules/home';
import animateSlider from './modules/slider';
import animateTab from './modules/tab';
import animateAccordion from './modules/accordion';
import animateDisplay from './modules/display';
import '../scss/app.scss';

$(() => {
  new router()

  const hoge = 'hoge'
  console.log(hoge)
});

animateNav();
animateHome();
animateSlider();
animateAccordion();
animateTab();
animateDisplay();

