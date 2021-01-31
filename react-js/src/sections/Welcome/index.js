import React from 'react';
import bgImgOne from '../../assets/images/img1.png';
import bgImgTwo from '../../assets/images/img2.jpg';
import bgImgThree from '../../assets/images/img3.jpg';
import ImagesCarousel from '../../components/ImagesCarousel';

const Welcome = () => {
	return (
		<section id="welcome">
			<ImagesCarousel
				title="LOREM IPSUM"
				subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
				images={[bgImgOne, bgImgTwo, bgImgThree]}
			/>
		</section>
	);
};

export default Welcome;
