import {AppFlowActions} from '../constants';

export function addToCart(data, count) {
	return { type: AppFlowActions.ADD_TO_CART_REQUEST, data, count};
}

export function removeFromCart(data, count) {
	return { type: AppFlowActions.REMOVE_FROM_CART_REEQUEST, data, count};
}
