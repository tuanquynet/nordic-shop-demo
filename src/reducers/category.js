import {AppFlowActions} from '../constants';
// import {result} from 'lodash';


function categories(state = {}, action) {
	switch (action.type) {
		case AppFlowActions.GET_CATEGORIES_COMPLETE:
			const {pagination = {}, body} = action.data || {};
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
	categories,
};
