import React from 'react';
import './styles.css';

const Card = ({ image, title, text }) => {
	return (
		<div className="card">
			<div className="card__img__container">
				<img className="card__img" src={image} alt="" />
			</div>
			<h2 className="card__title">{title}</h2>
			<p className="card__text">{text}</p>
		</div>
	);
};

export default Card;
