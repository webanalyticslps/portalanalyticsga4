import { PrismaClient } from "@prisma/client";
import Express from "express";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  const idcontainer1 = req.body.idcontainer1;
  const valorcontainer1 = req.body.valorcontainer1;
  const gtmcontainer1 = req.body.gtmcontainer1;

  async function main() {
    console.log(idcontainer1, valorcontainer1, gtmcontainer1);

    console.log("teste");

    const createevento = await prisma.containers1.create({
      data: {
        id: idcontainer1,
        valor: valorcontainer1,
        gtm: gtmcontainer1,
      },
    });
  }

  main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
}
