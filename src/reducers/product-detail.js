import {AppFlowActions} from '../constants';
// import {result} from 'lodash';


function productDetail(state = {}, action) {
	const {body} = action.data || {};
	switch (action.type) {
		case AppFlowActions.GET_PRODUCT_DETAIL_COMPLETE:
			return {
				...state,
				detail: body,
			};
		case AppFlowActions.GET_ONE_CATEGORY_COMPLETE:
			return {
				...state,
				category: body,
			};
		default:
			return state;

	}
}

export default {
	productDetail,
};
