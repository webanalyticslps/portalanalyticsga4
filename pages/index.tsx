import { GetServerSideProps } from 'next';
import { getAllEventos, Eventos } from '../lib/db';
import Head from 'next/head';
import { Container, Row, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import react from 'react';

interface PostProps {
	eventos: Eventos[];
}

const Home = () => {
	return (
		
		<Image src="/background.png" alt="" title="" width="80%" height="40%" layout="responsive" />

	);
};

export default Home;
