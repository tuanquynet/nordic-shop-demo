import {  /*put, call,*/ fork } from 'redux-saga/effects';
import {doFetch as fetch} from '../helpers/request';
import {getCategoryFlow} from './category';
import {getProductByCategoryFlow, getProductsFlow} from './product';

export function fetchApi(url) {
	return fetch( url )
		.then(response => response.json() )
		.then(json => json);
}

export function* startup() {
	yield console.log('Hello Redux-Saga');
}

export default function* root() {
	// combine your saga here
	yield fork(startup);
	yield fork(getCategoryFlow);
	yield fork(getProductByCategoryFlow);
	yield fork(getProductsFlow);

}
