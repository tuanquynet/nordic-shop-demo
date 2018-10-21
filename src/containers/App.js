/* REACT CORE */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'



/* Import Views */
import HomePage from '../containers/HomePage';
import Category from '../containers/Category';
import ProductDetailPage from '../containers/ProductDetailPage';
import Contact from '../containers/Contact';
import NoMatch from '../containers/NoMatch';

import './App.css'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/categories' component={Category} />
        <Route exact path='/categories/:categoryId?' component={Category} />
        <Route exact path='/product/:id' component={ProductDetailPage} />
        <Route exact path='/promotions' component={() => "Welcome To Promotions Page"} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
