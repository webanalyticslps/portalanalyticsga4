import { GetServerSideProps } from "next";
import {
  getAllHistoricoImplementacoesBugs,
  HistoricoImplementacoesBugs,
} from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button, Modal, Form } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useState, useCallback } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const historicoImplementacoesBugs = await getAllHistoricoImplementacoesBugs();
  return {
    props: {
      historicoImplementacoesBugs,
    },
  };
};

interface PostProps {
  historicoImplementacoesBugs: HistoricoImplementacoesBugs[];
}

export default withPageAuthRequired(function Profile({
  historicoImplementacoesBugs,
}) {
  const [showModal, setShowModal] = useState(false);

  const [selectedHistorico, setSelectedHistorico] =
    useState<HistoricoImplementacoesBugs | null>(null);

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

  // Função para alterar um registro
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para abrir o modal com os dados do registro selecionado
  const handleOpenModal = (historico: any) => {
    console.log("Abrindo modal para:", historico);
    setSelectedHistorico(historico);
    setFormData({
      tipoRegistro: historico.tipo_registro || "",
      tipoImplementacao: historico.tipo_implementacao || "",
      descricao: historico.descricao || "",
      dataHora: historico.data_hora || "",
      status: historico.status || "",
      responsavel: historico.responsavel || "",
      containerIdGtm: historico.container_id_gtm || "",
      propriedadeIdGa4: historico.propriedade_id_ga4 || "",
      impacto: historico.impacto || "",
      solucao: historico.solucao || "",
      dataHoraResolucao: historico.data_hora_resolucao || "",
    });
    setShowModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHistorico(null); // Limpar o registro selecionado
  };

  // Função para salvar um registro alterado
  const handleSaveChanges = useCallback(async () => {
    const updatedHistorico = {
      id: selectedHistorico?.id,
      tipo_registro: formData.tipoRegistro,
      tipo_implementacao: formData.tipoImplementacao,
      descricao: formData.descricao,
      data_hora: formData.dataHora,
      status: formData.status,
      responsavel: formData.responsavel,
      container_id_gtm: formData.containerIdGtm,
      propriedade_id_ga4: formData.propriedadeIdGa4,
      impacto: formData.impacto,
      solucao: formData.solucao,
      data_hora_resolucao: formData.dataHoraResolucao,
      // Adicione mais campos conforme necessário
    };

    try {
      // Supondo que você use axios para a chamada de API
      const axios = require("axios");
      const response = await axios.put(
        `/api/update-historico/${selectedHistorico?.id}`,
        updatedHistorico
      );
      console.log(response.data);
      // Após a atualização, você pode querer fechar o modal ou atualizar o estado da página de alguma forma
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao salvar as alterações: ", error);
    }
  }, [formData, selectedHistorico?.id, handleCloseModal]);

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

  interface EditModalProps {
    showModal: boolean;
    handleCloseModal: () => void;
    handleSaveChanges: () => void;
    selectedHistorico: HistoricoImplementacoesBugs | null;
    formData: {
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
    };
    handleInputChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => void;
  }

  const EditModal: React.FC<EditModalProps> = React.memo(
    ({ showModal, handleCloseModal, handleSaveChanges }) => {
      return (
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          style={{ zIndex: 1050 }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Editar Registro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Aqui você pode colocar um formulário para editar o registro.
              Use os estados como `selectedHistorico` para preencher os dados existentes */}
            <Form>
              {/* Exemplo de campo do formulário */}
              <Form.Group controlId="formDescricao">
                <Form.Label>Tipo de registro</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tipo de registro"
                  name="tipoRegistro"
                  value={formData.tipoRegistro}
                  onChange={handleInputChange}
                />
                <Form.Label>Tipo de implementação</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tipo de implementação"
                  name="tipoImplementacao"
                  value={formData.tipoImplementacao}
                  onChange={handleInputChange}
                />
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descrição"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleInputChange}
                />
                <Form.Label>Data e hora</Form.Label>
                <Form.Control
                  type="datetime-local"
                  placeholder="Data e hora"
                  name="dataHora"
                  value={formData.dataHora}
                  onChange={handleInputChange}
                />
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                />
                <Form.Label>Responsável</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Responsável"
                  name="responsavel"
                  value={formData.responsavel}
                  onChange={handleInputChange}
                />
                <Form.Label>Container ID GTM</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Container ID GTM"
                  name="containerIdGtm"
                  value={formData.containerIdGtm}
                  onChange={handleInputChange}
                />
                <Form.Label>Propriedade GA4</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Propriedade GA4"
                  name="propriedadeIdGa4"
                  value={formData.propriedadeIdGa4}
                  onChange={handleInputChange}
                />
                <Form.Label>Impacto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Impacto"
                  name="impacto"
                  value={formData.impacto}
                  onChange={handleInputChange}
                />
                <Form.Label>Solução</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Solução"
                  name="solucao"
                  value={formData.solucao}
                  onChange={handleInputChange}
                />
                <Form.Label>Data e hora da resolução</Form.Label>
                <Form.Control
                  type="datetime-local"
                  placeholder="Data e hora da resolução"
                  name="dataHoraResolucao"
                  value={formData.dataHoraResolucao}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fechar
            </Button>
            <Button variant="primary" onClick={() => handleSaveChanges()}>
              Salvar Alterações
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  );

  const MemoizedEditModal = React.memo(EditModal);

  console.log(showModal);

  return (
    <div className="container-fluid ">
      <h2>
        <p className="text-center font-weight-bold">
          HISTÓRICO DE BUGS E IMPLEMENTAÇÕES
        </p>
      </h2>
      <MemoizedEditModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleSaveChanges={handleSaveChanges}
        formData={formData}
        handleInputChange={handleInputChange}
        selectedHistorico={selectedHistorico}
      />

      <div>
        <div className="row text-light bg-lopes border border-dark">
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
        </div>
        {historicoImplementacoesBugs.map((historico: any, index: any) => (
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
            </div>
            <div className="col">
              <Button onClick={() => handleOpenModal(historico)}>Editar</Button>
            </div>
          </div>
        ))}
      </div>
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
});
