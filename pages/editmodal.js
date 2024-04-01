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

  // Suponha que estas são suas opções; ajuste conforme necessário
  const tipoRegistroOptions = ["Bug", "Implementação"];
  const tipoImplementacaoOptions = ["N/A", "Hardcode", "GTM", "GA4", "Outro"];
  const statusOptions = ["Em análise", "Resolvido", "Pendente"];
  const impactoOptions = ["Baixo", "Médio", "Alto"];
  const containerIdGtmOptions = ["GTM-NW5CWVM", "GTM-TLC7K75"];
  const propriedadeIdGa4Options = ["338885311", "428406499"];

  useEffect(() => {
    // Seu código de useEffect aqui
  }, [selectedHistorico]);

  const handleInputChange = (e) => {
    // Seu código de manipulação de mudança aqui
  };

  const handleSave = () => {
    // Seu código de salvar aqui
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} style={{ zIndex: 1050 }}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formDescricao">
            {/* Campos alterados para serem caixas de seleção */}
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

            {/* Mantenha os campos que permanecem como texto ou datetime-local inalterados */}
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descrição"
              name="descricao"
              value={localFormData.descricao}
              onChange={handleInputChange}
            />

            {/* Exemplo de outros campos modificados para caixas de seleção */}
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

            {/* Continue ajustando outros campos conforme necessário */}
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
