import { GetServerSideProps } from 'next';
import { getAllMetricas, Metricas } from '../lib/db';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';

export const getServerSideProps: GetServerSideProps = async () => {
	const metricas = await getAllMetricas();
	return {
		props: {
			metricas
		}
	};
};

interface PostProps {
	metricas: Metrica[];
}

const PáginaDeHistorico = ({ metricas }: PostProps) => {
	return (
		<div className="container">
			<h2>
				<p className="text-center font-weight-bold">HISTÓRICO DE BUGS E IMPLEMENTAÇÕES</p>
			</h2>
		</div>
	);
};

export default PáginaDeHistorico;
