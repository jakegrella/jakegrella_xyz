import React from 'react';
import { Link } from 'react-router-dom';
import StyledHomePage from './HomePageStyles';

export default function HomePage() {
	return (
		<StyledHomePage>
			<section className='home-banner'>
				<Link to='/shop'>
					<img
						src='https://images.unsplash.com/photo-1597116635010-8b65f0dce76c'
						alt='ocean'
					/>
				</Link>
				{/* <Link to='/community'>
					COMMUNITY
					<img
						src='https://images.unsplash.com/photo-1606191027636-a5a286e8fd7a'
						alt='loading motorcycle'
					/>
				</Link> */}
			</section>
		</StyledHomePage>
	);
}
