import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const prisma = new PrismaClient();
  const {
    id, // Certifique-se de que o 'id' esteja sendo enviado na requisição
    tipoRegistro,
    tipoImplementacao,
    descricao,
    dataHora,
    status,
    responsavel,
    containerIdGtm,
    propriedadeIdGa4,
    impacto,
    solucao,
    dataHoraResolucao,
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
    const dataHora_formatada = formatarDataParaUTC(dataHora);
    const dataHoraResolucao_formatada =
      formatarDataResolucaoParaUTC(dataHoraResolucao);

    try {
      const updateRegistro = await prisma.historicoImplementacoesBugs.update({
        where: { id: parseInt(id) }, // O 'id' é usado para localizar o registro a ser atualizado
        data: {
          tipoRegistro,
          tipoImplementacao,
          descricao,
          dataHora: dataHora_formatada, // Usa a data formatada
          status,
          responsavel,
          containerIdGtm,
          propriedadeIdGa4,
          impacto,
          solucao,
          dataHoraResolucao: dataHoraResolucao_formatada,
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
