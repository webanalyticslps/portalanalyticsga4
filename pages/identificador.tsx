import { GetServerSideProps } from "next";
import { getAllIdentificadores, Identificadores } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps: GetServerSideProps = async () => {
  const identificadores = await getAllIdentificadores();
  return {
    props: {
        identificadores,
    },
  };
};

interface PostProps {
    identificadores: Identificadores[];
}

export default withPageAuthRequired(function Profile({ identificadores }) {
  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">IDENTIFICADORES</p>
      </h2>
      <div>
        <div className="row text-light bg-lopes border border-dark">
          <div className="col-sm">ID</div>
          <div className="col-sm">Valor</div>
          <div className="col-sm">GTM</div>
        </div>
      </div>
      {identificadores.map((Identificadores: any, index: any) => (
        <div key={Identificadores.id} className="row border border-dark">
          <div className="col-sm">{Identificadores.id}</div>
          <div className="col-sm">{Identificadores.valor}</div>
          <div className="col-sm">{String(Identificadores.gtm)}</div>
        </div>
      ))}
    </div>
  );
});
