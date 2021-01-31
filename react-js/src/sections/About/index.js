import React from 'react';
import img from '../../assets/images/img1.png';
import './styles.css';

const About = () => {
	return (
		<section id="about">
			<div className="about">
				<img src={img} alt="nature" className="about__image" />

				<div className="about__text">
					<h1>LOREM IPSUM</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
						accumsan lacus vel facilisis.
					</p>

					<p className="about--paragraph--bold">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
						accumsan lacus vel facilisis.
					</p>

					<p className="about--paragraph--italic">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
						accumsan lacus vel facilisis.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
						accumsan lacus vel facilisis.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
