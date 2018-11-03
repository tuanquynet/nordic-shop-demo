import {take, call, put} from 'redux-saga/effects';
import {AppFlowActions} from '../constants';
import {doFetch as fetch} from '../helpers/request';
// import appConfig from '../config';

function* getCategory(url) {
	yield put({type: AppFlowActions.SENDING_REQUEST, sending:true});

	try {
		let response = yield call(fetch, url);
		yield put({type:AppFlowActions.SENDING_REQUEST, sending: false});
		yield put({type:AppFlowActions.GET_CATEGORIES_COMPLETE, data:response});
		return response;
	} catch (error) {
		yield put({type: AppFlowActions.REQUEST_ERROR, error: error.message});
	}
}

export function* getCategoryFlow() {
	const INFINITE = true;

	while (INFINITE) {
		let request = yield take(AppFlowActions.GET_CATEGORIES_REQUEST);
		let {url} = request;

		yield call(getCategory, url);
	}
}

function* getOneCategory(url) {
	yield put({type: AppFlowActions.SENDING_REQUEST, sending:true});

	try {
		let response = yield call(fetch, url);
		yield put({type:AppFlowActions.SENDING_REQUEST, sending: false});
		yield put({type:AppFlowActions.GET_ONE_CATEGORY_COMPLETE, data:response});
		return response;
	} catch (error) {
		yield put({type: AppFlowActions.REQUEST_ERROR, error: error.message});
	}
}

export function* getOneCategoryFlow() {
	const INFINITE = true;

	while (INFINITE) {
		let request = yield take(AppFlowActions.GET_ONE_CATEGORY_REQUEST);
		let {url} = request;

		yield call(getOneCategory, url);
	}
}
