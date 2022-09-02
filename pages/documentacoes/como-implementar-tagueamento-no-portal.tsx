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
          COMO IMPLEMENTAR TAGUEAMENTO NO PORTAL
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
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Como implementar eventos no GA4
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
                Para implementar os eventos do GA4 no site, basta utilizar a
                função abaixo para enviar o código de disparo do evento no
                momento certo do evento:
              </p>

              <img
                src="/datalayer1.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p />
              <p>
                Caso o evento possua parâmetros adicionais (obrigatórios ou não)
                também será necessário dispara-los no dataLayer, como mostra o
                código abaixo:
              </p>

              <img
                src="/datalayer2.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p />

			  <p>
                {" "}
                Observação 1: para que o tagueamento funcione, é necessário que o GTM esteja instalado corretamente no site. Para saber como realizar a implementação do GTM, acesse a aba do portal "Tutoriais -> Como implementar o GTM"{" "}
              </p>

              <p>
                {" "}
                Observação 2: o disparo dos códigos também podem ser feitos via
                GTM.{" "}
              </p>
              <p>
                <ins>
                  Para gerar o código de disparo do seu evento solicite ao time
                  de Digital Analytics.
                </ins>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
