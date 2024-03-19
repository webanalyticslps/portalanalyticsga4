import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  // Substituímos as variáveis pelas correspondentes do HistoricoImplementacoesBugs
  const {
    tipo_registro,
    tipo_implementacao,
    descricao,
    data_hora, // Atenção: Isso deve ser tratado no backend para converter para o tipo Date, se necessário
    status,
    responsavel,
    container_id_gtm,
    propriedade_id_ga4,
    impacto,
    solucao,
    // data_hora_resolucao: Pode ser adicionado se necessário, e se você espera receber do frontend
  } = req.body;

  async function main() {
    // Log das variáveis para debugging
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

    // Aqui você cria o novo registro na tabela correspondente
    // A tabela deve ser ajustada para corresponder à sua estrutura de dados atual
    const createRegistro = await prisma.historicoImplementacoesBugs.create({
      data: {
        tipo_registro,
        tipo_implementacao,
        descricao,
        data_hora, // Certifique-se que este valor esteja corretamente formatado como Date
        status,
        responsavel,
        container_id_gtm, // Campos opcionais devem ser tratados para evitar erros
        propriedade_id_ga4,
        impacto,
        solucao,
        // data_hora_resolucao: Pode ser adicionado aqui se estiver incluído no req.body
      },
    });

    // Retorna o registro criado para o cliente
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
