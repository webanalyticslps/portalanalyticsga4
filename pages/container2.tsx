import { GetServerSideProps } from "next";
import { getAllContainers2, Containers2 } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const containers2 = await getAllContainers2();
  return {
    props: {
      containers2,
    },
  };
};

interface PostProps {
  containers2: Containers2[];
}

export default withPageAuthRequired(function Profile({ containers2 }) {
  const [id, setId] = useState("");
  const [valor, setValor] = useState("");
  const [gtm, setGtm] = useState("");

  const handleClick = async (
    idcontainer2: any,
    valorcontainer2: any,
    gtmcontainer2: any
  ) => {
    const axios = require("axios");
    const res = await axios.post("/api/1-create-container2-id-axios", {
      idcontainer2: idcontainer2,
      valorcontainer2: valorcontainer2,
      gtmcontainer2: JSON.parse(gtmcontainer2),
    });
  };

  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">CONTAINERS 2</p>
      </h2>
      <div>
        <div className="row text-light bg-lopes border border-dark">
          <div className="col-sm">ID</div>
          <div className="col-sm">Valor</div>
          <div className="col-sm">GTM</div>
        </div>
      </div>
      {containers2.map((Containers2: any, index: any) => (
        <div key={Containers2.id} className="row border border-dark">
          <div className="col-sm">{Containers2.id}</div>
          <div className="col-sm">{Containers2.valor}</div>
          <div className="col-sm">{String(Containers2.gtm)}</div>
        </div>
      ))}

      <h2>
        <p
          className="text-center font-weight-bold"
          style={{ paddingTop: "100px" }}
        >
          INCLUIR NOVO CONTAINER 2
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
              rows={1}
              value={id}
              onChange={(e) => setId(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <textarea
              id="textValor"
              name="w3review"
              rows={1}
              value={valor}
              onChange={(e) => setValor(e.currentTarget.value)}
            ></textarea>
          </div>
          <div className="col-sm">
            <textarea
              id="textGtm"
              name="w3review"
              rows={1}
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
                handleClick(
                  (document.getElementById("textId") as HTMLInputElement).value,
                  (document.getElementById("textValor") as HTMLInputElement)
                    .value,
                  (document.getElementById("textGtm") as HTMLInputElement).value
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
