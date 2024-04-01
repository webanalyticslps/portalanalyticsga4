import { GetServerSideProps } from "next";
import {
  getAllHistoricoImplementacoesBugs,
  HistoricoImplementacoesBugs,
} from "../lib/db";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useState, useCallback } from "react"; // Adicionado useCallback
import { Button } from "react-bootstrap";
import EditModal from "./editmodal"; // Certifique-se de que o caminho esteja correto

export const getServerSideProps: GetServerSideProps = async () => {
  const historicoImplementacoesBugs = await getAllHistoricoImplementacoesBugs();
  return { props: { historicoImplementacoesBugs } };
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

  const handleSaveChanges = async () => {
    if (!selectedHistorico) return; // Verifica se existe um historico selecionado

    const updatedHistorico = {
      id: selectedHistorico.id,
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
        `/api/update-historico/${selectedHistorico.id}`,
        updatedHistorico
      );
      console.log(response.data);
      // Após a atualização, você pode querer fechar o modal ou atualizar o estado da página de alguma forma
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao salvar as alterações: ", error);
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
    </div>
  );
};

export default withPageAuthRequired(Profile);
