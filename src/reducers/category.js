import {AppFlowActions} from '../constants';
// import {result} from 'lodash';


function categories(state = {}, action) {
	const {pagination = {}, body} = action.data || {};
	switch (action.type) {
		case AppFlowActions.GET_CATEGORIES_COMPLETE:
			return {
				...state,
				records: body,
				total: pagination.total || body.length,
			};
		case AppFlowActions.GET_ONE_CATEGORY_COMPLETE:
			return {
				...state,
				oneCategory: body,
			};
		default:
			return state;

	}
}

export default {
	categories,
};
