import {AppFlowActions} from '../constants';
// import {result} from 'lodash';


function products(state = {}, action) {
	let {pagination = {}, body} = action.data || {};
	switch (action.type) {
		case AppFlowActions.GET_PRODUCTS_COMPLETE:
		case AppFlowActions.GET_PRODUCTS_BY_CATEGORY_COMPLETE:
			return {
				...state,
				records: body,
				total: pagination.total || body.length,
			};
		default:
			return state;
	}
}

export default {
	products,
};
