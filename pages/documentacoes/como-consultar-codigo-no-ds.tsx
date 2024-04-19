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
          COMO CONSULTAR UM CÓDIGO NO DATA STUDIO
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
              Método 1: Utilizando o Relatório de Consulta de Código de Disparo
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
                O método mais simples para consultar informações sobre um código
                de disparo específico é utilizando o relatório pré-definido no
                Looker.
              </p>
              <h3>Passos para consulta:</h3>
              <ol>
                <li>
                  Acesse o relatório{" "}
                  <a href="https://lookerstudio.google.com/reporting/52c64ebc-774c-4f74-a7e0-b8587697a44b">
                    [Web Analytics GA4] Relatório de Consulta de Código de
                    Disparo
                  </a>{" "}
                  através do link:{" "}
                  <a href="https://lookerstudio.google.com/reporting/52c64ebc-774c-4f74-a7e0-b8587697a44b">
                    Clique aqui para acessar o relatório
                  </a>
                  .
                </li>
                <li>
                  No campo de filtro "código de disparo", insira o código de
                  disparo que deseja consultar.
                </li>
                <li>
                  O relatório automaticamente atualizará para mostrar os
                  seguintes indicadores sobre o código consultado:
                  <ul>
                    <li>Usuários que dispararam o código</li>
                    <li>Quantidade de vezes disparadas</li>
                    <li>Gráfico histórico de disparo desse código</li>
                    <li>Entre outros indicadores relevantes.</li>
                  </ul>
                  <img
                    src="caminho_para_o_print_dos_indicadores.jpg"
                    alt="Print dos indicadores do código de disparo"
                    style={{ width: "100%", maxWidth: "600px" }}
                  />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
