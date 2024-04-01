import { GetServerSideProps } from "next";
import {
  getAllHistoricoImplementacoesBugs,
  HistoricoImplementacoesBugs,
} from "../lib/db";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { EditModal } from "./editmodal";

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

  const handleSaveChanges = (formData) => {
    console.log("Dados salvos", formData);
    // Aqui você pode implementar a lógica para salvar os dados atualizados
    handleCloseModal();
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center font-weight-bold">
        HISTÓRICO DE BUGS E IMPLEMENTAÇÕES
      </h2>
      {/* Renderize sua lista de históricos aqui */}
      {historicoImplementacoesBugs.map((historico) => (
        <div key={historico.id}>
          {/* Detalhes do histórico */}
          <Button onClick={() => handleOpenModal(historico)}>Editar</Button>
        </div>
      ))}

      <EditModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleSaveChanges={handleSaveChanges}
        selectedHistorico={selectedHistorico}
      />
    </div>
  );
};

export default withPageAuthRequired(Profile);
