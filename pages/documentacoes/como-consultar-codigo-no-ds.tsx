import { GetServerSideProps } from 'next';
import { getAllEventos, Eventos } from '../lib/db';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import react from 'react';

interface PostProps {
	eventos: Evento[];
}

const PaginaComoConsultarCodigoNoDS = () => {
	return (
		<div className="container">
			<h2>
				<p className="text-center font-weight-bold">COMO CONSULTAR UM CÓDIGO NO DATA STUDIO</p>
			</h2>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Como consultar um código no Data Studio
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							Para consultar um código no Data Studio siga as intruções abaixo:
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaginaComoConsultarCodigoNoDS;
