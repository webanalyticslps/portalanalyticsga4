import { PrismaClient } from "@prisma/client";
import Express from "express";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  const idcontainer2 = req.body.idcontainer2;
  const valorcontainer2 = req.body.valorcontainer2;
  const gtmcontainer2 = req.body.gtmcontainer2;

  async function main() {
    console.log(idcontainer2, valorcontainer2, gtmcontainer2);

    console.log("teste");

    const createevento = await prisma.containers2.create({
      data: {
        id: idcontainer2,
        valor: valorcontainer2,
        gtm: gtmcontainer2,
      },
    });
  }

  main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
}
