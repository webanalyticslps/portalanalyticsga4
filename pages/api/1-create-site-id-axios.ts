import { PrismaClient } from "@prisma/client";
import Express from "express";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  const idsite = req.body.idsite;
  const valorsite = req.body.valorsite;
  const gtmsite = req.body.gtmsite;

  async function main() {
    console.log(idsite, valorsite, gtmsite);

    console.log("teste");

    const createevento = await prisma.sites.create({
      data: {
        id: idsite,
        valor: valorsite,
        gtm: gtmsite,
      },
    });
  }

  main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
}
