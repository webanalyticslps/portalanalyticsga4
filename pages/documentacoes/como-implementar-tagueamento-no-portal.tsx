import { GetServerSideProps } from 'next';
import { getAllEventos, Eventos } from '../lib/db';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import react from 'react';

interface PostProps {
	eventos: Evento[];
}

const PaginaComoImplementarTagueamento = () => {
	return (
		<div className="container">
			<h2>
				<p className="text-center font-weight-bold">COMO IMPLEMENTAR TAGUEAMENTO NO PORTAL</p>
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
							Como implementar eventos padrões sem parâmetros e métricas
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">Utilize a função abaixo:</div>
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
							Como implementar eventos padrões com parâmetros e métricas
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">Utilize a função abaixo:</div>
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
							Como implementar eventos padrões sem parâmetros e métricas
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">Utilize a função abaixo:</div>
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
							Como implementar eventos padrões com parâmetros e métricas
						</button>
					</h2>
					<div
						id="collapseFour"
						className="accordion-collapse collapse"
						aria-labelledby="headingFour"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">Utilize a função abaixo:</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaginaComoImplementarTagueamento;
