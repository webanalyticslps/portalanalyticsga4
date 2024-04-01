import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  const {
    tipo_registro,
    tipo_implementacao,
    descricao,
    data_hora,
    status,
    responsavel,
    container_id_gtm,
    propriedade_id_ga4,
    impacto,
    solucao,
  } = req.body;

  // Função para transformar a data/hora recebida para o formato completo UTC
  function formatarDataParaUTC(dataHoraLocal: string) {
    try {
      const dataObj = new Date(dataHoraLocal);
      if (isNaN(dataObj.getTime())) {
        // Verifica se a data é inválida
        throw new Error("Data inválida");
      }
      return dataObj.toISOString();
    } catch (error) {
      console.error(error);
      return null; // Ou trate de uma maneira que faça sentido para sua aplicação
    }
  }

  async function main() {
    console.log(
      tipo_registro,
      tipo_implementacao,
      descricao,
      status,
      responsavel,
      container_id_gtm,
      propriedade_id_ga4,
      impacto,
      solucao
    );

    const data_hora_formatada = formatarDataParaUTC(data_hora);

    const createRegistro = await prisma.historicoImplementacoesBugs.create({
      data: {
        tipo_registro,
        tipo_implementacao,
        descricao,
        data_hora: data_hora_formatada, // Usa a data formatada
        status,
        responsavel,
        container_id_gtm,
        propriedade_id_ga4,
        impacto,
        solucao,
      },
    });

    res.status(200).json(createRegistro);
  }

  main()
    .catch((e) => {
      console.error(e);
      res
        .status(500)
        .json({ error: "Erro ao criar o registro no banco de dados." });
    })
    .finally(async () => await prisma.$disconnect());
}
