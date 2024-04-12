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
              Eduardo Rozario (erozario@lopes.com.br)
              <Image
                src="/dudu.jpeg"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Engineering Manager
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              Tiago Dias
              <Image
                src="/dias.png"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Tech Lead
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              Risielle Santos (rjsantos@lopes.com.br)
              <Image
                src="/risi.jpeg"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Data Engineering
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-center">
              Mariana Queiroz (mqueiroz@lopes.com.br)
              <Image
                src="/mariana.jpeg"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Data Engineering
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              Victor Hugo de Sales (vsales@lopes.com.br)
              <Image
                src="/victor.jpeg"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Data Analytics
            </div>
          </div>

          <div className="col">
            <div className="card text-center">
              Raphael Silva (raphael.silva@mazzatech.com.br)
              <Image
                src="/rapha.jpeg"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Data Analytics
            </div>
          </div>
        </div>

        <div className="row" style={{ paddingBottom: "100px" }}>
          <div className="col">
            <div className="card text-center">
              Mirela Souza (mvsouza@lopes.com.br)
              <Image
                src="/mirela.png"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Data Analytics
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <Image
                src=""
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
            </div>
          </div>

          <div className="col">
            <div className="card text-center">
              <Image
                src=""
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
