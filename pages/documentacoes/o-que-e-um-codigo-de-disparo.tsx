import { GetServerSideProps } from 'next';
import { getAllEventos, Eventos } from '../lib/db';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import react from 'react';

interface PostProps {
	eventos: Evento[];
}

const ComoSolicitarTagueamento = () => {
	return (
		<div class="container">
			<h2>
				<p className="text-center font-weight-bold">O QUE É UM CÓDIGO DE DISPARO</p>
			</h2>
			<div class="accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingTwo">
						<button
							class="accordion-button collapsed"
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
						class="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							Código de disparo é um código único relacionado a cada um dos eventos do portal. Ele é
							gerado de acordo com os parâmetros principais que cada evento possui, como ilustra a imagem
							abaixo:
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComoSolicitarTagueamento;
