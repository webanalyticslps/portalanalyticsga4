import { GetServerSideProps } from "next";
import { getAllListaDeCodigos, Codigos } from "../lib/db";
import { getAllContainers1, Containers1 } from "../lib/db";
import { getAllContainers2, Containers2 } from "../lib/db";
import { getAllSites, Sites } from "../lib/db";
import { getAllIdentificadores, Identificadores } from "../lib/db";
import { getAllEventos, Eventos } from "../lib/db";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const gerardatalayer = () => {
  var varcodigo = (document.getElementById("textcodigo") as HTMLInputElement)
    .value;
  var tipodeevento = varcodigo.substring(0, varcodigo.indexOf("."));

  switch (tipodeevento) {
    case "1":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "2":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "3":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "4":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "5":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "6":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "7":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "8":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "9":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" +
        varcodigo +
        "'\n'transaction_id':''\n'affiliation':''\n'value':''\n'tax':''\n'shipping':''\n'currency':''\n'coupon':''\n'items': [ \n { \n'item_id':''\n'item_name':''\n'affiliation':''\n'coupon':''\n'currency':''\n'discount':''\n'index':''\n'item_brand':''\n'item_category':''\n'item_category2':''\n'item_category3':''\n'item_category4':''\n'item_category5':''\n'item_list_id':''\n'item_list_name':''\n'item_variant':''\n'location_id':''\n'price':''\n'quantity':''\n }\n});";
      break;
    case "10":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "11":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "12":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "13":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" +
        varcodigo +
        "'\n'item_list_id':''\n'item_list_name':''\n'items': [ \n { \n'item_id':''\n'item_name':''\n'affiliation':''\n'coupon':''\n'currency':''\n'discount':''\n'index':''\n'item_brand':''\n'item_category':''\n'item_category2':''\n'item_category3':''\n'item_category4':''\n'item_category5':''\n'item_list_id':''\n'item_list_name':''\n'item_variant':''\n'location_id':''\n'price':''\n'quantity':''\n }\n});";
      break;
    case "14":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" +
        varcodigo +
        "'\n'creative_name':''\n'creative_slot':''\n'location_id':''\n'promotion_id':''\n'promotion_name':''\n'items': [ \n { \n'item_id':''\n'item_name':''\n'affiliation':''\n'coupon':''\n'creative_name':''\n'creative_slot':''\n'currency':''\n'discount':''\n'index':''\n'item_brand':''\n'item_category':''\n'item_category2':''\n'item_category3':''\n'item_category4':''\n'item_category5':''\n'item_list_id':''\n'item_list_name':''\n'item_variant':''\n'location_id':''\n'price':''\n'promotion_id':''\n'promotion_name':''\n'quantity':''\n }\n});";
      break;
    case "15":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "16":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "17":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "18":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "19":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "20":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "21":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;
    case "22":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" +
        varcodigo +
        "'\n'value':''\n'currency':''\n'items': [ \n { \n'item_id':''\n'item_name':''\n'affiliation':''\n'coupon':''\n'currency':''\n'discount':''\n'index':''\n'item_brand':''\n'item_category':''\n'item_category2':''\n'item_category3':''\n'item_category4':''\n'item_category5':''\n'item_list_id':''\n'item_list_name':''\n'item_variant':''\n'location_id':''\n'price':''\n'quantity':''\n }\n});";
      break;
    case "23":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" +
        varcodigo +
        "'\n'item_list_id':''\n'item_list_name':''\n'items': [ \n { \n'item_id':''\n'item_name':''\n'affiliation':''\n'coupon':''\n'currency':''\n'discount':''\n'index':''\n'item_brand':''\n'item_category':''\n'item_category2':''\n'item_category3':''\n'item_category4':''\n'item_category5':''\n'item_list_id':''\n'item_list_name':''\n'item_variant':''\n'location_id':''\n'price':''\n'quantity':''\n }\n});";
      break;
    case "24":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" +
        varcodigo +
        "'\n'creative_name':''\n'creative_slot':''\n'location_id':''\n'promotion_id':''\n'promotion_name':''\n'items': [ \n { \n'item_id':''\n'item_name':''\n'affiliation':''\n'coupon':''\n'currency':''\n'discount':''\n'index':''\n'item_brand':''\n'item_category':''\n'item_category2':''\n'item_category3':''\n'item_category4':''\n'item_category5':''\n'item_list_id':''\n'item_list_name':''\n'item_variant':''\n'location_id':''\n'price':''\n'quantity':''\n }\n});";
      break;
    case "25":
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({\n'codigodedisparo':'" + varcodigo + "'\n});";
      break;

    default:
      (document.getElementById("textdatalayer") as HTMLInputElement).value =
        "window.dataLayer.push({'código incorreto'});";
  }
};

export default withPageAuthRequired(function Profile({
  listadecodigos,
  eventos,
  sites,
  containers1,
  containers2,
  identificadores,
}) {
  return (
    <div className="h-screen bg-gray-500">
      <div className="bg-gray-50 p-8 rounded-lg">
        <h1 className="text-center mb-4">Gerador de dataLayer</h1>

        <div className="flex space-x-2 p-2 bg-white rounded-md">
          <label htmlFor="nomeDoEvento">Código do evento</label>

          <div>
            <textarea id="textcodigo" name="w3review">
              Insira o código do evento.
            </textarea>
          </div>

          <button
            className="bg-lopes px-2 py-1 rounded-md text-white font-semibold"
            onClick={gerardatalayer}
          >
            Gerar
          </button>
        </div>
      </div>

      <div className="container">
        <h2>
          <p className="text-center font-weight-bold">Data Layer</p>
        </h2>

        <div className="d-flex justify-content-center">
          <textarea
            id="textdatalayer"
            name="w3review"
          ></textarea>
        </div>
      </div>
    </div>
  );
});
