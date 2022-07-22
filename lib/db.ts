import { prisma } from './prisma';


// EVENTOS

export interface eventos {
	id: number;
	nome: string;
	escopo: string;
	descricao: string;
}

export async function getAllEventos() {
	const data = await prisma.eventos.findMany();
	return data;
}

export async function createEventos(id: number, escopo: string, descricao: string, nome: string) {
	await prisma.eventos.create({
		data: {
			id,
            escopo,
			descricao,
			nome
		}
	});
}

// MÉTRICAS


export interface metricas {
	id: number;
	nome: string;
	escopo: string;
	descricao: string;
}

export async function getAllMetricas() {
	const data = await prisma.metricas.findMany();
	return data;
}

export async function createMetricas(escopo: string, descricao: string, nome: string) {
	await prisma.metricas.create({
		data: {
			escopo,
			descricao,
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
	const data = await prisma.parametros.findMany();
	return data;
}

export async function createParametros(escopo: string, descricao: string, nome: string) {
	await prisma.parametros.create({
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
	const data = await prisma.listadecodigos.findMany();
	return data;
}

export async function createListaDeCodigos(codigo: string, evento: string, sessao: string, subsessao: string) {
	await prisma.listadecodigos.create({
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
	const data = await prisma.sessoes.findMany();
	return data;
}

export async function createSessoes(id: string, valor: string, gtm: boolean) {
	await prisma.sessoes.create({
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
	const data = await prisma.subsessoes.findMany();
	return data;
}

export async function createSubsessoes(id: string, valor: string, gtm: boolean) {
	await prisma.subsessoes.create({
		data: {
			id,
			valor,
			gtm
		}
	});
}
