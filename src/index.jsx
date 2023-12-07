import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from '../src/components/screens/Home/Home';
import Layout from './components/layout/Layout';
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
