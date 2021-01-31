import React from 'react';
import CardsCarousel from '../../components/CardsCarousel';
import imgOne from '../../assets/images/img1.png';
import imgTwo from '../../assets/images/img2.jpg';
import imgThree from '../../assets/images/img3.jpg';

const Cards = () => {
	const cardsContent = [
		{
			image: imgOne,
			title: 'LOREM IPSUM',
			text:
				'This is card number 1, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
		{
			image: imgTwo,
			title: 'LOREM IPSUM',
			text:
				'This is card number 2, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
		{
			image: imgThree,
			title: 'LOREM IPSUM',
			text:
				'This is card number 3, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
		{
			image: imgOne,
			title: 'LOREM IPSUM',
			text:
				'This is card number 4, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
		{
			image: imgTwo,
			title: 'LOREM IPSUM',
			text:
				'This is card number 5, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
		{
			image: imgThree,
			title: 'LOREM IPSUM',
			text:
				'This is card number 6, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
		{
			image: imgOne,
			title: 'LOREM IPSUM',
			text:
				'This is card number 7, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
		{
			image: imgTwo,
			title: 'LOREM IPSUM',
			text:
				'This is card number 8, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
		{
			image: imgThree,
			title: 'LOREM IPSUM',
			text:
				'This is card number 9, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
	];

	return (
		<section id="cards">
			<CardsCarousel cards={cardsContent} />
		</section>
	);
};

export default Cards;
