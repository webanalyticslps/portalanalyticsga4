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
          COMO IMPLEMENTAR GTM NO SITE
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
              Como implementar GTM no ambiente de produção
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
                Copie o código abaixo e cole-o em todas as páginas do seu
                website. Cole esse código o mais alto possível na tag head da
                página:
              </p>

              <textarea
                id="w3review"
                name="w3review"
                rows="9"
                cols="50"
                value="<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TCRVV9G');</script>"
              />
              <p />
              <p>
                Além disso, cole esse código imediatamente após a tag de
                abertura body:
              </p>

              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                value='<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCRVV9G"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>'
              />
            </div>
          </div>
        </div>
      </div>

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
              Como implementar GTM no ambiente de desenvolvimento
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Copie o código abaixo e cole-o em todas as páginas do seu
                website. Cole esse código o mais alto possível na tag head da
                página:
              </p>

              <textarea
                id="w3review"
                name="w3review"
                rows="9"
                cols="50"
                value="<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NW5CWVM');</script>"
              />
              <p />
              <p>
                Além disso, cole esse código imediatamente após a tag de
                abertura body:
              </p>

              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                value='<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NW5CWVM"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
