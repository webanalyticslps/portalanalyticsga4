import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import react from 'react';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Profile({ user }) {
	return (
		<div className="container">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="card text-center">
							[Digital Analytics] [UA] Dashboard Sherlopes Home
							<Image src="/sherlopes.png" alt="" title="" width="300" height="400" layout="responsive" />
							Relatório construído para acompanhar a jornada de geração de leads do produto Sherlopes Home.
						</div>
					</div>
					<div className="col">
						<div className="card text-center">
							teste
							<Image src="/background.png" alt="" title="" width="300" height="400" layout="responsive" />
							teste
						</div>
					</div>
					<div className="col">
						<div className="card text-center">
							teste
							<Image src="/background.png" alt="" title="" width="300" height="400" layout="responsive" />
							teste
						</div>
					</div>
				</div>
                <div className="row">
					<div className="col">
						<div className="card text-center">
							teste
							<Image src="/background.png" alt="" title="" width="300" height="400" layout="responsive" />
							teste
						</div>
					</div>
					<div className="col">
						<div className="card text-center">
							teste
							<Image src="/background.png" alt="" title="" width="300" height="400" layout="responsive" />
							teste
						</div>
					</div>
					<div className="col">
						<div className="card text-center">
							teste
							<Image src="/background.png" alt="" title="" width="300" height="400" layout="responsive" />
							teste
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});