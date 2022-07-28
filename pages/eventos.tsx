import { GetServerSideProps } from 'next';
import { getAllEventos, Eventos } from '../lib/db';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export const getServerSideProps: GetServerSideProps = async () => {
	const eventos = await getAllEventos();
	return {
		props: {
			eventos
		}
	};
};

interface PostProps {
	eventos: Eventos[];
}

export default withPageAuthRequired(function Profile({ user }) {
	return (
		<div className="container">
			<h2>
				<p className="text-center font-weight-bold">EVENTOS</p>
			</h2>
			<div>
				<div className="row text-light bg-lopes border border-dark">
					<div className="col-sm">ID</div>
					<div className="col-sm">Nome</div>
					<div className="col-sm">Escopo</div>
					<div className="col-sm">Descrição</div>
				</div>
			</div>
			{eventos.map((Eventos, index) => (
				<div key={Eventos.id} className="row border border-dark">
					<div className="col-sm">{Eventos.id}</div>
					<div className="col-sm">{Eventos.nome}</div>
					<div className="col-sm">{Eventos.escopo}</div>
					<div className="col-sm">{Eventos.descricao}</div>
				</div>
			))}
		</div>
	);
});
