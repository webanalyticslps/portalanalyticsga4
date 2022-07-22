import { PrismaClient } from '@prisma/client';
import Express from 'express';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const prisma = new PrismaClient();
	const nomeevento = req.body.nomeevento;
	const nomesessao = req.body.nomesessao;
	const nomesubsessao = req.body.nomesubsessao;

	async function main() {
		console.log(nomeevento, nomesessao, nomesubsessao);

		const idevento = await prisma.eventos.findUnique({
			where: {
				nome: nomeevento
			},
			select: {
				id: true
			}
		});

		const idsessao = await prisma.sessoes.findUnique({
			where: {
				valor: nomesessao
			},
			select: {
				id: true
			}
		});

		const idsubsessao = await prisma.subsessoes.findUnique({
			where: {
				valor: nomesubsessao
			},
			select: {
				id: true
			}
		});

		console.log(idevento, idsessao, idsubsessao);
		console.log("teste");

		const codigocompleto = idevento!.id + "." + idsessao!.id + "." + idsubsessao!.id;

		const createevento = await prisma.listaDeCodigos.create({
			data: {
				codigo: codigocompleto,
				evento: nomeevento,
				sessao: nomesessao,
				subsessao: nomesubsessao
			}
		});

		// 	const newArtist = await prisma.artist.create({
		// 		data: {
		// 			name: 'Osinachi Kalu',
		// 			email: 'sinach@sinachmusic.com',
		// 			songs: {
		// 				create: {
		// 					title: 'I Know Who I Am'
		// 				}
		// 			}
		// 		}
		// 	});
		// 	console.log('Created new artist: ', newArtist);

		// 	const allArtists = await prisma.artist.findMany({
		// 		include: { songs: true }
		// 	});
		// 	console.log('All artists: ');
		// 	console.dir(allArtists, { depth: null });
	}

	main().catch((e) => console.error(e)).finally(async () => await prisma.$disconnect());
}
