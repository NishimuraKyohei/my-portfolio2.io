import $ from 'jquery';
import router from './modules/Router';
import animateNav from './modules/headerNav';
import animateSlider from './modules/slider';
import animateTyping from './modules/TextTyping';
// import animateChart from './modules/chart';
import animateTab from './modules/tab';
import animateAccordion from './modules/accordion';
import animateDisplay from './modules/display';
import animateSplash from './modules/splash';
import '../scss/app.scss';

$(() => {
  new router()

  const hoge = 'hoge'
  console.log(hoge)
});

animateNav();
animateSlider();
animateTyping();
// animateChart();
animateAccordion();
animateTab();
animateDisplay();
animateSplash();

