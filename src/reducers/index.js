import { combineReducers } from 'redux';

//To avoid conflict, each module should export reducer with different names
import appReducers from './app';
import categoryReducers from './category';
import productReducers from './product';
import productDetailReducers from './product-detail';

const rootReducer = combineReducers({
	...appReducers,
	...categoryReducers,
	...productReducers,
	...productDetailReducers,
});

export default rootReducer;
