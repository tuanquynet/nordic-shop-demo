import {AppFlowActions} from '../constants';
// import {result} from 'lodash';

function addToCart(product, count, myCart) {
	count = count || 1;
	const {products = [], totalItems = 0} = myCart;
	const productId = product.id;
	const addedProduct = products.filter(item => item.id === productId)[0];
	if (addedProduct) {
		addedProduct.quantity += count;
	} else {
		products.push({...product, quantity: count});
	}

	return {
		products,
		totalItems: totalItems + 1,
	}
};

function removeFromCart(product, count, myCart) {
	const {products = []} = myCart;
	let {totalItems = 0} = myCart;
	const productId = product.id;
	let remainingProducts = products;
	if (count === -1) {
		remainingProducts = remainingProducts.filter(item => item.id !== productId);
	} else {
		const selectedProduct = remainingProducts.filter(item => item.id === productId)[0];
		selectedProduct.quantity -= count;
		selectedProduct.quantity = Math.max(selectedProduct.quantity, 0);
	}

	totalItems = remainingProducts.reduce((initial, item) => initial += item.quantity || 0, 0);

	return {
		products: remainingProducts,
		totalItems,
	}
};

const initial = {
	products: [],
	totalItems: 0,
};

function myCart(state = initial, action) {
	const {data, count} = action;
	// let {products, totalItems} = {};

	switch (action.type) {
		case AppFlowActions.ADD_TO_CART_COMPLETE:
			return {
				...state,
				...addToCart(data, count, state),
			};
		case AppFlowActions.REMOVE_FROM_CART_COMPLETE:
			return {
				...state,
				...removeFromCart(data, count, state),
			};
		default:
			return state;

	}
}

export default {
	myCart,
};
