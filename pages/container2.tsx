import { GetServerSideProps } from "next";
import { getAllContainers2, Containers2 } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps: GetServerSideProps = async () => {
  const containers2 = await getAllContainers2();
  return {
    props: {
      containers2,
    },
  };
};

interface PostProps {
  containers2: Containers2[];
}

export default withPageAuthRequired(function Profile({ containers2 }) {
  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">CONTAINERS 2</p>
      </h2>
      <div>
        <div className="row text-light bg-lopes border border-dark">
          <div className="col-sm">ID</div>
          <div className="col-sm">Valor</div>
          <div className="col-sm">GTM</div>
        </div>
      </div>
      {containers2.map((Containers2: any, index: any) => (
        <div key={Containers2.id} className="row border border-dark">
          <div className="col-sm">{Containers2.id}</div>
          <div className="col-sm">{Containers2.valor}</div>
          <div className="col-sm">{String(Containers2.gtm)}</div>
        </div>
      ))}
    </div>
  );
});
