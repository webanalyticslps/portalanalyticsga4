import { GetServerSideProps } from "next";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import Image from "next/image";
import react from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Profile({ user }) {
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-center">
              [Digital Analytics] [UA] Dashboard Sherlopes Home
              <a href="https://datastudio.google.com/u/0/reporting/10e69f92-8ba0-441e-aa26-f0233d32b402/page/7BuKC">
                <Image
                  src="/sherlopes.png"
                  alt=""
                  title=""
                  width="300"
                  height="400"
                  layout="responsive"
                />
              </a>
              Relatório construído para acompanhar a jornada de geração de leads
              do produto Sherlopes Home.
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              [Digital Analytics] [UA] Dashboard Produtos Recomendados
              <Image
                src="/relatorios produtos recomendados.png"
                alt=""
                title=""
                width="300"
                height="400"
                layout="responsive"
              />
              Relatório construído para acompanhar os indicadores do produto de
              dados "Imóveis Recomendados".
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              [Digital Analytics] [UA] Dashboard Produtos Similares
              <Image
                src="/produtossimilares.png"
                alt=""
                title=""
                width="300"
                height="400"
                layout="responsive"
              />
              Relatório construído para acompanhar os indicadores do produto de
              dados "Imóveis Similares".
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
