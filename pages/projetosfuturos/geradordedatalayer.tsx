import { GetServerSideProps } from "next";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Profile({ user }) {
  function copy() {
    let textarea = document.getElementById("textarea");
    if (textarea != null) {
      textarea.select();
      document.execCommand("copy");
    }
  }

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Código de disparo</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Insira o código de disparo"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Parâmetros adicionais</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Insira os parâmetros adicionais"
          />
          <small id="emailHelp" className="form-text text-muted">
            Os parâmetros devem ser separados por ; e devem ser escritos
            respeitando a sintaxe da documentação.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Gerar dataLayer
        </button>
      </form>

      <textarea id="textarea"></textarea>

      <button
        className="bg-lopes px-2 py-1 rounded-md text-white font-semibold"
        onClick={() => copy()}
      >
        Copiar
      </button>
    </div>
  );
});
