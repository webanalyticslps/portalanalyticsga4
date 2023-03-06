import { prisma } from './prisma';


// EVENTOS

export interface Eventos {
	id: number;
	nome: string;
	descricao: string;
	parametros: string;
	coletaAutomatica: boolean;
}

export async function getAllEventos() {
	const data = await prisma.eventos.findMany();
	return data;
}

export async function createEventos(id: number, nome: string, descricao: string, parametros: string, coletaAutomatica: boolean) {
	await prisma.eventos.create({
		data: {
			id,
            nome,
			descricao,
			parametros,
			coletaAutomatica
		}
	});
}

// MÉTRICAS


export interface Metricas {
	id: number;
	nome: string;
	descricao: string;
	detalhe: string;
	tipo: string;
}

export async function getAllMetricas() {
	const data = await prisma.metricas.findMany();
	return data;
}

export async function createMetricas(detalhe: string, descricao: string, nome: string, tipo: string) {
	await prisma.metricas.create({
		data: {
			descricao,
			detalhe,
			nome,
			tipo
		}
	});
}


// PARAMETROS

export interface Parametros {
	id: number;
	nome: string;
	escopo: string;
	descricao: string;
	exemplos: string;
}

export async function getAllParametros() {
	const data = await prisma.parametros.findMany();
	return data;
}

export async function createParametros(escopo: string, descricao: string, nome: string, exemplos: string, dimensao: string) {
	await prisma.parametros.create({
		data: {
			escopo,
			descricao,
			nome,
			exemplos,
			dimensao
		}
	});
}

// CÓDIGOS

export interface Codigos {
	id: number;
	codigo: string;
	evento: string;
	site: string;
	container1: string;
	container2: string;
	identificador: string;
}

export async function getAllListaDeCodigos() {
	const data = await prisma.listaDeCodigos.findMany();
	return data;
}

export async function createListaDeCodigos(id: number, codigo: string, evento: string, site: string, container1: string, container2: string, identificador: string ) {
	await prisma.listaDeCodigos.create({
		data: {
			id,
			codigo,
			evento,
			site,
			container1,
			container2,
			identificador
		}
	});
}

// 

export interface Sites {
	id: string;
	valor: string;
	gtm: boolean;
}

export async function getAllSites() {
	const data = await prisma.sites.findMany();
	return data;
}

export async function createSites(id: string, valor: string, gtm: boolean) {
	await prisma.sites.create({
		data: {
			id,
			valor,
			gtm
		}
	});
}


// CONTAINERS 1

export interface Containers1 {
	id: string;
	valor: string;
	gtm: boolean;
}

export async function getAllContainers1() {
	const data = await prisma.containers1.findMany();
	return data;
}

export async function createContainers1(id: string, valor: string, gtm: boolean) {
	await prisma.containers1.create({
		data: {
			id,
			valor,
			gtm
		}
	});
}

// CONTAINERS 2

export interface Containers2 {
	id: string;
	valor: string;
	gtm: boolean;
}

export async function getAllContainers2() {
	const data = await prisma.containers2.findMany();
	return data;
}

export async function createContainers2(id: string, valor: string, gtm: boolean) {
	await prisma.containers2.create({
		data: {
			id,
			valor,
			gtm
		}
	});
}

// IDENTIFICADORES

export interface Identificadores {
	id: string;
	valor: string;
	gtm: boolean;
}

export async function getAllIdentificadores() {
	const data = await prisma.identificadores.findMany();
	return data;
}

export async function createIdentificadores(id: string, valor: string, gtm: boolean) {
	await prisma.identificadores.create({
		data: {
			id,
			valor,
			gtm
		}
	});
}