import {AppFlowActions} from '../constants';

export function getProducts(url, options) {
	return {type: AppFlowActions.GET_PRODUCTS_REQUEST, url, options};
}

export function getProductDetail(url, options) {
	return {type: AppFlowActions.GET_PRODUCT_DETAIL_REQUEST, url, options};
}

export function getProductByCategory(url, options) {
	return {type: AppFlowActions.GET_PRODUCTS_BY_CATEGORY_REQUEST, url, options};
}
