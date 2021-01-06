import React from 'react';
import StyledProductCard from './ProductCardStyles';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
	const { imgSrc, productName, price } = props;
	return (
		<StyledProductCard>
			<Link to='/shop'>
				<img src={imgSrc} alt='' />
				<h3>{productName}</h3>
				<p>${price}</p>
				<button
					className='snipcart-add-item'
					data-item-id='001'
					data-item-price='48.00'
					data-item-url='/shop'
					data-item-description='16in x 20in photo printed on matte paper'
					data-item-image='../../assets/001.png'
					data-item-name='001'
				>
					add to cart
				</button>
			</Link>
		</StyledProductCard>
	);
}
