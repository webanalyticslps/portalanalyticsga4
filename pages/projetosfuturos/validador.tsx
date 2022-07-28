import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";


const PaginaValidador = () => {
	return (
		<div className="container">
			<h2>
				<p className="text-center font-weight-bold">Validador</p>
			</h2>
		</div>
	);
};

export default PaginaValidador;
