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
    id,
    tipo_registro,
    tipo_implementacao,
    descricao,
    data_hora,
    status,
    responsavel,
    container_id_gtm,
    propriedade_id_ga4,
    impacto,
    solucao = null, // Atribui null como padrão se solução não for fornecida
    data_hora_resolucao, // Mantém como está, será tratado abaixo
  } = req.body;

  const data_hora_formatada = formatarDataParaUTC(data_hora);
  let data_hora_resolucao_formatada = null; // Padrão como null

  // Só formata data_hora_resolucao se ela for fornecida
  if (data_hora_resolucao) {
    data_hora_resolucao_formatada =
      formatarDataResolucaoParaUTC(data_hora_resolucao);
  }

  try {
    const updateRegistro = await prisma.historicoImplementacoesBugs.update({
      where: { id: parseInt(id) },
      data: {
        tipo_registro,
        tipo_implementacao,
        descricao,
        data_hora: data_hora_formatada,
        status,
        responsavel,
        container_id_gtm,
        propriedade_id_ga4,
        impacto,
        solucao, // Já é tratado como opcional, será null se não fornecido
        data_hora_resolucao: data_hora_resolucao_formatada, // Pode ser null
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
