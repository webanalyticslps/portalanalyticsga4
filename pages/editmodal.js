import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({
  showModal,
  handleCloseModal,
  selectedHistorico,
  onSaveChanges, // Certifique-se que essa prop seja passada corretamente ao usar o componente
}) => {
  const [localFormData, setLocalFormData] = useState({
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

  useEffect(() => {
    if (selectedHistorico) {
      setLocalFormData({
        tipoRegistro: selectedHistorico.tipo_registro || "",
        tipoImplementacao: selectedHistorico.tipo_implementacao || "",
        descricao: selectedHistorico.descricao || "",
        dataHora: selectedHistorico.data_hora || "",
        status: selectedHistorico.status || "",
        responsavel: selectedHistorico.responsavel || "",
        containerIdGtm: selectedHistorico.container_id_gtm || "",
        propriedadeIdGa4: selectedHistorico.propriedade_id_ga4 || "",
        impacto: selectedHistorico.impacto || "",
        solucao: selectedHistorico.solucao || "",
        dataHoraResolucao: selectedHistorico.data_hora_resolucao || "",
      });
    } else {
      setLocalFormData({
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
    }
  }, [selectedHistorico]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSaveChanges(localFormData);
    handleCloseModal();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} style={{ zIndex: 1050 }}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        <Button variant="primary" onClick={handleSave}>
          Salvar Alterações
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
