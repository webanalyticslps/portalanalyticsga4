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
  const [id, setId] = useState("");
  const [tipoRegistro, setTipoRegistro] = useState("");
  const [tipoImplementacao, setTipoImplementacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [status, setStatus] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [containerIdGtm, setContainerIdGtm] = useState("");
  const [propriedadeIdGa4, setPropriedadeIdGa4] = useState("");
  const [impacto, setImpacto] = useState("");
  const [solucao, setSolucao] = useState("");

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
        {historicoImplementacoesBugs.map((historico: any, index: any) => (
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
          <div className="col-sm">Responsável</div>
          <div className="col-sm">Container ID GTM</div>
          <div className="col-sm">Propriedade ID GA4</div>
          <div className="col-sm">Impacto</div>
          <div className="col-sm">Solução</div>
          <div className="col-sm">Data e Hora da Resolução</div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <textarea
              id="tipoRegistro"
              name="tipoRegistro"
              rows={1}
              value={tipoRegistro}
              onChange={(e) => setTipoRegistro(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <textarea
              id="tipoImplementacao"
              name="tipoImplementacao"
              rows={1}
              value={tipoImplementacao}
              onChange={(e) => setTipoImplementacao(e.currentTarget.value)}
            ></textarea>
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
            <textarea
              id="dataHora"
              name="dataHora"
              rows={1}
              value={dataHora}
              onChange={(e) => setDataHora(e.currentTarget.value)}
            ></textarea>
          </div>

          <div className="col-sm">
            <textarea
              id="status"
              name="status"
              rows={1}
              value={status}
              onChange={(e) => setStatus(e.currentTarget.value)}
            ></textarea>
          </div>

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
            <textarea
              id="containerIdGtm"
              name="containerIdGtm"
              rows={1}
              value={containerIdGtm}
              onChange={(e) => setContainerIdGtm(e.currentTarget.value)}
            ></textarea>
          </div>

          <div className="col-sm">
            <textarea
              id="propriedadeIdGa4"
              name="propriedadeIdGa4"
              rows={1}
              value={propriedadeIdGa4}
              onChange={(e) => setPropriedadeIdGa4(e.currentTarget.value)}
            ></textarea>
          </div>

          <div className="col-sm">
            <textarea
              id="impacto"
              name="impacto"
              rows={1}
              value={impacto}
              onChange={(e) => setImpacto(e.currentTarget.value)}
            ></textarea>
          </div>

          <div className="col-sm">
            <textarea
              id="solucao"
              name="solucao"
              rows={1}
              value={solucao}
              onChange={(e) => setSolucao(e.currentTarget.value)}
            ></textarea>
          </div>
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
                  (document.getElementById("impacto") as HTMLInputElement)
                    .value,
                  (document.getElementById("solucao") as HTMLInputElement).value
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
