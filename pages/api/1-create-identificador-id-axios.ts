import { PrismaClient } from "@prisma/client";
import Express from "express";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  const ididentificador = req.body.ididentificador;
  const valoridentificador = req.body.valoridentificador;
  const gtmidentificador = req.body.gtmidentificador;

  async function main() {
    console.log(ididentificador, valoridentificador, gtmidentificador);

    console.log("teste");

    const createevento = await prisma.identificadores.create({
      data: {
        id: ididentificador,
        valor: valoridentificador,
        gtm: gtmidentificador,
      },
    });
  }

  main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
}
