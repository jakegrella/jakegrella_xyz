import React from 'react';
import { Route } from 'react-router-dom';
// components
import StyledApp from './AppStyles';

import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import HomePage from './components/homePage/HomePage';
import AboutPage from './components/aboutPage/AboutPage';
import ShopPage from './components/ShopPage/ShopPage';

export default function App() {
	return (
		<StyledApp>
			<Header />

			<Route exact path='/work'>
				<AboutPage />
			</Route>
			<Route exact path='/shop'>
				<ShopPage />
			</Route>
			<Route exact path='/about'>
				<AboutPage />
			</Route>
			<Route exact path='/'>
				<HomePage />
			</Route>

			{/* <Footer /> */}
		</StyledApp>
	);
}
