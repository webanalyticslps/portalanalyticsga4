import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditModal = ({
  showModal,
  handleCloseModal,
  selectedHistorico,
  onSaveChanges,
}) => {
  const [localFormData, setLocalFormData] = useState({
    tipo_registro: "",
    tipo_implementacao: "",
    descricao: "",
    data_hora: "",
    status: "",
    responsavel: "",
    container_id_gtm: "",
    propriedade_id_ga4: "",
    impacto: "",
    solucao: "",
    data_hora_resolucao: "",
  });

  // Opções das caixas de seleção; ajuste conforme necessário
  const tipoRegistroOptions = ["Bug", "Implementação"];
  const tipoImplementacaoOptions = ["N/A", "Hardcode", "GTM", "GA4", "Outro"];
  const statusOptions = ["Em análise", "Resolvido", "Pendente"];
  const impactoOptions = ["Baixo", "Médio", "Alto"];
  const containerIdGtmOptions = ["GTM-NW5CWVM", "GTM-TLC7K75"];
  const propriedadeIdGa4Options = ["338885311", "428406499"];

  useEffect(() => {
    if (selectedHistorico) {
      const formatDateTime = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        const offset = date.getTimezoneOffset();
        const adjustedDate = new Date(date.getTime() - offset * 60 * 1000);
        return adjustedDate.toISOString().slice(0, 16);
      };

      setLocalFormData({
        tipo_registro: selectedHistorico.tipo_registro || "",
        tipo_implementacao: selectedHistorico.tipo_implementacao || "",
        descricao: selectedHistorico.descricao || "",
        data_hora: formatDateTime(selectedHistorico.data_hora),
        status: selectedHistorico.status || "",
        responsavel: selectedHistorico.responsavel || "",
        container_id_gtm: selectedHistorico.container_id_gtm || "",
        propriedade_id_ga4: selectedHistorico.propriedade_id_ga4 || "",
        impacto: selectedHistorico.impacto || "",
        solucao: selectedHistorico.solucao || "",
        data_hora_resolucao: formatDateTime(
          selectedHistorico.data_hora_resolucao
        ),
      });
    } else {
      setLocalFormData({
        tipo_registro: "",
        tipo_implementacao: "",
        descricao: "",
        data_hora: "",
        status: "",
        responsavel: "",
        container_id_gtm: "",
        propriedade_id_ga4: "",
        impacto: "",
        solucao: "",
        data_hora_resolucao: "",
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
    onSaveChanges({
      ...localFormData,
      id: selectedHistorico?.id,
    });
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
            <Form.Select
              name="tipo_registro"
              value={localFormData.tipo_registro}
              onChange={handleInputChange}
            >
              {tipoRegistroOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
            <Form.Label>Tipo de implementação</Form.Label>
            <Form.Select
              name="tipo_implementacao"
              value={localFormData.tipo_implementacao}
              onChange={handleInputChange}
            >
              {tipoImplementacaoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descrição"
              name="descricao"
              value={localFormData.descricao}
              onChange={handleInputChange}
            />
            <Form.Label>Data e hora</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="Data e hora"
              name="data_hora"
              value={localFormData.data_hora}
              onChange={handleInputChange}
            />
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={localFormData.status}
              onChange={handleInputChange}
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
            <Form.Label>Responsável</Form.Label>
            <Form.Control
              type="text"
              placeholder="Responsável"
              name="responsavel"
              value={localFormData.responsavel}
              onChange={handleInputChange}
            />
            <Form.Label>Container ID GTM</Form.Label>
            <Form.Control
              type="text"
              placeholder="Container ID GTM"
              name="container_id_gtm"
              value={localFormData.container_id_gtm}
              onChange={handleInputChange}
            />
            <Form.Label>Propriedade GA4</Form.Label>
            <Form.Control
              type="text"
              placeholder="Propriedade GA4"
              name="propriedade_id_ga4"
              value={localFormData.propriedade_id_ga4}
              onChange={handleInputChange}
            />
            <Form.Label>Impacto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Impacto"
              name="impacto"
              value={localFormData.impacto}
              onChange={handleInputChange}
            />
            <Form.Label>Solução</Form.Label>
            <Form.Control
              type="text"
              placeholder="Solução"
              name="solucao"
              value={localFormData.solucao}
              onChange={handleInputChange}
            />
            <Form.Label>Data e hora da resolução</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="Data e hora da resolução"
              name="data_hora_resolucao"
              value={localFormData.data_hora_resolucao}
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
