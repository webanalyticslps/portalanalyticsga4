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

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedHistorico, setSelectedHistorico] =
    useState<HistoricoImplementacoesBugs | null>(null);

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
  const handleClick = async (
    tipo_registro: any,
    tipo_implementacao: any,
    descricao: any,
    data_hora: any,
    status: any,
    responsavel: any,
    container_id_gtm: any,
    propriedade_id_ga4: any,
    impacto: any,
    solucao: any
  ) => {
    try {
      const axios = require("axios");
      const response = await axios.post("/api/1-create-historico", {
        tipo_registro: tipo_registro,
        tipo_implementacao: tipo_implementacao,
        descricao: descricao,
        // Note que `data_hora` pode precisar de formatação dependendo de como sua API espera receber
        data_hora: data_hora,
        status: status,
        responsavel: responsavel,
        container_id_gtm: container_id_gtm,
        propriedade_id_ga4: propriedade_id_ga4,
        impacto: impacto,
        solucao: solucao,
      });
      console.log(response.data);
      // Adicione aqui qualquer lógica adicional após sucesso
    } catch (error) {
      console.error("Erro ao criar o registro: ", error);
      // Tratamento de erro
    }
  };

  console.log(showModal);

  interface EditModalProps {
    showModal: boolean;
    handleCloseModal: () => void;
    handleSaveChanges: () => void;
    selectedHistorico: HistoricoImplementacoesBugs | null; // Assumindo que você tem esse tipo definido em outro lugar
    setTipoRegistro: React.Dispatch<React.SetStateAction<string>>;
    setTipoImplementacao: React.Dispatch<React.SetStateAction<string>>;
    setDescricao: React.Dispatch<React.SetStateAction<string>>;
    setDataHora: React.Dispatch<React.SetStateAction<string>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    setResponsavel: React.Dispatch<React.SetStateAction<string>>;
    setContainerIdGtm: React.Dispatch<React.SetStateAction<string>>;
    setPropriedadeIdGa4: React.Dispatch<React.SetStateAction<string>>;
    setImpacto: React.Dispatch<React.SetStateAction<string>>;
    setSolucao: React.Dispatch<React.SetStateAction<string>>;
    setDataHoraResolucao: React.Dispatch<React.SetStateAction<string>>;
  }

  const EditModal: React.FC<EditModalProps> = ({
    showModal,
    handleCloseModal,
    handleSaveChanges,
    selectedHistorico,
    setTipoImplementacao,
    setTipoRegistro,
    setDescricao,
    setDataHora,
    setStatus,
    setResponsavel,
    setContainerIdGtm,
    setPropriedadeIdGa4,
    setImpacto,
    setSolucao,
    setDataHoraResolucao,
  }) => {
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
                value={tipoRegistro}
                onChange={(e) => setTipoRegistro(e.target.value)}
              />
              <Form.Label>Tipo de implementação</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tipo de registro"
                name="tipoRegistro"
                value={formData.tipoRegistro}
                onChange={handleInputChange}
              />
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
              <Form.Label>Data e hora</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Data e hora"
                value={dataHora}
                onChange={(e) => setDataHora(e.target.value)}
              />

              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
              <Form.Label>Responsável</Form.Label>
              <Form.Control
                type="text"
                placeholder="Responsável"
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
              />
              <Form.Label>Container ID GTM</Form.Label>
              <Form.Control
                type="text"
                placeholder="Container ID GTM"
                value={containerIdGtm}
                onChange={(e) => setContainerIdGtm(e.target.value)}
              />
              <Form.Label>Propriedade GA4</Form.Label>
              <Form.Control
                type="text"
                placeholder="Propriedade GA4"
                value={propriedadeIdGa4}
                onChange={(e) => setPropriedadeIdGa4(e.target.value)}
              />
              <Form.Label>Impacto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Impacto"
                value={impacto}
                onChange={(e) => setImpacto(e.target.value)}
              />
              <Form.Label>Solução</Form.Label>
              <Form.Control
                type="text"
                placeholder="Solução"
                value={solucao}
                onChange={(e) => setSolucao(e.target.value)}
              />
              <Form.Label>Data e hora da resolução</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Data e hora da resolução"
                value={dataHoraResolucao}
                onChange={(e) => setDataHoraResolucao(e.target.value)}
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
  };

  const MemoizedEditModal = React.memo(EditModal);

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
        // Passe outras props necessárias
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
              value={tipoRegistro}
              onChange={(e) => setTipoRegistro(e.currentTarget.value)}
            >
              <option value="Implementação">Implementação</option>
              <option value="Bug">Bug</option>
            </select>
          </div>
          <div className="col-sm">
            <select
              id="tipoImplementacao"
              name="tipoImplementacao"
              value={tipoImplementacao}
              onChange={(e) => setTipoImplementacao(e.currentTarget.value)}
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
              value={descricao}
              onChange={(e) => setDescricao(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <input
              type="datetime-local"
              id="dataHora"
              name="dataHora"
              value={dataHora}
              onChange={(e) => setDataHora(e.currentTarget.value)}
            />
          </div>

          <div className="col-sm">
            <select
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.currentTarget.value)}
            >
              <option value="Publicado">Publicado</option>
              <option value="Em análise">Em análise</option>
              <option value="Resolvido">Resolvido</option>
              <option value="Pendente">Pendente</option>
            </select>
          </div>

          {/* Repita para outros campos necessários */}
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
              value={responsavel}
              onChange={(e) => setResponsavel(e.currentTarget.value)}
            ></textarea>
          </div>

          <div className="col-sm">
            <select
              id="containerIdGtm"
              name="containerIdGtm"
              value={containerIdGtm}
              onChange={(e) => setContainerIdGtm(e.currentTarget.value)}
            >
              <option value="N/A">N/A</option>
              <option value="GTM-NW5CWVM">GTM-NW5CWVM (GA4 Prod)</option>
              <option value="GTM-TLC7K75">GTM-TLC7K75 (Server Side)</option>
              <option value="GTM-KV4S6DC">GTM-KV4S6DC (Mídia)</option>
              <option value="GTM-KV4S6DC">GTM-W5XCPXHB (Unilopes)</option>
            </select>
          </div>

          <div className="col-sm">
            <select
              id="propriedadeIdGa4"
              name="propriedadeIdGa4"
              value={propriedadeIdGa4}
              onChange={(e) => setPropriedadeIdGa4(e.currentTarget.value)}
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
              value={impacto}
              onChange={(e) => setImpacto(e.currentTarget.value)}
            >
              <option value="Baixo">Baixo</option>
              <option value="Médio">Médio</option>
              <option value="Alto">Alto</option>
            </select>
          </div>

          <div className="col-sm"></div>
          {/* Repita para outros campos necessários */}
        </div>
      </div>

      <div className="container">
        <div className="row" style={{ paddingBottom: "100px" }}>
          <div className="col-4">
            <button
              className="bg-lopes px-2 py-1 rounded-md text-white font-semibold"
              onClick={() =>
                handleClick(
                  (document.getElementById("tipoRegistro") as HTMLInputElement)
                    .value,
                  (
                    document.getElementById(
                      "tipoImplementacao"
                    ) as HTMLInputElement
                  ).value,
                  (document.getElementById("descricao") as HTMLInputElement)
                    .value,
                  (document.getElementById("dataHora") as HTMLInputElement)
                    .value,
                  (document.getElementById("status") as HTMLInputElement).value,
                  (document.getElementById("responsavel") as HTMLInputElement)
                    .value,
                  (
                    document.getElementById(
                      "containerIdGtm"
                    ) as HTMLInputElement
                  ).value,
                  (
                    document.getElementById(
                      "propriedadeIdGa4"
                    ) as HTMLInputElement
                  ).value,
                  (document.getElementById("impacto") as HTMLInputElement).value
                )
              }
            >
              Criar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
