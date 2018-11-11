/*
 * © 2017 NauStud.io
 * @author tien.tran@naustud.io
 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './containers/HomePage';
import Category from './containers/Category';
import Contact from './containers/Contact';
import ProductDetailPage from './containers/ProductDetailPage';
import MyCart from './containers/MyCart';
import NoMatch from './containers/NoMatch';


import {PageNames} from './constants';

const createRoutes = (/* history */) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={PageNames.HOME} component={HomePage} />
				<Route exact path={PageNames.CATEGORY} component={Category} />
				<Route exact path={PageNames.PRODUCT_DETAIL} component={ProductDetailPage} />
				<Route exact path='/promotions' component={() => "Welcome To Promotions Page"} />
				<Route exact path={PageNames.CONTACT} component={Contact} />
				<Route exact path={PageNames.MY_CART} component={MyCart} />
				<Route component={NoMatch} />
			</Switch>
	  </BrowserRouter>
	);
};

export default createRoutes;
