import { combineReducers } from 'redux';

//To avoid conflict, each module should export reducer with different names
import appReducers from './app';
import categoryReducers from './category';
import productReducers from './product';

const rootReducer = combineReducers({
	...appReducers,
	...categoryReducers,
	...productReducers,
});

export default rootReducer;
