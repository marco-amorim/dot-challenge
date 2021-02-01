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

/* Form */

const maskPhoneInput = (event) => {
	let phone = event.target.value.replace(/\D/g, '');

	if (phone.length > 0) phone = ['(', phone].join('');

	if (phone.length >= 3)
		phone = [phone.substr(0, 3), ') ', phone.substr(3)].join('');

	if (phone.length >= 9) {
		if (phone.length < 14) {
			phone = [phone.substr(0, 9), '-', phone.substr(9)].join('');
		} else {
			phone = [phone.substr(0, 10), '-', phone.substr(10)].join('');
		}
	}

	event.target.value = phone;
	event.preventDefault();
};

const handleSubmit = (event) => {
	event.preventDefault();

	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const phone = document.querySelector('#phone').value;
	const message = document.querySelector('#message').value;

	const data = { name, email, phone, message };
	const thanks = 'Obrigado pelo desafio! :) \n \n';

	alert(thanks + JSON.stringify(data));
};

/* Accordion */

const arrayTriggers = document.querySelectorAll('.accordion__trigger');
const arrayContents = document.querySelectorAll('.accordion__content');

arrayTriggers.forEach((trigger) => {
	trigger.addEventListener('click', function () {
		if (this.classList.contains('accordion__trigger--active')) {
			this.classList.remove('accordion__trigger--active');
			this.nextElementSibling.classList.remove('accordion__content--active');
			return;
		}

		arrayTriggers.forEach((trigger) => {
			trigger.classList.remove('accordion__trigger--active');
		});

		arrayContents.forEach((content) => {
			content.classList.remove('accordion__content--active');
		});

		this.nextElementSibling.classList.add('accordion__content--active');
		this.classList.add('accordion__trigger--active');
	});
});
