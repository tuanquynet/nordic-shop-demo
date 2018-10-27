import {forEach, result as _result} from 'lodash';
// import {expireUserSession} from '../actions';

const defaultHeaders = {
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'application/json'
};

export function doFetch(url, options = {}) {
	var request;

	if (typeof url === 'string') {
		request = new Request(url, options || {});
	} else {
		request = url;
		forEach(defaultHeaders, (value, key) => {
			if (!(options.headers && options.headers[key])) {
				request.headers.set(key, defaultHeaders[key]);
			}
		});
	}

	const handleSessionExpired = (response) => {
		console.log('TBC');
		return response;
	};

	return fetch(request).then((response) => {

		return response.json().then(handleSessionExpired);
	});
}
