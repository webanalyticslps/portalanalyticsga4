import Head from 'next/head';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/index.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { UserProvider } from '@auth0/nextjs-auth0';


import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
//	<script src="http://localhost:8097" />;
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap');
	}, []);

	return (
		<UserProvider>
		<SSRProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SSRProvider>
		</UserProvider>
	);
}

export default MyApp;
// KindaCode.com
