import { GetServerSideProps } from "next";
import { getAllParametros, Parametros } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps: GetServerSideProps = async () => {
  const parametros = await getAllParametros();
  return {
    props: {
      parametros,
    },
  };
};

interface PostProps {
  parametros: Parametros[];
}

export default withPageAuthRequired(function Profile({ parametros }) {
  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">PARÂMETROS</p>
      </h2>
      <div>
        <div className="row text-light bg-lopes border border-dark">
          <div className="col-sm">ID</div>
          <div className="col-sm">Nome</div>
          <div className="col-sm">Escopo</div>
          <div className="col-sm">Descrição</div>
          <div className="col-sm">Dimensão</div>
          <div className="col-sm">Exemplo de valores</div>
        </div>
      </div>
      {parametros.map((Parametros: any, index: any) => (
        <div key={Parametros.id} className="row border border-dark" style={{ paddingBottom: "100px" }}>
          <div className="col-sm">{Parametros.id}</div>
          <div className="col-sm">{Parametros.nome}</div>
          <div className="col-sm">{Parametros.escopo}</div>
          <div className="col-sm">{Parametros.descricao}</div>
          <div className="col-sm">{Parametros.dimensao}</div>
          <div className="col-sm">{Parametros.exemplos}</div>
        </div>
      ))}
    </div>
  );
});
