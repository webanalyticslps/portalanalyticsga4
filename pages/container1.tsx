import { GetServerSideProps } from "next";
import { getAllContainers1, Containers1 } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const containers1 = await getAllContainers1();
  return {
    props: {
      containers1,
    },
  };
};

interface PostProps {
  containers1: Containers1[];
}

export default withPageAuthRequired(function Profile({ containers1 }) {
  const [id, setId] = useState("");
  const [valor, setValor] = useState("");
  const [gtm, setGtm] = useState("");

  const handleClick = async (idcontainer1: any, valorcontainer1: any, gtmcontainer1: any) => {
    const axios = require("axios");
    const res = await axios.post("/api/1-create-container1-id-axios", {
      idcontainer1: idcontainer1,
      valorcontainer1: valorcontainer1,
      gtmcontainer1: JSON.parse(gtmcontainer1),
    });
  };

  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">CONTAINERS 1</p>
      </h2>
      <div>
        <div className="row text-light bg-lopes border border-dark">
          <div className="col-sm">ID</div>
          <div className="col-sm">Valor</div>
          <div className="col-sm">GTM</div>
        </div>
      </div>
      {containers1.map((Containers1: any, index: any) => (
        <div key={Containers1.id} className="row border border-dark">
          <div className="col-sm">{Containers1.id}</div>
          <div className="col-sm">{Containers1.valor}</div>
          <div className="col-sm">{String(Containers1.gtm)}</div>
        </div>
      ))}

      <h2>
        <p
          className="text-center font-weight-bold"
          style={{ paddingTop: "100px" }}
        >
          INCLUIR NOVO CONTAINER 1
        </p>
      </h2>

      <div class="container">
        <div class="row">
          <div class="col-sm">ID</div>
          <div class="col-sm">Valor</div>
          <div class="col-sm">GTM</div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <textarea
              id="textId"
              name="w3review"
              rows="1"
              cols="30"
              value={id}
              onChange={(e) => setId(e.currentTarget.value)}
            ></textarea>
          </div>
          <div class="col-sm">
            <textarea
              id="textValor"
              name="w3review"
              rows="1"
              cols="30"
              value={valor}
              onChange={(e) => setValor(e.currentTarget.value)}
            ></textarea>
          </div>
          <div class="col-sm">
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

      <div class="container">
        <div class="row" style={{ paddingBottom: "100px" }}>
          <div class="col-4">
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
