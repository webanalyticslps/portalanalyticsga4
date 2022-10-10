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
              <a href="https://datastudio.google.com/u/0/reporting/4574aeac-d844-4bc5-83f9-f4e07aee7cbf/page/7BuKC">
                <Image
                  src="/relatorioprodutosrecomendados.png"
                  alt=""
                  title=""
                  width="300"
                  height="400"
                  layout="responsive"
                />
              </a>
              Relatório construído para acompanhar os indicadores do produto de
              dados "Imóveis Recomendados".
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              [Digital Analytics] [UA] Dashboard Produtos Similares
              <a href="https://datastudio.google.com/u/0/reporting/caa91186-942e-444a-8d7b-001d41831b43/page/7BuKC">
                <Image
                  src="/produtossimilares.png"
                  alt=""
                  title=""
                  width="300"
                  height="400"
                  layout="responsive"
                />
              </a>
              Relatório construído para acompanhar os indicadores do produto de
              dados "Imóveis Similares".
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-center">
              [Digital Analytics] [UA] Calculadora de Compra
              <a href="https://datastudio.google.com/u/0/reporting/95419ed5-658a-4171-a86d-3b5447e6a2f9/page/7BuKC">
                <Image
                  src="/sherlopes.png"
                  alt=""
                  title=""
                  width="300"
                  height="400"
                  layout="responsive"
                />
              </a>
              Relatório construído para acompanhar os indicadores do produto de
              dados "Calculadora de Compra".
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
});
