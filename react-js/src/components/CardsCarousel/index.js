import React, { useState } from 'react';
import Card from '../Card';
import './styles.css';
import arrowLeftWhite from '../../assets/images/icons/arrow-left-white.svg';
import arrowRightWhite from '../../assets/images/icons/arrow-right-white.svg';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const CardsCarousel = ({ cards }) => {
	const { width } = useWindowDimensions();
	const [currentCard, setCurrentCard] = useState(0);

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
		}

		if (direction === 'right') {
			setCurrentCard(currentCard + 1);
		}
	};

	return (
		<div className="cardsCarousel">
			<button
				className="cardsCarousel__controller__left"
				onClick={() => slide('left')}
			>
				<img src={arrowLeftWhite} alt="Go left" />
			</button>
			{width < 767 ? (
				<Card
					title={cards[currentCard].title}
					text={cards[currentCard].text}
					image={cards[currentCard].image}
				/>
			) : (
				<>
					<Card
						title={cards[currentCard].title}
						text={cards[currentCard].text}
						image={cards[currentCard].image}
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
					/>
				</>
			)}
			<button
				className="cardsCarousel__controller__right"
				onClick={() => slide('right')}
			>
				<img src={arrowRightWhite} alt="Go right" />
			</button>
		</div>
	);
};

export default CardsCarousel;
