import { prisma } from './prisma';


// EVENTOS

export interface Eventos {
	id: number;
	nome: string;
	escopo: string;
	descricao: string;
}

export async function getAllEventos() {
	const data = await prisma.Eventos.findMany();
	return data;
}

export async function createEventos(id: number, escopo: string, descricao: string, nome: string) {
	await prisma.Eventos.create({
		data: {
			id,
            escopo,
			descricao,
			nome
		}
	});
}

// MÉTRICAS


export interface Metricas {
	id: number;
	nome: string;
	escopo: string;
	descricao: string;
}

export async function getAllMetricas() {
	const data = await prisma.Metricas.findMany();
	return data;
}

export async function createMetricas(escopo: string, descricao: string, nome: string) {
	await prisma.Metricas.create({
		data: {
			descricao,
			detalhe,
			nome
		}
	});
}


// PARAMETROS

export interface Parametros {
	id: number;
	nome: string;
	escopo: string;
	descricao: string;
}

export async function getAllParametros() {
	const data = await prisma.Parametros.findMany();
	return data;
}

export async function createParametros(escopo: string, descricao: string, nome: string) {
	await prisma.Parametros.create({
		data: {
			escopo,
			descricao,
			nome
		}
	});
}

// CÓDIGOS

export interface Codigos {
	id: int;
	codigo: string;
	evento: string;
	sessao: string;
	subsessao: string;
}

export async function getAllListaDeCodigos() {
	const data = await prisma.ListaDeCodigos.findMany();
	return data;
}

export async function createListaDeCodigos(codigo: string, evento: string, sessao: string, subsessao: string) {
	await prisma.ListaDeCodigos.create({
		data: {
			id,
			codigo,
			evento,
			sessao,
			subsessao
		}
	});
}

// SESSOES

export interface Sessoes {
	id: string;
	valor: string;
	gtm: boolean;
}

export async function getAllSessoes() {
	const data = await prisma.Sessoes.findMany();
	return data;
}

export async function createSessoes(id: string, valor: string, gtm: boolean) {
	await prisma.Sessoes.create({
		data: {
			id,
			valor,
			gtm
		}
	});
}


// SUBSESSOES

export interface Subsessoes {
	id: string;
	valor: string;
	gtm: boolean;
}

export async function getAllSubsessoes() {
	const data = await prisma.Subsessoes.findMany();
	return data;
}

export async function createSubsessoes(id: string, valor: string, gtm: boolean) {
	await prisma.Subsessoes.create({
		data: {
			id,
			valor,
			gtm
		}
	});
}
