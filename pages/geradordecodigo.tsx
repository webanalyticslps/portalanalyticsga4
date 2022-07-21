import { GetServerSideProps } from 'next';
import { getAllListaDeCodigos, ListaDeCodigos } from '../lib/db';
import { getAllSubsessoes, Subsessoes } from '../lib/db';
import { getAllEventos, Eventos } from '../lib/db';
import { getAllSessoes, Sessoes } from '../lib/db';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Link from 'next/link';

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
	listadecodigos: Codigo[];
	eventos: Evento[];
	sessoes: Sessao[];
	subsessoes: Subsessao[];
}

const PaginaGeradorDeCodigos = ({ listadecodigos, eventos, sessoes, subsessoes }: PostProps) => {
	const [ codigo, setCodigo ] = useState('');
	const [ evento, setEvento ] = useState('');
	const [ sessao, setSessao ] = useState('');
	const [ subsessao, setSubsessao ] = useState('');

	const handleClick = async (nomeevento, nomesessao, nomesubsessao) => {
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
							{eventos.map((Eventos, index) => (
								<option
									id={Eventos.nome}
									value={Eventos.nome}
									onChange={(e) => setEvento(e.currentTarget.value)}
								>
									{Eventos.nome}
								</option>
							))}
						</select>

						<label for="nomeDaSessao">Sessão do evento</label>

						<select id="formSessoes" className="form-control">
							{sessoes.map((Sessoes, index) => (
								<option
									id={Sessoes.valor}
									value={Sessoes.valor}
									onChange={(e) => setSessao(e.currentTarget.value)}
								>
									{Sessoes.valor}
								</option>
							))}
						</select>

						<label for="nomeDaSessao">Subsessão do evento</label>

						<select id="formSubsessoes" className="form-control">
							{subsessoes.map((Subsessoes, index) => (
								<option
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
				{listadecodigos.map((ListaDeCodigos, index) => (
					<div className="row border border-dark">
						<div className="col-sm">{ListaDeCodigos.codigo}</div>
						<div className="col-sm">{ListaDeCodigos.evento}</div>
						<div className="col-sm">{ListaDeCodigos.sessao}</div>
						<div className="col-sm">{ListaDeCodigos.subsessao}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PaginaGeradorDeCodigos;
