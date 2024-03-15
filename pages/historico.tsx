import { GetServerSideProps } from "next";
import { getAllHistoricoImplementacoesBugs, HistoricoImplementacoesBugs } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

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

export default withPageAuthRequired(function Profile({ user }) {
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
      </div>
      {HistoricoImplementacoesBugs.map((HistoricoImplementacoesBugs: any, index: any) => (
        <div
          key={historicoImplementacoesBugs.id}
          className="row text-light bg-lopes border border-dark"
        >
          <div className="col">{historicoImplementacoesBugs.tipo_registro}</div>
          <div className="col">{historicoImplementacoesBugs.tipo_implementacao}</div>
          <div className="col">{historicoImplementacoesBugs.descricao}</div>
          <div className="col">{historicoImplementacoesBugs.data_hora}</div>
          <div className="col">{historicoImplementacoesBugs.status}</div>
          <div className="col">{historicoImplementacoesBugs.responsavel}</div>
          <div className="col">{historicoImplementacoesBugs.container_id_gtm}</div>
          <div className="col">{historicoImplementacoesBugs.propriedade_id_ga4}</div>
          <div className="col">{historicoImplementacoesBugs.impacto}</div>
          <div className="col">{historicoImplementacoesBugs.solucao}</div>
          <div className="col">{historicoImplementacoesBugs.data_hora_resolucao}</div>
        </div>
      ))}

      <h2>
        <p
          className="text-center font-weight-bold"
          style={{ paddingTop: "100px" }}
        >
          INCLUIR NOVO EVENTO
        </p>
      </h2>

      <div className="container">
        <div className="row">
          <div className="col-sm">Nome</div>
          <div className="col-sm">Quando é disparado</div>
          <div className="col-sm">Parâmetros</div>
          <div className="col-sm">Coleta automática</div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <textarea
              id="textEvento"
              name="w3review"
              rows={1}
              value={evento}
              onChange={(e) => setEvento(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <textarea
              id="textQuando"
              name="w3review"
              rows={1}
              value={descricao}
              onChange={(e) => setDescricao(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <textarea
              id="textParametros"
              name="w3review"
              rows={1}
              value={parametro}
              onChange={(e) => setParametro(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <textarea
              id="textColeta"
              name="w3review"
              rows={1}
              value={coleta}
              onChange={(e) => setColeta(e.currentTarget.value)}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row" style={{ paddingBottom: "100px" }}>
          <div className="col-4">
            <button
              className="bg-lopes px-2 py-1 rounded-md text-white font-semibold"
              onClick={() =>
                handleClick(
                  (document.getElementById("textEvento") as HTMLInputElement)
                    .value,
                  (document.getElementById("textQuando") as HTMLInputElement)
                    .value,
                  (
                    document.getElementById(
                      "textParametros"
                    ) as HTMLInputElement
                  ).value,
                  (document.getElementById("textColeta") as HTMLInputElement)
                    .value
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
