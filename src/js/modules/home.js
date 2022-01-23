import $ from 'jquery'
import "slick-carousel"

export default function animateHome() {
	$('.p-home__slide').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 30000,
		infinite: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		cssEase: 'linear',
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 426,
			settings: {
				slidesToShow: 1.5,
			}
		}
	]
	});
}