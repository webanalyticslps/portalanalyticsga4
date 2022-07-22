import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import react from 'react';

interface PostProps {
	eventos: Evento[];
}

const PaginaComoSolicitarTagueamento = () => {
	return (
		<div className="container">
			<h2>
				<p className="text-center font-weight-bold">COMO SOLICITAR UM TAGUEAMENTO</p>
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
							Via Lopes Net #1
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							As solicitações de atendimento ao time de BI/Data Analytics, deverão ser feitas única e
							exclusivamente pelo link de suporte dentro do sistema Lopesnet, através do ícone
							Relatórios, selecionando em seguida a subcategoria desejada. Obs: Em breve teremos duas
							novas categorias dentro do ícone Relatórios: Metabase e Web Analytics. Enquanto essas
							novas categorias não são implementadas, as solicitações para essas categorias, podem ser
							enviadas para o e-mail acima citado.
						</div>
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
							Via E-mail #2
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							Na impossibilidade de acessar o Lopesnet, a solicitação poderá ser enviada diretamente para o e-mail bi.lopeslabs@lopes.com.br.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaginaComoSolicitarTagueamento;
