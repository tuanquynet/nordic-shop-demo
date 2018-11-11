import {take, call, put} from 'redux-saga/effects';
import {AppFlowActions} from '../constants';
// import {doFetch as fetch} from '../helpers/request';

function* addToCart(data, count) {
	yield put({type: AppFlowActions.SENDING_REQUEST, sending:true});

	try {
		// at the moment, we don't integrate with API server, therefore we trigger ADD_TO_CART_COMPLETE immediately
		// let response = yield call(fetch, url);
		// yield put({type:AppFlowActions.SENDING_REQUEST, sending: false});
		yield put({type:AppFlowActions.ADD_TO_CART_COMPLETE, data, count});
		return data;
	} catch (error) {
		yield put({type: AppFlowActions.REQUEST_ERROR, error: error.message});
	}
}

export function* addToCartFlow() {
	const INFINITE = true;

	while (INFINITE) {
		let request = yield take(AppFlowActions.ADD_TO_CART_REQUEST);
		let {data, count} = request;

		yield call(addToCart, data, count);
	}
}

function* removeFromCart(data, count) {
	yield put({type: AppFlowActions.SENDING_REQUEST, sending:true});

	try {
		// at the moment, we don't integrate with API server, therefore we trigger ADD_TO_CART_COMPLETE immediately
		// let response = yield call(fetch, url);
		// yield put({type:AppFlowActions.SENDING_REQUEST, sending: false});
		yield put({type:AppFlowActions.REMOVE_FROM_CART_COMPLETE, data, count});
		return data;
	} catch (error) {
		yield put({type: AppFlowActions.REQUEST_ERROR, error: error.message});
	}
}

export function* removeFromCartFlow() {
	const INFINITE = true;

	while (INFINITE) {
		let request = yield take(AppFlowActions.REMOVE_FROM_CART_REEQUEST);
		let {data, count} = request;
		yield call(removeFromCart, data, count);
	}
}
