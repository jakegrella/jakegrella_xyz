import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//logo
import logo from '../../assets/jg-logo-svg.svg';
//style
import StyledHeader from './HeaderStyles';
//svg social icons
import { FaShoppingBag } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';

export default function Header() {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};
	const handleLogoClick = () => {
		setClicked(false);
	};

	return (
		<StyledHeader>
			{/* link is preventing logo from showing */}
			<Link to='/' onClick={handleLogoClick}>
				<img src={logo} className='logo' alt='DWYLCO' />
				<div
					hidden
					src='https://cdn.snipcart.com/scripts/2.0/snipcart.js'
					data-api-key='ZDE3ZThkNGYtY2U0Yi00Y2NjLWIyNzAtYWVkY2EzMzZiNmVjNjM3NDQ0MjMwMjM1Mjk3NDU5'
					id='snipcart'
					data-config-modal-style='side'
				></div>
			</Link>
			<nav className='web-nav'>
				<Link to='/work'>work</Link>
				<Link to='/about'>about</Link>
				<Link to='/shop'>shop</Link>
				<a
					className='snipcart-checkout snipcart-summary'
					href='/'
					style={{ textDecoration: 'none' }}
				>
					<FaShoppingBag />
					{/* <span>
						<span>#items: </span>
						<span className='snipcart-items-count'>-</span>
					</span> */}
					<span>
						{/* <span>total: </span> */}
						<span className='snipcart-total-price'></span>
					</span>
				</a>
				{/* <button
					className='snipcart-customer-signin'
					href='#'
					style={{ textDecoration: 'none' }}
				>
					<FaUser />
				</button> */}
			</nav>
			<nav
				className={
					clicked === true ? 'mobile-nav active' : 'mobile-nav inactive'
				}
			>
				<li onClick={handleClick}>
					<Link to='/work'>work</Link>
				</li>
				<li onClick={handleClick}>
					<Link to='/about'>About</Link>
				</li>
				<li onClick={handleClick}>
					<Link to='/shop'>shop</Link>
				</li>
				<li>
					<a
						className='snipcart-checkout snipcart-summary'
						href='/'
						style={{ textDecoration: 'none' }}
					>
						<FaShoppingBag />
						{/* <span>
							<span>#items: </span>
							<span className='snipcart-items-count'>-</span>
						</span> */}
						<span>
							{/* <span>total: </span> */}
							<span className='snipcart-total-price'>-</span>
						</span>
					</a>
				</li>
				{/* <li>
					<button
						className='snipcart-customer-signin'
						href='#'
						style={{ textDecoration: 'none' }}
					>
						<FaUser />
					</button>
				</li> */}
			</nav>
			<button onClick={handleClick} className='mobile-nav-button'>
				<BiMenu size={24} />
			</button>
		</StyledHeader>
	);
}
