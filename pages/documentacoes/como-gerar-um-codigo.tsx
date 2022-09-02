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
        <p className="text-center font-weight-bold">COMO GERAR UM CÓDIGO</p>
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
              Como gerar um código
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
                A criação dos códigos de disparo são destinadas somente a
                integrantes da equipe de <ins>Digital Analytics</ins> para
                mantermos uma padronização de sintaxe.
              </p>

              <p>
                Para gerar um código, acesse a aba do portal "Gerador de código
                de disparo" e siga as instruções abaixo:
              </p>


				<p/>
			  <p> <ins>Observação:</ins> caso já exista um código criado com os mesmos parâmetros que você selecionou o código não será criado. Nesse caso, escolha outros parâmetros para compor o seu evento. </p>
			  <p> Caso precise de mais detalhes para entender o que cada parâmetro do código significa, acesse a aba do portal "Tutoriais -> O que é um código de disparo" </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
