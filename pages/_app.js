import Head from 'next/head';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/index.css';
import SSRProvider from 'react-bootstrap/SSRProvider';


import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
//	<script src="http://localhost:8097" />;
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap');
	}, []);

	return (
		<SSRProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SSRProvider>
	);
}

export default MyApp;
// KindaCode.com
