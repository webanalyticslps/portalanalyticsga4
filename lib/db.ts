import { prisma } from './prisma';


// EVENTOS

export interface Eventos {
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


export interface Metricas {
	id: number;
	nome: string;
	escopo: string;
	descricao: string;
}

export async function getAllMetricas() {
	const data = await prisma.metricas.findMany();
	return data;
}

export async function createMetricas(detalhe: string, descricao: string, nome: string) {
	await prisma.metricas.create({
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
	exemplos: string;
}

export async function getAllParametros() {
	const data = await prisma.parametros.findMany();
	return data;
}

export async function createParametros(escopo: string, descricao: string, nome: string, exemplos: string) {
	await prisma.parametros.create({
		data: {
			escopo,
			descricao,
			nome,
			exemplos
		}
	});
}

// CÓDIGOS

export interface ListaDeCodigos {
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

export async function createListaDeCodigos(id: int, codigo: string, evento: string, sessao: string, subsessao: string) {
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
