/* Images Carousel */
const imgCarouselButtons = document.getElementsByClassName(
	'imgCarousel_button'
);

const setActiveImage = (index) => {
	const imgCarouselActiveImg = document.getElementById(
		'imgCarousel__image__active'
	);

	[].forEach.call(imgCarouselButtons, function (element) {
		element.classList.remove('imgCarousel__buttons--active');
	});

	imgCarouselButtons[index].classList.add('imgCarousel__buttons--active');
	imgCarouselActiveImg.src = './images/img' + (index + 1) + '.png';
};

/* Cards Carousel */

const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

next.addEventListener('click', function () {
	let translatePercentage;
	if (window.innerWidth > 767) {
		translatePercentage = 'translate(-12.5%)';
	}

	if (window.innerWidth < 767) {
		translatePercentage = 'translate(-11.11%)';
	}

	direction = -1;
	carousel.style.justifyContent = 'flex-start';
	slider.style.transform = translatePercentage;
});

prev.addEventListener('click', function () {
	let translatePercentage;
	if (window.innerWidth > 767) {
		translatePercentage = 'translate(12.5%)';
	}

	if (window.innerWidth < 767) {
		translatePercentage = 'translate(11.11%)';
	}

	if (direction === -1) {
		direction = 1;
		slider.appendChild(slider.firstElementChild);
	}
	carousel.style.justifyContent = 'flex-end';
	slider.style.transform = translatePercentage;
});

slider.addEventListener(
	'transitionend',
	function () {
		// get the last element and append it to the front

		if (direction === 1) {
			slider.prepend(slider.lastElementChild);
		} else {
			slider.appendChild(slider.firstElementChild);
		}

		slider.style.transition = 'none';
		slider.style.transform = 'translate(0)';
		setTimeout(() => {
			slider.style.transition = 'all 0.5s';
		});
	},
	false
);
