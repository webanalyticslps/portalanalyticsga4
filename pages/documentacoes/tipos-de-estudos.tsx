import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import react from 'react';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Profile({ user }) {
	return (
		<div className="container">
			<h2>
				<p className="text-center font-weight-bold">TIPOS DE ESTUDOS</p>
			</h2>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button collapse"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Estudo de funil
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">Descrição estudo de funil</div>
					</div>
				</div>
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
							Recorrência dos usuários
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">Descrição estudo recorrência de usuários</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							Análise de fluxo do usuário (User Explorer)
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">Descrição estudo recorrência de usuário análise de fluxo do usuário (User Explorer)</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingFour">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFour"
							aria-expanded="false"
							aria-controls="collapseFour"
						>
							Teste A/B
						</button>
					</h2>
					<div
						id="collapseFour"
						className="accordion-collapse collapse"
						aria-labelledby="headingFour"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">Descrição estudo teste a/b</div>
					</div>
				</div>
                <div className="accordion-item">
					<h2 className="accordion-header" id="headingFive">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFive"
							aria-expanded="false"
							aria-controls="collapseFive"
						>
							Metas
						</button>
					</h2>
					<div
						id="collapseFive"
						className="accordion-collapse collapse"
						aria-labelledby="headingFive"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">Descrição estudo metas</div>
					</div>
				</div>
                <div className="accordion-item">
					<h2 className="accordion-header" id="headingSix">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseSix"
							aria-expanded="false"
							aria-controls="collapseSix"
						>
							Estudo de influência de eventos
						</button>
					</h2>
					<div
						id="collapseSix"
						className="accordion-collapse collapse"
						aria-labelledby="headingSix"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">Descrição estudo influencia de eventos</div>
					</div>
				</div>
			</div>
		</div>
	);
});
