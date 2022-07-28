import { GetServerSideProps } from 'next';
import { getAllMetricas, Metricas } from '../lib/db';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps: GetServerSideProps = async () => {
	const metricas = await getAllMetricas();
	return {
		props: {
			metricas
		}
	};
};

interface PostProps {
	metricas: Metricas[];
}

export default withPageAuthRequired(function Profile({ metricas }) {
	return (
		<div className="container">
			<h2>
				<p className="text-center font-weight-bold">MÉTRICAS</p>
			</h2>
			<div>
				<div className="row text-light bg-lopes border border-dark">
					<div className="col-sm">ID</div>
					<div className="col-sm">Nome</div>
					<div className="col-sm">Descrição</div>
					<div className="col-sm">Como é preenchida</div>
				</div>
			</div>
			{metricas.map((Metricas, index) => (
				<div key={Metricas.id} className="row border border-dark">
					<div className="col-sm">{Metricas.id}</div>
					<div className="col-sm">{Metricas.nome}</div>
					<div className="col-sm">{Metricas.descricao}</div>
					<div className="col-sm">{Metricas.detalhe}</div>
				</div>
			))}
		</div>
	);
});