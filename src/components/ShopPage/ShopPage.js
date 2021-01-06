import React from 'react';
import StyledShopPage from './ShopPageStyles';
import ProductCard from '../ProductCard/ProductCard';

import img001 from '../../assets/001.png';

export default function CommunityPage() {
	return (
		<StyledShopPage>
			<section className=''>
				<ProductCard imgSrc={img001} productName='001' price='48' />
			</section>
		</StyledShopPage>
	);
}
