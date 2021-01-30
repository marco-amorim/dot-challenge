import React from 'react';
import Card from '../Card';
import './styles.css';
import img from '../../assets/images/img1.jpg';
import arrowLeftWhite from '../../assets/images/icons/arrow-left-white.svg';
import arrowRightWhite from '../../assets/images/icons/arrow-right-white.svg';

const CardsCarousel = () => {
	return (
		<div className="cardsCarousel">
			<Card
				title="LOREM IPSUM"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
				image={img}
			/>

			<button className="cardsCarousel__controller__left">
				<img src={arrowLeftWhite} alt="Go left" />
			</button>
			<button className="cardsCarousel__controller__right">
				<img src={arrowRightWhite} alt="Go right" />
			</button>
		</div>
	);
};

export default CardsCarousel;
