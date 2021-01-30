import React from 'react';
import Card from '../Card';
import './styles.css';
import img from '../../assets/images/img1.jpg';

const CardsCarousel = () => {
	return (
		<div className="cardsCarousel">
			<Card
				title="LOREM IPSUM"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
				image={img}
			/>
		</div>
	);
};

export default CardsCarousel;
