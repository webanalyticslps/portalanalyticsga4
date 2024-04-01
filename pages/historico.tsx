import { GetServerSideProps } from "next";
import {
  getAllHistoricoImplementacoesBugs,
  HistoricoImplementacoesBugs,
} from "../lib/db";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useState, useCallback } from "react";
import { Button, Modal, Form } from "react-bootstrap";

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

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

  const handleOpenModal = useCallback((historico: any) => {
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
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setSelectedHistorico(null);
  }, []);

  const handleSaveChanges = useCallback(async () => {
    // Implementação da lógica de atualização
    handleCloseModal();
  }, [formData, selectedHistorico, handleCloseModal]);

  // A implementação do componente EditModal permanece a mesma.
  // Certifique-se de que qualquer outra função passada para EditModal ou que influencie seu re-render seja otimizada com useCallback.

  return (
    <div className="container-fluid">
      <div className="container-fluid ">
        <h2>
          <p className="text-center font-weight-bold">
            HISTÓRICO DE BUGS E IMPLEMENTAÇÕES
          </p>
        </h2>
        <EditModal
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
                <Button onClick={() => handleOpenModal(historico)}>
                  Editar
                </Button>
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
    </div>
  );
});
