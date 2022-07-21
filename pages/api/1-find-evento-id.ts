import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const prisma = new PrismaClient();

	async function main() {
		try {
			const novocodigo = JSON.parse(req.body);

			const res = await prisma.eventos.findUnique({
				where: {
				  nome: novocodigo,
				},
				select: {
					id: true
				  },
			  })

			console.log(res);
		} catch (err) {
			console.log(err);
		} 
	}

	main();
}
