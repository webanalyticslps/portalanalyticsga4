import React, { ChangeEvent, useState, useMemo, useEffect } from "react";
import { GetServerSideProps } from "next";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Button } from "react-bootstrap";
import EditModal from "./editmodal";
import {
  getAllHistoricoImplementacoesBugs,
  HistoricoImplementacoesBugs,
} from "../lib/db";

export const getServerSideProps: GetServerSideProps = async () => {
  const historicoImplementacoesBugs = await getAllHistoricoImplementacoesBugs();
  return { props: { historicoImplementacoesBugs } };
};

interface FormData {
  tipoRegistro: string;
  tipoImplementacao: string;
  descricao: string;
  dataHora: string;
  status: string;
  responsavel: string;
  containerIdGtm: string;
  propriedadeIdGa4: string;
  impacto: string;
  solucao: string;
  dataHoraResolucao: string;
}

interface PostProps {
  historicoImplementacoesBugs: HistoricoImplementacoesBugs[];
}

interface SortConfig {
  key: keyof HistoricoImplementacoesBugs | null; // Ajuste para corresponder aos nomes corretos
  direction: "ascending" | "descending";
}

const Profile: React.FC<PostProps> = ({ historicoImplementacoesBugs }) => {
  const [formData, setFormData] = useState<FormData>({
    tipoRegistro: "",
    tipoImplementacao: "",
    descricao: "",
    dataHora: "",
    status: "",
    responsavel: "",
    containerIdGtm: "",
    propriedadeIdGa4: "",
    impacto: "",
    solucao: "",
    dataHoraResolucao: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedHistorico, setSelectedHistorico] =
    useState<HistoricoImplementacoesBugs | null>(null);

  // Ordenação dos dados

  const formToDatabaseMapping: Record<
    keyof FormData,
    keyof HistoricoImplementacoesBugs | null
  > = {
    tipoRegistro: "tipo_registro",
    tipoImplementacao: "tipo_implementacao",
    descricao: "descricao",
    dataHora: "data_hora",
    status: "status",
    responsavel: "responsavel",
    containerIdGtm: "container_id_gtm",
    propriedadeIdGa4: "propriedade_id_ga4",
    impacto: "impacto",
    solucao: "solucao",
    dataHoraResolucao: "data_hora_resolucao",
  };

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "ascending",
  });

  const requestSort = (formKey: keyof FormData) => {
    // Converte a chave do formulário para a chave correspondente no banco de dados
    const key = formToDatabaseMapping[formKey];

    // Sair se a chave não é válida para o banco de dados
    if (!key) return;

    let direction: "ascending" | "descending" =
      sortConfig.key === key && sortConfig.direction === "ascending"
        ? "descending"
        : "ascending";

    // Atualiza o estado de ordenação com a chave do banco de dados e direção
    setSortConfig({ key, direction });
  };
  const sortedItems = useMemo(() => {
    let sortableItems = [...historicoImplementacoesBugs];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        // Garante que a chave não é null
        const key = sortConfig.key as keyof HistoricoImplementacoesBugs;

        // Pega os valores de a e b, considerando um valor padrão se for undefined
        const aValue = a[key] ?? ""; // ou outro valor padrão que faça sentido
        const bValue = b[key] ?? ""; // ou outro valor padrão que faça sentido

        // Se um dos valores for undefined, você pode definir como quer tratá-los na comparação
        // Por exemplo, tratar undefined como o menor valor possível
        if (aValue === undefined && bValue === undefined) return 0;
        if (aValue === undefined) return -1;
        if (bValue === undefined) return 1;

        // A implementação da comparação permanece a mesma
        return sortConfig.direction === "ascending"
          ? aValue < bValue
            ? -1
            : aValue > bValue
            ? 1
            : 0
          : aValue > bValue
          ? -1
          : aValue < bValue
          ? 1
          : 0;
      });
    }
    return sortableItems;
  }, [historicoImplementacoesBugs, sortConfig]);

  // Fim das funções de ordenação

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOpenModal = (historico: HistoricoImplementacoesBugs) => {
    setSelectedHistorico(historico);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHistorico(null);
  };

  const handleSaveChanges = async (formData: FormData) => {
    if (!selectedHistorico) return;

    try {
      const axios = require("axios");
      const response = await axios.put(
        `/api/update-historico/${selectedHistorico.id}`,
        formData
      );
      console.log("Dados salvos:", response.data);
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao salvar as alterações: ", error);
    }
  };

  // Função para criar novo registro
  const handleClick = async () => {
    // Converte dataHora e dataHoraResolucao para o formato UTC completo
    const dataHoraUTC = new Date(formData.dataHora).toISOString();
    const dataHoraResolucaoUTC = formData.dataHoraResolucao
      ? new Date(formData.dataHoraResolucao).toISOString()
      : "";

    // Prepara os dados para serem enviados, com nomes de chaves em snake_case
    const dadosParaEnvio = {
      tipo_registro: formData.tipoRegistro,
      tipo_implementacao: formData.tipoImplementacao,
      descricao: formData.descricao,
      data_hora: dataHoraUTC,
      status: formData.status,
      responsavel: formData.responsavel,
      container_id_gtm: formData.containerIdGtm,
      propriedade_id_ga4: formData.propriedadeIdGa4,
      impacto: formData.impacto,
      solucao: formData.solucao,
      data_hora_resolucao: dataHoraResolucaoUTC, // Apenas inclua se for relevante para o modelo
    };

    try {
      const axios = require("axios");
      const response = await axios.post(
        "/api/1-create-historico",
        dadosParaEnvio
      );
      console.log("Resposta da API:", response.data);

      // Após sucesso, limpa o formData ou trata o sucesso de alguma forma específica
      setFormData({
        tipoRegistro: "",
        tipoImplementacao: "",
        descricao: "",
        dataHora: "",
        status: "",
        responsavel: "",
        containerIdGtm: "",
        propriedadeIdGa4: "",
        impacto: "",
        solucao: "",
        dataHoraResolucao: "",
      });
    } catch (error) {
      console.error(
        "Erro ao criar o registro: ",
        (error as any).response ? (error as any).response.data : error
      );
    }
  };

  console.log("Enviando dados para a API:", formData); // Log dos dados que serão enviados
  return (
    <div className="container-fluid">
      <h2 className="text-center font-weight-bold">
        HISTÓRICO DE BUGS E IMPLEMENTAÇÕES
      </h2>

      <div className="row text-light bg-lopes border border-dark">
        <div className="col" onClick={() => requestSort("tipoRegistro")}>
          Tipo de Registro
        </div>
        <div className="col" onClick={() => requestSort("tipoImplementacao")}>
          Tipo de Implementação
        </div>
        <div className="col" onClick={() => requestSort("descricao")}>
          Descrição
        </div>
        <div className="col" onClick={() => requestSort("dataHora")}>
          Data e Hora
        </div>
        <div className="col" onClick={() => requestSort("status")}>
          Status
        </div>
        <div className="col" onClick={() => requestSort("responsavel")}>
          Responsável
        </div>
        <div className="col" onClick={() => requestSort("containerIdGtm")}>
          Container ID GTM
        </div>
        <div className="col" onClick={() => requestSort("propriedadeIdGa4")}>
          Propriedade ID GA4
        </div>
        <div className="col" onClick={() => requestSort("impacto")}>
          Impacto
        </div>
        <div className="col" onClick={() => requestSort("solucao")}>
          Solução
        </div>
        <div className="col" onClick={() => requestSort("dataHoraResolucao")}>
          Data e Hora da Resolução
        </div>
        <div className="col">Editar</div>
        {/* Repita para outras colunas conforme necessário */}
      </div>

      {sortedItems.map((historico) => (
        <div
          key={historico.id}
          className="row text-dark border border-dark"
          style={{
            backgroundColor:
              historico.tipo_registro === "Implementação"
                ? "#d4edda"
                : "#f8d7da",
          }}
        >
          <div className="col">{historico.tipo_registro}</div>
          <div className="col">{historico.tipo_implementacao}</div>
          <div className="col">{historico.descricao}</div>
          <div className="col">{historico.data_hora.toLocaleString()}</div>
          <div className="col">{historico.status}</div>
          <div className="col">{historico.responsavel}</div>
          <div className="col">{historico.container_id_gtm}</div>
          <div className="col">{historico.propriedade_id_ga4}</div>
          <div className="col">{historico.impacto}</div>
          <div className="col">{historico.solucao}</div>
          <div className="col">
            {historico.data_hora_resolucao
              ? historico.data_hora_resolucao.toLocaleString()
              : ""}
          </div>{" "}
          {/* Outras células da linha */}
          <div className="col">
            <Button onClick={() => handleOpenModal(historico)}>Editar</Button>
          </div>
        </div>
      ))}

      <EditModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        onSaveChanges={handleSaveChanges}
        selectedHistorico={selectedHistorico}
      />

      <h2>
        <p
          className="text-center font-weight-bold"
          style={{ paddingTop: "100px" }}
        >
          INCLUIR NOVO BUG OU IMPLEMENTAÇÃO{" "}
        </p>
      </h2>

      <div className="container">
        <div className="row">
          <div className="col-sm">Tipo de Registro</div>
          <div className="col-sm">Tipo de Implementação</div>
          <div className="col-sm">Descrição</div>
          <div className="col-sm">Data e Hora</div>
          <div className="col-sm">Status</div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <select
              id="tipoRegistro"
              name="tipoRegistro"
              value={formData.tipoRegistro}
              onChange={handleInputChange}
            >
              <option value="Implementação">Implementação</option>
              <option value="Bug">Bug</option>
            </select>
          </div>
          <div className="col-sm">
            <select
              id="tipoImplementacao"
              name="tipoImplementacao"
              value={formData.tipoImplementacao}
              onChange={handleInputChange}
            >
              <option value="N/A">N/A</option>
              <option value="Hardcode">Hardcode</option>
              <option value="GTM">GTM</option>
              <option value="GA4">GA4</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div className="col-sm">
            <textarea
              id="descricao"
              name="descricao"
              rows={1}
              value={formData.descricao}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="col-sm">
            <input
              type="datetime-local"
              id="dataHora"
              name="dataHora"
              value={formData.dataHora}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm">
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="Publicado">Publicado</option>
              <option value="Em análise">Em análise</option>
              <option value="Resolvido">Resolvido</option>
              <option value="Pendente">Pendente</option>
            </select>
          </div>
          {/* Adicione outros campos conforme necessário, seguindo o mesmo padrão */}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm">Responsável</div>
          <div className="col-sm">Container ID GTM</div>
          <div className="col-sm">Propriedade ID GA4</div>
          <div className="col-sm">Impacto</div>
          <div className="col-sm"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <textarea
              id="responsavel"
              name="responsavel"
              rows={1}
              value={formData.responsavel}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="col-sm">
            <select
              id="containerIdGtm"
              name="containerIdGtm"
              value={formData.containerIdGtm}
              onChange={handleInputChange}
            >
              <option value="N/A">N/A</option>
              <option value="GTM-NW5CWVM">GTM-NW5CWVM (GA4 Prod)</option>
              <option value="GTM-TLC7K75">GTM-TLC7K75 (Server Side)</option>
              <option value="GTM-KV4S6DC">GTM-KV4S6DC (Mídia)</option>
              <option value="GTM-W5XCPXHB">GTM-W5XCPXHB (Unilopes)</option>
            </select>
          </div>

          <div className="col-sm">
            <select
              id="propriedadeIdGa4"
              name="propriedadeIdGa4"
              value={formData.propriedadeIdGa4}
              onChange={handleInputChange}
            >
              <option value="N/A">N/A</option>
              <option value="338885311">338885311 (GA4 Prod)</option>
              <option value="428406499">428406499 (GA4 Unilopes)</option>
            </select>
          </div>

          <div className="col-sm">
            <select
              id="impacto"
              name="impacto"
              value={formData.impacto}
              onChange={handleInputChange}
            >
              <option value="Baixo">Baixo</option>
              <option value="Médio">Médio</option>
              <option value="Alto">Alto</option>
            </select>
          </div>

          <div className="col-sm"></div>

          {/* Adicione outros campos conforme necessário, seguindo o mesmo padrão */}
        </div>
      </div>

      <div className="container">
        <div className="row" style={{ paddingBottom: "100px" }}>
          <div className="col-4">
            <button
              className="bg-lopes px-2 py-1 rounded-md text-white font-semibold"
              onClick={handleClick}
            >
              Criar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withPageAuthRequired(Profile);
