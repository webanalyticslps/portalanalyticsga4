import { GetServerSideProps } from "next";
import {
  getAllHistoricoImplementacoesBugs,
  HistoricoImplementacoesBugs,
} from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";

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
  const [tipoRegistro, setTipoRegistro] = useState("");
  const [tipoImplementacao, setTipoImplementacao] = useState("");
  const [descricao, setDescricao] = useState("");
  // Não incluímos `data_hora` aqui pois ela será definida automaticamente no backend
  const [status, setStatus] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [containerIdGtm, setContainerIdGtm] = useState("");
  const [propriedadeIdGa4, setPropriedadeIdGa4] = useState("");
  const [impacto, setImpacto] = useState("");
  const [solucao, setSolucao] = useState("");
  // `data_hora_resolucao` pode ser adicionado semelhante aos campos acima se necessário

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/novo-registro-historico", {
        tipo_registro: tipoRegistro,
        tipo_implementacao: tipoImplementacao,
        descricao: descricao,
        status: status,
        responsavel: responsavel,
        container_id_gtm: containerIdGtm,
        propriedade_id_ga4: propriedadeIdGa4,
        impacto: impacto,
        solucao: solucao,
      });
      console.log(res.data);
      // Lógica adicional após o envio bem-sucedido, como limpar o formulário ou exibir uma mensagem
    } catch (error) {
      console.error("Houve um erro ao criar o registro: ", error);
      // Lógica de tratamento de erro, como exibir uma mensagem ao usuário
    }
  };

  export default withPageAuthRequired(function Profile({
    historicoImplementacoesBugs,
  }: PostProps) {
    return (
      <div className="container">
        <h2>
          <p className="text-center font-weight-bold">
            HISTÓRICO DE BUGS E IMPLEMENTAÇÕES
          </p>
        </h2>
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
          </div>
          {historicoImplementacoesBugs.map((historico, index) => (
            <div
              key={historico.id}
              className="row text-dark bg-white border border-dark"
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
            </div>
          ))}
        </div>

        <div className="container">
          <h2>
            <p className="text-center font-weight-bold">
              Adicionar Novo Registro
            </p>
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Campos do formulário aqui */}
            <div className="form-group">
              <label htmlFor="tipoRegistro">Tipo de Registro</label>
              <input
                type="text"
                className="form-control"
                id="tipoRegistro"
                value={tipoRegistro}
                onChange={(e) => setTipoRegistro(e.target.value)}
              />
            </div>
            {/* Repita para os outros campos */}
            <button type="submit" className="btn bg-lopes text-white">
              Criar
            </button>
          </form>
        </div>
        {/* O restante do seu componente permanece inalterado */}
      </div>
    );
  });
});
