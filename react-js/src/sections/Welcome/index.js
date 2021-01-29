import React from 'react';
import bgImg from '../../assets/images/img1.jpg';
import ImagesCarousel from '../../components/ImagesCarousel';

const Welcome = () => {
	return (
		<section id="welcome">
			<ImagesCarousel
				title="LOREM IPSUM"
				subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
				images={[bgImg, bgImg, bgImg]}
			/>
		</section>
	);
};

export default Welcome;
