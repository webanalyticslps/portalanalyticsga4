import { PrismaClient } from "@prisma/client";
import Express from "express";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  const nomeevento = req.body.nomeevento;
  const quandoevento = req.body.quandoevento;
  const parametroevento = req.body.parametroevento;
  const coletaevento = req.body.coletaevento;

  async function main() {
    console.log(
      nomeevento,
      quandoevento,
      parametroevento,
      coletaevento,
    );

    console.log("teste");

    const createevento = await prisma.eventos.create({
      data: {
        nome: nomeevento,
        descricao: quandoevento,
        parametros: parametroevento,
        coletaAutomatica: coletaevento,
      },
    });
  }

  main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
}
