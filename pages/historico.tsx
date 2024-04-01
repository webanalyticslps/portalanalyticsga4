import { GetServerSideProps } from "next";
import {
  getAllHistoricoImplementacoesBugs,
  HistoricoImplementacoesBugs,
} from "../lib/db";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";
import EditModal from "./editmodal"; // Certifique-se de que o caminho esteja correto

export const getServerSideProps: GetServerSideProps = async () => {
  const historicoImplementacoesBugs = await getAllHistoricoImplementacoesBugs();
  return { props: { historicoImplementacoesBugs } };
};

const [formData, setFormData] = useState({
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

const handleInputChange = (
  event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = event.target;
  setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

interface PostProps {
  historicoImplementacoesBugs: HistoricoImplementacoesBugs[];
}

const Profile: React.FC<PostProps> = ({ historicoImplementacoesBugs }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedHistorico, setSelectedHistorico] =
    useState<HistoricoImplementacoesBugs | null>(null);

  const handleOpenModal = (historico: HistoricoImplementacoesBugs) => {
    setSelectedHistorico(historico);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHistorico(null);
  };

  // Definindo uma interface para o formData
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
    // Adicione mais campos conforme necessário
  }

  // No componente pai (Profile)
  const handleSaveChanges = async (formData: FormData) => {
    if (!selectedHistorico) return; // Verifica se um histórico foi selecionado

    try {
      // Aqui você faz a chamada de API para salvar as alterações
      const axios = require("axios");
      const response = await axios.put(
        `/api/update-historico/${selectedHistorico.id}`, // Endpoint correto
        formData // Dados do formulário recebidos do EditModal
      );
      console.log("Dados salvos:", response.data);
      handleCloseModal(); // Fecha o modal após o sucesso
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

    console.log("Enviando dados para a API:", dadosParaEnvio); // Log dos dados que serão enviados

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

  return (
    <div className="container-fluid">
      <h2 className="text-center font-weight-bold">
        HISTÓRICO DE BUGS E IMPLEMENTAÇÕES
      </h2>
      <div className="row text-light bg-lopes border border-dark">
        {/* Cabeçalhos da tabela aqui */}
        <div className="col">Tipo de Registro</div>
        <div className="col">Tipo de Implementação</div>
        <div className="col">Descrição</div>
        <div className="col">Data e Hora</div>
        <div className="col">Status</div>
        <div className="col">Responsável</div>
        <div className="col">Container ID GTM</div>
        <div className="col">Propriedade ID GA4</div>
        <div className="col">Impacto</div>
        <div className="col">Solução</div>
        <div className="col">Data e Hora da Resolução</div>
        <div className="col">Editar</div>
        {/* Outros cabeçalhos da tabela */}
      </div>
      {/* Loop para renderizar cada linha baseada em historicoImplementacoesBugs */}
      {historicoImplementacoesBugs.map((historico) => (
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
