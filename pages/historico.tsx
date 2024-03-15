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

export default withPageAuthRequired(function Profile({ historicoImplementacoesBugs }: PostProps) {
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
            className="row text-light bg-lopes border border-dark"
          >
            <div className="col">{historico.tipo_registro}</div>
            <div className="col">{historico.tipo_implementacao}</div>
            <div className="col">{historico.descricao}</div>
            <div className="col">{historico.data_hora}</div>
            <div className="col">{historico.status}</div>
            <div className="col">{historico.responsavel}</div>
            <div className="col">{historico.container_id_gtm}</div>
            <div className="col">{historico.propriedade_id_ga4}</div>
            <div className="col">{historico.impacto}</div>
            <div className="col">{historico.solucao}</div>
            <div className="col">{historico.data_hora_resolucao}</div>
          </div>
        ))}
      </div>
      {/* O restante do seu componente permanece inalterado */}
    </div>
  );
});
