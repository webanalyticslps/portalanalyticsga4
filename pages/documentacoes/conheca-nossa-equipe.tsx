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
              Daniel Hein (dhein@lopes.com.br)
              <Image
                src="/hein.jpeg"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Senior Engineering Manager
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              Carlos Eduardo (csantanna@lopes.com.br)
              <Image
                src="/kadu.jpeg"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Big Data Manager
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              Sandra Crevelin (screvelin@lopes.com.br)
              <Image
                src="/sandra.png"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Data Product Manager
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card text-center">
              Yussif (ydutra@lopes.com.br)
              <Image
                src="/yussif.jpeg"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Tech Lead - Data Analytics
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
              Web Analytics Specialist
            </div>
          </div>

          <div className="col">
            <div className="card text-center">
              Tiago Dias (raphael.silva@mazzatech.com.br)
              <Image
                src="/tiago.png"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Data Analytics Specialist
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card text-center">
			Bianca (bferarezi@lopes.com.br)
              <Image
                src="/bianca.jpeg"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Group Product Manager
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
			Raphael (raphael.silva@mazzatech.com.br)
              <Image
                src="/rapha.jpeg"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Consultor de BI
            </div>
          </div>

          <div className="col">
            <div className="card text-center">
			Lucas Aquino (laquino@credipronto.com.br)
              <Image
                src="/lucas.jpeg"
                alt=""
                title=""
                width="300"
                height="300"
                layout="responsive"
              />
              Data Analytics Specialist
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
