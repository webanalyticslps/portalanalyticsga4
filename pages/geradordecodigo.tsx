import { GetServerSideProps } from 'next';
import { getAllListaDeCodigos, Codigos } from '../lib/db';
import { getAllSubsessoes, Subsessoes } from '../lib/db';
import { getAllEventos, Eventos } from '../lib/db';
import { getAllSessoes, Sessoes } from '../lib/db';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

declare var formEventos: any
declare var formSessoes: any
declare var formSubsessoes: any

export const getServerSideProps: GetServerSideProps = async () => {
	const listadecodigos = await getAllListaDeCodigos();
	const eventos = await getAllEventos();
	const sessoes = await getAllSessoes();
	const subsessoes = await getAllSubsessoes();
	return {
		props: {
			eventos,
			listadecodigos,
			sessoes,
			subsessoes
		}
	};
};

interface PostProps {
	listadecodigos: Codigos[];
	eventos: Eventos[];
	sessoes: Sessoes[];
	subsessoes: Subsessoes[];
}

export default withPageAuthRequired(function Profile({ listadecodigos, eventos, sessoes, subsessoes }) {
	const [ codigo, setCodigo ] = useState('');
	const [ evento, setEvento ] = useState('');
	const [ sessao, setSessao ] = useState('');
	const [ subsessao, setSubsessao ] = useState('');

	const handleClick = async (nomeevento: any, nomesessao: any, nomesubsessao: any) => {
		const axios = require('axios');
		const res = await axios.post('/api/1-find-evento-id-axios', {
			nomeevento: nomeevento,
			nomesessao: nomesessao,
			nomesubsessao: nomesubsessao
		});
	};

	return (
		<div className="h-screen bg-gray-500">
			<form className="flex justify-center mt-10">
				<div className="bg-gray-50 p-8 rounded-lg">
					<h1 className="text-center mb-4">Gerador de Códigos</h1>
					<div className="flex space-x-2 p-2 bg-white rounded-md">
						<label htmlFor="nomeDoEvento">Nome do evento</label>

						<select id="formEventos" className="form-control">
							{eventos.map((Eventos: any, index: any) => (
								<option
									key={Eventos.nome}
									id={Eventos.nome}
									value={Eventos.nome}
									onChange={(e) => setEvento(e.currentTarget.value)}
								>
									{Eventos.nome}
								</option>
							))}
						</select>

						<label htmlFor="nomeDaSessao">Sessão do evento</label>

						<select id="formSessoes" className="form-control">
							{sessoes.map((Sessoes: any, index: any) => (
								<option
									key={Sessoes.valor}
									id={Sessoes.valor}
									value={Sessoes.valor}
									onChange={(e) => setSessao(e.currentTarget.value)}
								>
									{Sessoes.valor}
								</option>
							))}
						</select>

						<label htmlFor="nomeDaSessao">Subsessão do evento</label>

						<select id="formSubsessoes" className="form-control">
							{subsessoes.map((Subsessoes: any, index: any) => (
								<option
									key={Subsessoes.valor}
									id={Subsessoes.valor}
									value={Subsessoes.valor}
									onChange={(e) => setSubsessao(e.currentTarget.value)}
								>
									{Subsessoes.valor}
								</option>
							))}
						</select>

						<button
							className="bg-lopes px-2 py-1 rounded-md text-white font-semibold"
							onClick={() => handleClick(formEventos.value, formSessoes.value, formSubsessoes.value)}
						>
							Criar
						</button>
					</div>
				</div>
			</form>

			<div className="container">
				<h2>
					<p className="text-center font-weight-bold">LISTA DE CÓDIGOS</p>
				</h2>
				<div>
					<div className="row text-light bg-lopes border border-dark">
						<div className="col-sm">Código</div>
						<div className="col-sm">Evento</div>
						<div className="col-sm">Sessão</div>
						<div className="col-sm">Sub Sessão</div>
					</div>
				</div>
				{listadecodigos.map((ListaDeCodigos: any, index: any) => (
					<div key={ListaDeCodigos.codigo} className="row border border-dark">
						<div className="col-sm">{ListaDeCodigos.codigo}</div>
						<div className="col-sm">{ListaDeCodigos.evento}</div>
						<div className="col-sm">{ListaDeCodigos.sessao}</div>
						<div className="col-sm">{ListaDeCodigos.subsessao}</div>
					</div>
				))}
			</div>
		</div>
	);
});
