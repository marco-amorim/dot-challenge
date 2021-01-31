import React, { useState } from 'react';
import img from '../../assets/images/img1.png';
import './styles.css';

const Accordion = ({ content }) => {
	const [activeItem, setActiveItem] = useState(-1);

	const handleTrigger = (index) => {
		setActiveItem(activeItem === index ? -1 : index);
	};

	const renderAccordion = () => {
		return content.map((accordionItem, index) => {
			return (
				<div key={index} className="accordion__item">
					<div
						className={`accordion__trigger ${
							activeItem === index ? 'accordion__trigger--active' : ''
						}`}
						onClick={() => handleTrigger(index)}
					>
						<p>{accordionItem.title}</p>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 18 25"
							width="18"
							height="25"
						>
							<path
								id="Forma 1"
								d="M7.2 -0.01L7.2 18.36L0 11.41L0 16.32L9 25.01L18 16.32L18 11.41L10.8 18.36L10.8 -0.01L7.2 -0.01Z"
							/>
						</svg>
					</div>

					<div
						className={`accordion__content ${
							activeItem === index ? 'accordion__content--active' : ''
						}`}
					>
						<img src={accordionItem.image} alt="nature" />

						<p>{accordionItem.text}</p>
					</div>
				</div>
			);
		});
	};

	return <div className="accordion">{renderAccordion()}</div>;
};

export default Accordion;
