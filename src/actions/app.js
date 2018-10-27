/* © 2017 NauStud.io
 * @author Thanh Tran
 */
import {AppFlowActions} from '../constants';

/**
 * get records
 * @param {string} title endpoint to get list of records
 * @return {void} return nothing
 */
export function changeTitle(title) {
	return { type: AppFlowActions.CHANGE_TITLE, currentPageTitle: title};
}
