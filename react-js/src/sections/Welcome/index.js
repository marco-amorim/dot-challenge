import React from 'react';
import bgImg1 from '../../assets/images/img1.jpg';
import bgImg2 from '../../assets/images/img2.jpg';
import bgImg3 from '../../assets/images/img3.jpg';
import ImagesCarousel from '../../components/ImagesCarousel';

const Welcome = () => {
	return (
		<section id="welcome">
			<ImagesCarousel
				title="LOREM IPSUM"
				subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
				images={[bgImg1, bgImg2, bgImg3]}
			/>
		</section>
	);
};

export default Welcome;
