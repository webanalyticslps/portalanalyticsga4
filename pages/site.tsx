import { GetServerSideProps } from "next";
import { getAllSites, Sites } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const sites = await getAllSites();
  return {
    props: {
      sites,
    },
  };
};

interface PostProps {
  sites: Sites[];
}

export default withPageAuthRequired(function Profile({ sites }) {
  const [id, setId] = useState("");
  const [valor, setValor] = useState("");
  const [gtm, setGtm] = useState("");

  const handleClick = async (idsite: any, valorsite: any, gtmsite: any) => {
    const axios = require("axios");
    const res = await axios.post("/api/1-create-site-id-axios", {
      idsite: idsite,
      valorsite: valorsite,
      gtmsite: JSON.parse(gtmsite),
    });
  };

  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">SITES</p>
      </h2>
      <div>
        <div className="row text-light bg-lopes border border-dark">
          <div className="col-sm">ID</div>
          <div className="col-sm">Valor</div>
          <div className="col-sm">GTM</div>
        </div>
      </div>
      {sites.map((Sites: any, index: any) => (
        <div key={Sites.id} className="row border border-dark">
          <div className="col-sm">{Sites.id}</div>
          <div className="col-sm">{Sites.valor}</div>
          <div className="col-sm">{String(Sites.gtm)}</div>
        </div>
      ))}

      <h2>
        <p
          className="text-center font-weight-bold"
          style={{ paddingTop: "100px" }}
        >
          INCLUIR NOVO SITE
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
                handleClick(
                  textId.value,
                  textValor.value,
                  textGtm.value
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
