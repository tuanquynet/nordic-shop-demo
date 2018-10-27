import {take, call, put} from 'redux-saga/effects';
import {AppFlowActions} from '../constants';
import {doFetch as fetch} from '../helpers/request';

function* getProducts(url) {
	yield put({type: AppFlowActions.SENDING_REQUEST, sending:true});

	try {
		let response = yield call(fetch, url);
		yield put({type:AppFlowActions.SENDING_REQUEST, sending: false});
		yield put({type:AppFlowActions.GET_PRODUCTS_COMPLETE, data:response});
		return response;
	} catch (error) {
		yield put({type: AppFlowActions.REQUEST_ERROR, error: error.message});
	}
}

export function* getProductsFlow() {
	const INFINITE = true;

	while (INFINITE) {
		let request = yield take(AppFlowActions.GET_PRODUCTS_REQUEST);
		let {url} = request;

		yield call(getProducts, url);
	}
}


function* getProductByCategory(url) {
	yield put({type: AppFlowActions.SENDING_REQUEST, sending:true});

	try {
		let response = yield call(fetch, url);
		yield put({type:AppFlowActions.SENDING_REQUEST, sending: false});
		yield put({type:AppFlowActions.GET_PRODUCTS_BY_CATEGORY_COMPLETE, data:response});
		return response;
	} catch (error) {
		yield put({type: AppFlowActions.REQUEST_ERROR, error: error.message});
	}
}

export function* getProductByCategoryFlow() {
	const INFINITE = true;

	while (INFINITE) {
		let request = yield take(AppFlowActions.GET_PRODUCTS_BY_CATEGORY_REQUEST);
		let {url} = request;

		yield call(getProductByCategory, url);
	}
}
