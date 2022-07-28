import { GetServerSideProps } from "next";
import { getAllContainers1, Containers1 } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps: GetServerSideProps = async () => {
  const containers1 = await getAllContainers1();
  return {
    props: {
      containers1,
    },
  };
};

interface PostProps {
  containers1: Containers1[];
}

export default withPageAuthRequired(function Profile({ containers1 }) {
  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">CONTAINERS 1</p>
      </h2>
      <div>
        <div className="row text-light bg-lopes border border-dark">
          <div className="col-sm">ID</div>
          <div className="col-sm">Valor</div>
        </div>
      </div>
      {containers1.map((Containers1: any, index: any) => (
        <div key={Containers1.id} className="row border border-dark">
          <div className="col-sm">{Containers1.id}</div>
          <div className="col-sm">{Containers1.valor}</div>
        </div>
      ))}
    </div>
  );
});
