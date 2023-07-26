import { GetServerSideProps } from "next";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import Image from "next/image";
import react from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Profile({ user }) {
  return (
    <div className="container">
      <div className="container" style={{ paddingBottom: "100px" }}>
        <div className="row">
          <div className="col">
            <div className="card text-center">
              [Web Analytics GA4] Relatório Gerencial
              <a href="https://lookerstudio.google.com/reporting/7ed7bbd5-d88e-40b6-b7e2-fba84613a1eb">
                <Image
                  src="/relatorio_gerencial.png"
                  alt=""
                  title=""
                  width="300"
                  height="400"
                  layout="responsive"
                />
              </a>
              O relatório aborda de forma detalhada as informações de navegação
              dos usuários no site da Lopes, fornecendo dados sobre os usuários,
              sessões, conversões e mídia.
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              [Web Analytics GA4] Relatório de Consulta de Código de Disparo
              <a href="https://lookerstudio.google.com/reporting/52c64ebc-774c-4f74-a7e0-b8587697a44b">
                <Image
                  src="/relatorio_codigo_disparo.png"
                  alt=""
                  title=""
                  width="300"
                  height="400"
                  layout="responsive"
                />
              </a>
              O relatório tem como objetivo fornecer um espaço rápido de
              pesquisa dos eventos do site da Lopes, com foco nos eventos
              disparados pelos usuários.
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              [Web Analytics GA4] Relatório de Busca
              <a href="https://lookerstudio.google.com/reporting/d2e018f0-2be1-4ffa-9bbe-af9d015fc4d4">
                <Image
                  src="/relatorio_busca.png"
                  alt=""
                  title=""
                  width="300"
                  height="400"
                  layout="responsive"
                />
              </a>
              O relatório aborda de forma detalhada as informações das buscas
              realizadas no site da Lopes, fornecendo dados sobre os filtros
              utilizados, os termos buscados e o status das buscas.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-center">
              [Web Analytics GA4] Relatório de Mídia e Origem
              <a href="https://lookerstudio.google.com/reporting/c1646a7a-2171-4e44-bfc4-b21267e3b963">
                <Image
                  src="/relatorio_origem.png"
                  alt=""
                  title=""
                  width="300"
                  height="400"
                  layout="responsive"
                />
              </a>
              O relatório visa fornecer dados detalhados sobre as origens,
              mídias, campanhas e páginas de destino dos usuários do portal.
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              [Web Analytics GA4] Relatório do Google ADS
              <a href="https://lookerstudio.google.com/reporting/2176828d-54b2-4cac-a757-b310a798b982">
                <Image
                  src="/relatorio_ads.png"
                  alt=""
                  title=""
                  width="300"
                  height="400"
                  layout="responsive"
                />
              </a>
              O relatório aborda as informações das campanhas do Google ADS,
              possibilitando a visualização das métricas de custo e a utilização
              de filtros por campanha para acompanhamentos específicos.
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              [Web Analytics GA4] Relatório de Lead
              <a href="https://lookerstudio.google.com/reporting/a1d46fe3-aaf5-4fa5-a0d0-7b12182123a6">
                <Image
                  src="/relatorio_lead.png"
                  alt=""
                  title=""
                  width="300"
                  height="400"
                  layout="responsive"
                />
              </a>
              O relatório aborda de forma detalhada as informações de leads
              gerados no site da Lopes, fornecendo dados sobre o histórico dos
              leads, localização geográfica dos imóveis convertidos e os
              formulários utilizados para a conversão.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card text-center">
              [Web Analytics GA4] Relatório de E-commerce
              <a href="https://lookerstudio.google.com/reporting/57a0c7ae-de6e-4ff4-aa28-ab6feace4dc6">
                <Image
                  src="/relatorio_ecommerce.png"
                  alt=""
                  title=""
                  width="300"
                  height="400"
                  layout="responsive"
                />
              </a>
              Relatório construído para acompanhar os eventos de e-commerce do
              portal. Nele é possível acompabgar os itens vistos nas listas,
              itens clicados nas listas, itens visualizados e itens comprados.
            </div>
          </div>

          <div className="col">
            <div className="card text-center">
              

            </div>
          </div>

          <div className="col">
            <div className="card text-center">
            
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});
