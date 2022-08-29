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
          O QUE É UM CÓDIGO DE DISPARO
        </p>
      </h2>
      <div className="accordion" id="accordionExample">
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
              O que é um código de disparo
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Código de disparo é um código único relacionado a cada um dos
              eventos do portal. Ele é gerado de acordo com os parâmetros
              principais que cada evento possui, como ilustra a imagem abaixo:
              <img
                src="/codigodedisparo.png"
                class="img-fluid"
                alt="Responsive image"
              />
              <p>
                <ins>Ele é composto por 5 parâmetros obrigatórios:</ins>
              </p>
              <ul class="list-unstyled">
                  <ul>
                    <li>Evento: tipo de evento disparo. Os eventos mais comuns são visualizações de página, cliques, envios de formulário, etc.</li>
                    <li>Site: qual o site em que o evento foi disparo.</li>
                    <li>Container 1: qual o container do site que o evento foi disparado.</li>
                    <li>Container 2: qual subcontainer do site que o evento foi disparado.</li>
					<li>Identificador: nome do objeto do evento disparado (nome da página, botão, formulário, etc).</li>
                  </ul>
              </ul>
			  <p>
                A lista completa dos dados que podem ser disparados em cada parâmetro pode ser encontrada no menu "Documentações" do Portal GA4.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
