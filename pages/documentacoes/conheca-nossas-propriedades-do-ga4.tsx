import { GetServerSideProps } from "next";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import Image from "next/image";
import react from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Profile({ user }) {
  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">
          CONHEÇA NOSSAS PROPRIEDADES
        </p>
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Lopes Portal Prod (338885311)
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Esta propriedade do GA4 é dedicada ao acompanhamento do ambiente
              de produção do Portal Lopes. Ela permite a coleta de dados de
              tráfego, comportamento do usuário, conversões e outras métricas
              importantes em tempo real. Com essas informações, é possível
              entender melhor a interação dos usuários com o site, identificar
              pontos de melhoria, medir o sucesso de campanhas de marketing
              digital e otimizar a experiência geral do usuário. A propriedade é
              essencial para tomar decisões estratégicas baseadas em dados
              concretos e para promover melhorias contínuas no portal.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Portal Lopes Dev (338755120)
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Esta propriedade do Google Analytics 4 (GA4) é usada para
              monitorar e analisar o tráfego e as interações de usuários no
              ambiente de desenvolvimento do Portal Lopes. Através desta
              propriedade, é possível coletar dados detalhados sobre o
              comportamento dos usuários, a performance de conteúdo específico e
              a eficácia de layouts e funcionalidades experimentais. O objetivo
              principal é testar novas funcionalidades e otimizações antes de
              serem implementadas na versão de produção.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
