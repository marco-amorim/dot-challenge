import React, { useState } from 'react';
import Card from '../Card';
import './styles.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const CardsCarousel = ({ cards }) => {
	const { width } = useWindowDimensions();
	const [currentCard, setCurrentCard] = useState(0);
	const [slideLeftAnimation, setSlideLeftAnimation] = useState('');
	const [slideRightAnimation, setSlideRightAnimation] = useState('');

	const slide = (direction) => {
		if (currentCard === 6 && direction === 'right' && width > 767) {
			return;
		}

		if (
			(currentCard === 0 && direction === 'left') ||
			(currentCard === 8 && direction === 'right')
		) {
			return;
		}

		if (direction === 'left') {
			setCurrentCard(currentCard - 1);
			setSlideLeftAnimation('slide-in-left');
			setTimeout(() => {
				setSlideLeftAnimation('');
			}, 500);
		}

		if (direction === 'right') {
			setCurrentCard(currentCard + 1);
			setSlideRightAnimation('slide-in-right');
			setTimeout(() => {
				setSlideRightAnimation('');
			}, 500);
		}
	};

	return (
		<div className="cardsCarousel">
			<button
				className="cardsCarousel__controller__left cardsCarousel--controller--color"
				onClick={() => slide('left')}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 50 35"
					width="50"
					height="35"
				>
					<path d="M50.01 14L13.28 14L27.18 0.01L17.35 0.01L-0.01 17.5L17.35 34.99L27.18 34.99L13.28 21L50.01 21L50.01 14Z" />
				</svg>
			</button>
			{width < 767 ? (
				<Card
					title={cards[currentCard].title}
					text={cards[currentCard].text}
					image={cards[currentCard].image}
					animation={slideLeftAnimation || slideRightAnimation}
				/>
			) : (
				<>
					<Card
						title={cards[currentCard].title}
						text={cards[currentCard].text}
						image={cards[currentCard].image}
						animation={slideLeftAnimation}
					/>
					<Card
						title={cards[currentCard + 1].title}
						text={cards[currentCard + 1].text}
						image={cards[currentCard + 1].image}
					/>

					<Card
						title={cards[currentCard + 2].title}
						text={cards[currentCard + 2].text}
						image={cards[currentCard + 2].image}
						animation={slideRightAnimation}
					/>
				</>
			)}
			<button
				className="cardsCarousel__controller__right cardsCarousel--controller--color"
				onClick={() => slide('right')}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 50 35"
					width="50"
					height="35"
				>
					<path d="M-0.01 21L36.72 21L22.82 34.99L32.65 34.99L50.01 17.5L32.65 0.01L22.82 0.01L36.72 14L-0.01 14L-0.01 21Z" />
				</svg>
			</button>
		</div>
	);
};

export default CardsCarousel;
