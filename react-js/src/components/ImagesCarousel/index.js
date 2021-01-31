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

			<a href="#cards" className="imgCarousel__arrow__down">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 35 50"
					width="35"
					height="50"
				>
					<path
						id="Forma 1"
						d="M14 -0.01L14 36.72L0.01 22.82L0.01 32.65L17.5 50.01L34.99 32.65L34.99 22.82L21 36.72L21 -0.01L14 -0.01Z"
					/>
				</svg>
			</a>

			<div ref={buttonsEl} className="imgCarousel__buttons">
				{renderButtons([0, 1, 2])}
			</div>
			<div ref={buttonsEl} className="imgCarousel__buttons__bg" />
		</div>
	);
};

export default ImagesCarousel;
