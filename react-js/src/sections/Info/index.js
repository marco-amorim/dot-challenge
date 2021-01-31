import React from 'react';
import Accordion from '../../components/Accordion';
import './styles.css';
import img from '../../assets/images/img1.png';

const Info = () => {
	const accordionData = [
		{
			title: 'Lorem ipsum',
			image: img,
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
		{
			title: 'Lorem ipsum',
			image: img,
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
		{
			title: 'Lorem ipsum',
			image: img,
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
		{
			title: 'Lorem ipsum',
			image: img,
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
		},
	];

	return (
		<section id="info">
			<Accordion content={accordionData} />
		</section>
	);
};

export default Info;
