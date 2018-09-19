import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroBanner from '../../components/HeroBanner';
import NewArrivalBlock from './../../components/NewArrivalBlock';
import DealOfTheWeekBlock from '../../components/DealOfTheWeekBlock';
import ShippingInfoBar from './../../components/ShippingInfoBar/index';
import QuickCategoryBar from '../../components/QuickCategoryBar';

import './style.css'

class HomePage extends Component {
	render() {
		return (
			<div className="super_container">
				<Header />
				<HeroBanner />
				<QuickCategoryBar />
				<div> 
					<NewArrivalBlock/>
          			<DealOfTheWeekBlock/>
          			<ShippingInfoBar/>
		  		</div>
				<Footer />
			</div>
		);
	}
}

export default HomePage;
