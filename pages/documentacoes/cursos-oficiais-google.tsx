import { GetServerSideProps } from 'next';
import { getAllEventos, Eventos } from '../lib/db';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import react from 'react';

interface PostProps {
	eventos: Evento[];
}

const PaginaCursosOficiaisGoogle = () => {
	return (
		<div className="container">
			<h2>
				<p className="text-center font-weight-bold">CURSOS OFICIAIS DO GOOGLE</p>
			</h2>
			<div className="list-group">
				<a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Google Analytics para iniciantes</h5>
						<small>Português</small>
					</div>
					<p className="mb-1">
                    Aprenda os recursos básicos do Google Analytics, incluindo como criar uma conta, implementar o código de acompanhamento, analisar relatórios básicos e configurar metas e acompanhamento de campanhas.
					</p>
					<small>#GoogleAnalytics</small>
				</a>
				<a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Curso avançado do Google Analytics</h5>
						<small className="text-muted">Português</small>
					</div>
					<p className="mb-1">
                    Saiba mais sobre os recursos avançados do Google Analytics, incluindo a coleta, o processamento e a configuração de dados, além de ferramentas mais complexas de análise e marketing.
					</p>
					<small className="text-muted">#GoogleAnalytics</small>
				</a>
				<a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Começar a usar o Google Analytics 360</h5>
						<small className="text-muted">Português</small>
					</div>
					<p className="mb-1">
                    Conheça os recursos avançados do Google Analytics 360 que não estão disponíveis no produto padrão e aprenda a usar as integrações com o BigQuery, Google Ad Manager e produtos do Google Marketing Platform.
					</p>
					<small className="text-muted">#GoogleAnalytics</small>
				</a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Fundamentos do Gerenciador de tags do Google</h5>
						<small className="text-muted">Português</small>
					</div>
					<p className="mb-1">
                    Descubra como o Gerenciador de tags do Google pode simplificar a implementação de tags e o processo de gerenciamento para profissionais de marketing, analistas e desenvolvedores.
					</p>
					<small className="text-muted">#GTM</small>
				</a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Google Analytics for Beginners</h5>
						<small className="text-muted">Inglês</small>
					</div>
					<p className="mb-1">
                    Learn the basic features of Google Analytics including how to create an account, implement tracking code, analyze basic reports, and set up goals and campaign tracking.
					</p>
					<small className="text-muted">#GoogleAnalytics</small>
				</a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Advanced Google Analytics</h5>
						<small className="text-muted">Inglês</small>
					</div>
					<p className="mb-1">
                    Learn about advanced Google Analytics features including data collection, processing and configuration, and more complex analysis and marketing tools.
					</p>
					<small className="text-muted">#GoogleAnalytics</small>
				</a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Google Analytics for Power Users</h5>
						<small className="text-muted">Inglês</small>
					</div>
					<p className="mb-1">
                    After you re familiar with the range of features Analytics offers, learn and practice actionable analyses to track business performance and identify areas for business improvement.
					</p>
					<small className="text-muted">#GoogleAnalytics</small>
				</a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Getting Started With Google Analytics 360</h5>
						<small className="text-muted">Inglês</small>
					</div>
					<p className="mb-1">
                    Learn about powerful Google Analytics 360 features that are not available in the standard product, and gain insight into how you can benefit from integrations with BigQuery, Google Marketing Platform products, and Google Ad Manager.
					</p>
					<small className="text-muted">#GoogleAnalytics</small>
				</a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Introduction to Data Studio</h5>
						<small className="text-muted">Inglês</small>
					</div>
					<p className="mb-1">
                    Introduction to Data Studio helps you learn and practice beginner steps in connecting your data and building Data Studio reports.
					</p>
					<small className="text-muted">#DataStudio</small>
				</a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Google Tag Manager Fundamentals</h5>
						<small className="text-muted">Inglês</small>
					</div>
					<p className="mb-1">
                    Discover how Google Tag Manager can simplify the tag implementation and management process for marketers, analysts, and developers.
					</p>
					<small className="text-muted">#GTM</small>
				</a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Measure Your Marketing with Google Analytics</h5>
						<small className="text-muted">Inglês</small>
					</div>
					<p className="mb-1">
                    Find out how Google Analytics can give you the insights you need to help meet your marketing objectives. Learn key measurement features in Analytics that can show the effectiveness of your online marketing efforts and help you get more return.
					</p>
					<small className="text-muted">#GA4</small>
				</a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">Go Further with Your Google Analytics Data</h5>
						<small className="text-muted">Inglês</small>
					</div>
					<p className="mb-1">
                    Get even more from your Google Analytics data! Find out how to control the data you collect, combine data from other sources, and learn about your options if you need enterprise Analytics features.
					</p>
					<small className="text-muted">#GA4</small>
				</a>
			</div>
            
		</div>
        
	);
};

export default PaginaCursosOficiaisGoogle;
