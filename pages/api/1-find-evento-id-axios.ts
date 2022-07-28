import { PrismaClient } from '@prisma/client';
import Express from 'express';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const prisma = new PrismaClient();
	const nomeevento = req.body.nomeevento;
	const nomesite = req.body.nomesite;
	const nomecontainer1 = req.body.nomecontainer1;
	const nomecontainer2 = req.body.nomecontainer2;
	const nomeidentificador = req.body.nomeidentificador;

	async function main() {
		console.log(nomeevento, nomesite, nomecontainer1, nomecontainer2, nomeidentificador);

		const idevento = await prisma.eventos.findUnique({
			where: {
				nome: nomeevento
			},
			select: {
				id: true
			}
		});

		const idsite = await prisma.sites.findUnique({
			where: {
				valor: nomesite
			},
			select: {
				id: true
			}
		});

		const idcontainer1 = await prisma.containers1.findUnique({
			where: {
				valor: nomecontainer1
			},
			select: {
				id: true
			}
		});

		const idcontainer2 = await prisma.containers2.findUnique({
			where: {
				valor: nomecontainer2
			},
			select: {
				id: true
			}
		});

		const ididentificador = await prisma.identificadores.findUnique({
			where: {
				valor: nomeidentificador
			},
			select: {
				id: true
			}
		});

		console.log(idevento, idsite, idcontainer1, idcontainer2, ididentificador);
		console.log("teste");

		const codigocompleto = idevento!.id + "." + idsite!.id + "." + idcontainer1!.id + "." + idcontainer2!.id + "." + ididentificador!.id; 

		const createevento = await prisma.listaDeCodigos.create({
			data: {
				codigo: codigocompleto,
				evento: nomeevento,
				site: nomesite,
				container1: nomecontainer1,
				container2: nomecontainer2,
				identificador: nomeidentificador
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
