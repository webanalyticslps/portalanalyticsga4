import { GetServerSideProps } from "next";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import Image from "next/image";
import React from "react"; // Assegure-se que a importação de React está correta
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Profile({ user }) {
  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">
          COMO CONSULTAR UM CÓDIGO NO GA4
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
              Método 1: Utilizando Relatórios Prontos
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Você pode encontrar informações sobre códigos de disparo nos
                relatórios padrões do GA4, focando na dimensão "Código de
                Disparo" e observando as métricas associadas.
              </p>
              <h3>Passos para consulta em relatórios prontos:</h3>
              <ol>
                <li>
                  Acesse o Relatório de Eventos:
                  <ul>
                    <li>No GA4, navegue até 'Relatórios' no menu lateral.</li>
                    <li>
                      Escolha a categoria 'Engajamento' e depois clique em
                      'Eventos'.
                    </li>
                  </ul>
                </li>

                <li>
                  Adicionar Filtro:
                  <ul>
                    <li>
                      Na página do relatório de eventos, localize e clique em
                      'Adicionar filtro'.
                    </li>
                    <li>Selecione a dimensão 'Código de Disparo'.</li>
                    <li>
                      Insira o código de disparo específico que deseja filtrar
                      nos dados.
                    </li>
                    <li>
                      Aplique o filtro para ver os resultados filtrados por esse
                      código de disparo específico.
                    </li>
                  </ul>
                </li>
              </ol>
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
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Método 2: Criando uma Visão Personalizada no Relatório "Analisar"
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Para uma análise mais detalhada ou para explorar dados
                específicos relacionados ao código de disparo, você pode criar
                uma visão personalizada no Explorar (Analisar) do GA4.
              </p>
              <h3>Passos para criar uma visão personalizada:</h3>
              <ol>
                <li>No GA4, navegue até a seção "Explorar" ou "Analisar".</li>
                <li>
                  Crie um novo relatório clicando em "Análise em branco" ou
                  escolha um modelo de análise existente que deseja modificar.
                </li>
                <li>
                  Importe a dimensão "Código de Disparo" para o seu espaço de
                  trabalho de análise.
                </li>
                <li>
                  Selecione e adicione a métrica que deseja analisar em conjunto
                  com o "Código de Disparo". Isso pode incluir métricas como
                  usuários, sessões, eventos, entre outras.
                </li>
                <li>
                  Aplique um filtro para selecionar apenas o código de disparo
                  específico que deseja examinar. Isso é feito adicionando um
                  filtro no campo de filtro do relatório e inserindo o código
                  desejado.
                </li>
                <li>
                  Visualize os resultados que serão gerados com base nas
                  dimensões e métricas escolhidas.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
