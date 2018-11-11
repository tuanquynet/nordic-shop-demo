import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store/configureStore';
import createRoutes from './routes';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


const routes = createRoutes();
// const store = configureStore();
const {store, persistor} = configureStore();

function renderRoot( ) {
	ReactDOM.render((
		<Provider store={store} >
			<PersistGate loading={null} persistor={persistor}>
				{routes}
		    </PersistGate>
		</Provider>
	), document.getElementById('root'));
}

// first render the app
renderRoot();

// watch and re-render with new language select
store.subscribe(() => {
	console.log('store change');
});

registerServiceWorker();
