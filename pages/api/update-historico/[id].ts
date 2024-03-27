import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query; // Agora o 'id' é extraído da URL

  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const prisma = new PrismaClient();
  const {
    id, // Certifique-se de que o 'id' esteja sendo enviado na requisição
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
    data_hora_resolucao,
  } = req.body;

  // Função para transformar a data/hora recebida para o formato completo UTC
  function formatarDataParaUTC(dataHoraLocal: string) {
    // Cria um objeto Date a partir da string "AAAA-MM-DDThh:mm"
    const dataObj = new Date(dataHoraLocal);
    // Converte para o formato ISO "AAAA-MM-DDThh:mm:ss.sssZ" em UTC
    const dataHoraUTC = dataObj.toISOString();
    return dataHoraUTC;
  }

  function formatarDataResolucaoParaUTC(dataHoraResolucaoLocal: string) {
    // Cria um objeto Date a partir da string "AAAA-MM-DDThh:mm"
    const dataResolucaoObj = new Date(dataHoraResolucaoLocal);
    // Converte para o formato ISO "AAAA-MM-DDThh:mm:ss.sssZ" em UTC
    const dataHoraResolucaoUTC = dataResolucaoObj.toISOString();
    return dataHoraResolucaoUTC;
  }

  async function main() {
    const data_hora_formatada = formatarDataParaUTC(data_hora);
    const data_hora_resolucao_formatada =
      formatarDataResolucaoParaUTC(data_hora_resolucao);

    try {
      const updateRegistro = await prisma.historicoImplementacoesBugs.update({
        where: { id: parseInt(id) }, // O 'id' é usado para localizar o registro a ser atualizado
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
          data_hora_resolucao: data_hora_resolucao_formatada,
        },
      });

      res.status(200).json(updateRegistro);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erro ao atualizar o registro no banco de dados." });
    } finally {
      await prisma.$disconnect();
    }
  }

  await main();
}
