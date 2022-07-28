import { GetServerSideProps } from 'next';
import { getAllEventos, Eventos } from '../lib/db';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import react from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

interface PostProps {
	eventos: Eventos[];
}

export default withPageAuthRequired(function Profile({ user }) {
	return (
		
		<Image src="/background.png" alt="" title="" width="80%" height="40%" layout="responsive" />

	);
});
