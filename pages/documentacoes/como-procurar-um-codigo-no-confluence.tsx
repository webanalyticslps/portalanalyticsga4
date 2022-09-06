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
          COMO PROCURAR UM CÓDIGO NO CONFLUENCE
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
              Como procurar um código no confluence
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
                Você pode procurar um código nas nossas documentações do
                Confluence na pasta{" "}
                <ins>
                  Data Analytics - Digital Analytics - Lista de Códigos de
                  Disparo GA4
                </ins>{" "}
                dentro do espaço <ins>Big Data</ins>.
              </p>
              <p>
                {" "}
                Uma outra forma de pesquisar é procurando um código específico
                diretamente no campo de busca e clicando na documentação, como
                mostra a imagem abaixo:
              </p>
              <img
                src="/pesquisa.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p></p>
              <p>
                {" "}
                Após isso, verifique na documentação qual evento referência seu
                código e descubra quando ele dispara, quais parâmetros ele
                possui e qual o status dele em cada ambiente.{" "}
              </p>
              <p></p>
              <img
                src="/eventos.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
