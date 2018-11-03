import {AppFlowActions} from '../constants';

export function getCategories(url) {
	return { type: AppFlowActions.GET_CATEGORIES_REQUEST, url: url};
}

export function getOneCategory(url) {
	return { type: AppFlowActions.GET_ONE_CATEGORY_REQUEST, url: url};
}
