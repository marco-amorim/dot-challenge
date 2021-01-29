import React from 'react';
import './styles.css';

const ImagesCarousel = ({ title, subtitle, images }) => {
	const renderImages = () => {
		return images?.map((image, index) => {
			return <img key={index} src={image} alt={`Carousel Item ${index}`} />;
		});
	};

	return (
		<div className="imgCarousel">
			<div className="imgCarousel__text">
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</div>

			{renderImages()}

			<div className="imgCarousel__buttons">
				<button>O</button>
				<button>O</button>
				<button>O</button>
			</div>
		</div>
	);
};

export default ImagesCarousel;
