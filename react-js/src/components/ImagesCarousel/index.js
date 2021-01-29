import React, { useRef, useState } from 'react';
import './styles.css';

const ImagesCarousel = ({ title, subtitle, images }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [slideAnimation, setSlideAnimation] = useState('');
	const buttonsEl = useRef(null);

	const onSlide = (nextImage) => {
		buttonsEl.current.style.pointerEvents = 'none';

		setSlideAnimation('fade-in-fwd');

		setCurrentImage(nextImage);

		setTimeout(() => {
			buttonsEl.current.style.pointerEvents = 'unset';
			setSlideAnimation('');
		}, 500);
	};

	const renderButtons = (buttons) => {
		return buttons.map((btnNumber, index) => {
			return (
				<button
					key={index}
					onClick={() => onSlide(btnNumber)}
					className={`${
						currentImage === btnNumber ? 'imgCarousel__buttons--active' : ''
					}`}
				/>
			);
		});
	};

	return (
		<div className="imgCarousel">
			<div className="imgCarousel__text">
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</div>

			<img
				src={images[currentImage]}
				alt="Carousel Item"
				className={slideAnimation}
			/>
			<div ref={buttonsEl} className="imgCarousel__buttons">
				{renderButtons([0, 1, 2])}
			</div>
			<div ref={buttonsEl} className="imgCarousel__buttons__bg" />
		</div>
	);
};

export default ImagesCarousel;
