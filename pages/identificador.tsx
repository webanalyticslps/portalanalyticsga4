import { GetServerSideProps } from "next";
import { getAllIdentificadores, Identificadores } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";

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
  const [id, setId] = useState("");
  const [valor, setValor] = useState("");
  const [gtm, setGtm] = useState("");

  const handleClick = async (ididentificador: any, valoridentificador: any, gtmidentificador: any) => {
    const axios = require("axios");
    const res = await axios.post("/api/1-create-identificador-id-axios", {
      ididentificador: ididentificador,
      valoridentificador: valoridentificador,
      gtmidentificador: JSON.parse(gtmidentificador),
    });
  };

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

      <h2>
        <p
          className="text-center font-weight-bold"
          style={{ paddingTop: "100px" }}
        >
          INCLUIR NOVO IDENTIFICADOR
        </p>
      </h2>

      <div className="container">
        <div className="row">
          <div className="col-sm">ID</div>
          <div className="col-sm">Valor</div>
          <div className="col-sm">GTM</div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <textarea
              id="textId"
              name="w3review"
              rows="1"
              cols="30"
              value={id}
              onChange={(e) => setId(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <textarea
              id="textValor"
              name="w3review"
              rows="1"
              cols="30"
              value={valor}
              onChange={(e) => setValor(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <textarea
              id="textGtm"
              name="w3review"
              rows="1"
              cols="30"
              value={gtm}
              onChange={(e) => setGtm(e.currentTarget.value)}
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
                handleClick(textId.value, textValor.value, textGtm.value)
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
