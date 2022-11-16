import { GetServerSideProps } from "next";
import { getAllEventos, Eventos } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";

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
  const [evento, setEvento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [parametro, setParametro] = useState("");
  const [coleta, setColeta] = useState("");

  const handleClick = async (
    nomeevento: any,
    quandoevento: any,
    parametroevento: any,
    coletaevento: any
  ) => {
    const axios = require("axios");
    const res = await axios.post("/api/1-create-evento-id-axios", {
      nomeevento: nomeevento,
      quandoevento: quandoevento,
      parametroevento: parametroevento,
      coletaevento: JSON.parse(coletaevento),
    });
  };

  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">LISTA DE EVENTOS</p>
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
              rows="1"
              cols="30"
              value={evento}
              onChange={(e) => setEvento(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <textarea
              id="textQuando"
              name="w3review"
              rows="1"
              cols="30"
              value={descricao}
              onChange={(e) => setDescricao(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <textarea
              id="textParametros"
              name="w3review"
              rows="1"
              cols="30"
              value={parametro}
              onChange={(e) => setParametro(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <textarea
              id="textColeta"
              name="w3review"
              rows="1"
              cols="30"
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
