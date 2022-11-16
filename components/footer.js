import MyApp from 'next';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Footer = () => {
	return (
		<nav className="footer fixed-bottom bg-dark " >
			<div className="container-fluid">
				<a className="navbar-brand text-light">
					Desenvolvido pela equipe de Digital Analytics
				</a>
			</div>
		</nav>
	);
};

export default Footer;
