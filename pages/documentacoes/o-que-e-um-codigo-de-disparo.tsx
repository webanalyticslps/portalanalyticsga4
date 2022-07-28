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
				<p className="text-center font-weight-bold">O QUE É UM CÓDIGO DE DISPARO</p>
			</h2>
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
							O que é um código de disparo
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							Código de disparo é um código único relacionado a cada um dos eventos do portal. Ele é
							gerado de acordo com os parâmetros principais que cada evento possui, como ilustra a imagem
							abaixo:
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
