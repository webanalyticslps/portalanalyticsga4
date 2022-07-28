import { GetServerSideProps } from 'next';
import { getAllListaDeCodigos, Codigos } from '../lib/db';
import { getAllContainers1, Containers1 } from '../lib/db';
import { getAllContainers2, Containers2 } from '../lib/db';
import { getAllSites, Sites } from '../lib/db';
import { getAllIdentificadores, Identificadores } from '../lib/db';
import { getAllEventos, Eventos } from '../lib/db';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

declare var formEventos: any
declare var formSites: any
declare var formContainers1: any
declare var formContainers2: any
declare var formIdentificadores: any

export const getServerSideProps: GetServerSideProps = async () => {
	const listadecodigos = await getAllListaDeCodigos();
	const eventos = await getAllEventos();
	const containers1 = await getAllContainers1();
	const containers2 = await getAllContainers2();
	const sites = await getAllSites();
	const identificadores = await getAllIdentificadores();

	return {
		props: {
			listadecodigos,
			eventos,
			sites,
			containers1,
			containers2,
			identificadores
		}
	};
};

interface PostProps {
	listadecodigos: Codigos[];
	eventos: Eventos[];
	sites: Sites[];
	containers1: Containers1[];
	containers2: Containers2[];
	identificadores: Identificadores[];
}

export default withPageAuthRequired(function Profile({ listadecodigos, eventos, sites, containers1, containers2, identificadores }) {
	const [ codigo, setCodigo ] = useState('');
	const [ evento, setEvento ] = useState('');
	const [ site, setSite ] = useState('');
	const [ container1, setContainer1 ] = useState('');
	const [ container2, setContainer2 ] = useState('');
	const [ identificador, setIdentificador ] = useState('');

	const handleClick = async (nomeevento: any, nomesite: any, nomecontainer1: any, nomecontainer2: any, nomeidentificador: any) => {
		const axios = require('axios');
		const res = await axios.post('/api/1-find-evento-id-axios', {
			nomeevento: nomeevento,
			nomesite: nomesite,
			nomecontainer1: nomecontainer1,
			nomecontainer2: nomecontainer2,
			nomeidentificador: nomeidentificador
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

						<label htmlFor="nomeDoSite">Nome do site</label>

						<select id="formSites" className="form-control">
							{sites.map((Sites: any, index: any) => (
								<option
									key={Sites.valor}
									id={Sites.valor}
									value={Sites.valor}
									onChange={(e) => setSite(e.currentTarget.value)}
								>
									{Sites.valor}
								</option>
							))}
						</select>

						<label htmlFor="nomeDoContainer1">Container 1</label>

						<select id="formContainers1" className="form-control">
							{containers1.map((Containers1: any, index: any) => (
								<option
									key={Containers1.valor}
									id={Containers1.valor}
									value={Containers1.valor}
									onChange={(e) => setContainer1(e.currentTarget.value)}
								>
									{Containers1.valor}
								</option>
							))}
						</select>

						<label htmlFor="nomeDoContainer2">Container 2</label>

						<select id="formContainers2" className="form-control">
							{containers2.map((Containers2: any, index: any) => (
								<option
									key={Containers2.valor}
									id={Containers2.valor}
									value={Containers2.valor}
									onChange={(e) => setContainer2(e.currentTarget.value)}
								>
									{Containers2.valor}
								</option>
							))}
						</select>

						<label htmlFor="nomeDoIdentificador">Identificador</label>

						<select id="formIdentificadores" className="form-control">
							{identificadores.map((Identificadores: any, index: any) => (
								<option
									key={Identificadores.valor}
									id={Identificadores.valor}
									value={Identificadores.valor}
									onChange={(e) => setIdentificador(e.currentTarget.value)}
								>
									{Identificadores.valor}
								</option>
							))}
						</select>

						<button
							className="bg-lopes px-2 py-1 rounded-md text-white font-semibold"
							onClick={() => handleClick(formEventos.value, formSites.value, formContainers1.value, formContainers2.value, formIdentificadores.value)}
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
						<div className="col-sm">Site</div>
						<div className="col-sm">Container 1</div>
						<div className="col-sm">Container 2</div>
						<div className="col-sm">Identificador</div>
					</div>
				</div>
				{listadecodigos.map((ListaDeCodigos: any, index: any) => (
					<div key={ListaDeCodigos.codigo} className="row border border-dark">
						<div className="col-sm">{ListaDeCodigos.codigo}</div>
						<div className="col-sm">{ListaDeCodigos.evento}</div>
						<div className="col-sm">{ListaDeCodigos.site}</div>
						<div className="col-sm">{ListaDeCodigos.container1}</div>
						<div className="col-sm">{ListaDeCodigos.container2}</div>
						<div className="col-sm">{ListaDeCodigos.identificador}</div>
					</div>
				))}
			</div>
		</div>
	);
});
