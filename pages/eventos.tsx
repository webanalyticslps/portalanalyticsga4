import { GetServerSideProps } from "next";
import { getAllEventos, Eventos } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps: GetServerSideProps = async () => {
  const eventos = await getAllEventos();
  return {
    props: {
      eventos,
    },
  };
};

interface PostProps {
  eventos: Eventos[];
}

export default withPageAuthRequired(function Profile({ eventos }) {
  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">EVENTOS</p>
      </h2>
      <div>
        <div className="row text-light bg-lopes border border-dark">
          <div className="col-sm-2">ID</div>
          <div className="col-sm-2">Nome</div>
          <div className="col-sm-2">Quando é disparado</div>
          <div className="col-sm-2">Parâmetros</div>
          <div className="col-sm-2">Coleta automática</div>
        </div>
      </div>
      {eventos.map((Eventos: any, index: any) => (
        <div key={Eventos.id} className="row border border-dark">
          <div className="col-sm-2">{Eventos.id}</div>
          <div className="col-sm-2">{Eventos.nome}</div>
          <div className="col-sm-2">{Eventos.descricao}</div>
          <div className="col-sm-2">{Eventos.parametros}</div>
          <div className="col-sm-2">{String(Eventos.coletaAutomatica)}</div>
        </div>
      ))}
    </div>
  );
});
