import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import {Provider} from 'react-redux';
import {store} from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Layout>
				<Home />
			</Layout>
		</Provider>
	</React.StrictMode>
);
