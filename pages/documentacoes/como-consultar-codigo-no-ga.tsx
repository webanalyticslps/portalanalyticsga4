import { GetServerSideProps } from 'next';
import { getAllEventos, Eventos } from '../lib/db';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import react from 'react';

interface PostProps {
	eventos: Evento[];
}

const PaginaComoConsultarCodigoNoGa = () => {
	return (
		<div class="container">
			<h2>
				<p className="text-center font-weight-bold">COMO CONSULTAR UM CÓDIGO NO GA</p>
			</h2>
			<div class="accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingOne">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Como consultar um código no GA4
						</button>
					</h2>
					<div
						id="collapseOne"
						class="accordion-collapse collapse"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							Para consultar um código no GA siga as intruções abaixo:
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaginaComoConsultarCodigoNoGa;
