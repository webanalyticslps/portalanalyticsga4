import { GetServerSideProps } from "next";
import { getAllSites, Sites } from "../lib/db";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps: GetServerSideProps = async () => {
  const sites = await getAllSites();
  return {
    props: {
      sites,
    },
  };
};

interface PostProps {
  sites: Sites[];
}

export default withPageAuthRequired(function Profile({ sites }) {
  return (
    <div className="container">
      <h2>
        <p className="text-center font-weight-bold">SITES</p>
      </h2>
      <div>
        <div className="row text-light bg-lopes border border-dark">
          <div className="col-sm">ID</div>
          <div className="col-sm">Valor</div>
          <div className="col-sm">GTM</div>
        </div>
      </div>
      {sites.map((Sites: any, index: any) => (
        <div key={Sites.id} className="row border border-dark">
          <div className="col-sm">{Sites.id}</div>
          <div className="col-sm">{Sites.valor}</div>
          <div className="col-sm">{String(Sites.gtm)}</div>
        </div>
      ))}
    </div>
  );
});
