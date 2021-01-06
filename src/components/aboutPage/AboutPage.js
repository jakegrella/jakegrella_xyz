import React from 'react';
import StyledAboutPage from './AboutPageStyles';
import avatar from '../../assets/avatar.jpeg';

export default function AboutPage() {
	return (
		<StyledAboutPage>
			<section className='about-top'>
				<div className='about-top-imgAndLinks'>
					<img src={avatar} alt='jake grella' />
					<div className='about-top-links'>
						<a href='/' target='blank'>
							resume
						</a>
						<a href='/' target='blank'>
							github
						</a>
						<a href='/' target='blank'>
							linkedin
						</a>
						<a href='/' target='blank'>
							twitter
						</a>
					</div>
				</div>
				<div className='about-top-words'>
					<h2>Hey, I'm Jake.</h2>
					<p>
						I’ve spent my quarantine at Lambda School studying web development
						concepts in their hands-on, immersive program.
					</p>
					<p>
						Prior, I graduated from the University of Illinois at Chicago with a
						Bachelor of Business Administration while taking electives in math
						and computer science.
					</p>
					<p>
						I have interests in photography, music, and sustainable energy. I
						have a strong desire to work on projects that make a difference.
					</p>
				</div>
			</section>
			{/* <section className='about-bottom'>
				<h3>
					Me this
					<br /> month:
				</h3>
				<div className='about-bottom-apiBlurbs'>
					<div>
						<p>commits on github</p>
						<p>44</p>
					</div>
					<div>
						<p>views on unsplash</p>
						<p>764,395</p>
					</div>
					<div>
						<p>songs listened to</p>
						<p>645</p>
					</div>
					<div>
						<p>tweets</p>
						<p>3</p>
					</div>
				</div> 
			</section> */}
		</StyledAboutPage>
	);
}
