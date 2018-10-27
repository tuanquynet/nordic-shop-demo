import {
	AppFlowActions
} from '../constants';

/*
 * The pageTitle state
 */
function pageTitle(state = 'vi', action) {
	switch (action.type) {
		case AppFlowActions.CHANGE_TITLE:
			return action.currentPageTitle;
		default:
			return state;
	}
}

export default {
	pageTitle,
};
