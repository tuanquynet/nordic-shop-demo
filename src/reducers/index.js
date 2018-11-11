import { combineReducers } from 'redux';

//To avoid conflict, each module should export reducer with different names
import appReducers from './app';
import categoryReducers from './category';
import productReducers from './product';
import productDetailReducers from './product-detail';
import myCartReducers from './my-cart';

const rootReducer = combineReducers({
	...appReducers,
	...categoryReducers,
	...productReducers,
	...productDetailReducers,
	...myCartReducers,
});

export default rootReducer;
