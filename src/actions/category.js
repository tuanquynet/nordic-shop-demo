import {AppFlowActions} from '../constants';

export function getCategories(url) {
	return { type: AppFlowActions.GET_CATEGORIES_REQUEST, url: url};
}
