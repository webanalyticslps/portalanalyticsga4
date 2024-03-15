import MyApp from "next";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Menu = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <h1>Portal Lopes GA4</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link title="Página Inicial" href="/">
              Home
            </Nav.Link>
            <NavDropdown title="Documentações" id="basic-nav-dropdown">
              <NavDropdown.Item href="/eventos" title="Eventos">
                Eventos
              </NavDropdown.Item>
              <NavDropdown.Item href="/metricas" title="Métricas">
                Métricas
              </NavDropdown.Item>
              <NavDropdown.Item href="/site" title="Site">
                Site
              </NavDropdown.Item>
              <NavDropdown.Item href="/container1" title="Container 1">
                Container 1
              </NavDropdown.Item>
              <NavDropdown.Item href="/container2" title="Container 2">
                Container 2
              </NavDropdown.Item>
              <NavDropdown.Item href="/identificador" title="Identificador">
                Identificador
              </NavDropdown.Item>
              <NavDropdown.Item href="/parametros" title="Parâmetros">
                Parâmetros Adicionais
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link title="Gerador de Código" href="/geradordecodigo">
              Gerador de código de disparo
            </Nav.Link>
            <NavDropdown title="Tutoriais" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="/documentacoes/o-que-e-um-codigo-de-disparo"
                title="O que é um código de disparo"
              >
                O que é um código de disparo
              </NavDropdown.Item>

              <NavDropdown.Item
                href="/documentacoes/como-implementar-gtm-no-site"
                title="Como implementar tagueamento no portal"
              >
                Como implementar GTM no site
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/documentacoes/como-implementar-tagueamento-no-portal"
                title="Como implementar tagueamento no portal"
              >
                Como implementar tagueamento no portal
              </NavDropdown.Item>

              <NavDropdown.Item
                href="/documentacoes/como-consultar-codigo-no-ga"
                title="Como consultar um código no GA4"
              >
                Como consultar um código no GA4
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/documentacoes/como-consultar-codigo-no-ds"
                title="Como consultar um código no DataStudio"
              >
                Como consultar um código no DataStudio
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/documentacoes/como-consultar-codigo-no-data-lake"
                title="Como consultar os dados no Data Lake"
              >
                Como consultar os dados no Data Lake
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/documentacoes/como-gerar-um-codigo"
                title="Como gerar um código"
              >
                Como gerar um código
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/documentacoes/como-solicitar-tagueamento"
                title="Como solicitar um tagueamento"
              >
                Como solicitar um tagueamento
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/documentacoes/conheca-nossa-equipe#"
                title="Conheça nossa equipe"
              >
                Conheça nossa equipe
              </NavDropdown.Item>

              <NavDropdown.Item
                href="/documentacoes/como-solicitar-acesso-do-ga4"
                title="Como solicitar acesso do GA4"
              >
                Como solicitar acesso do GA4
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/documentacoes/como-solicitar-acesso-dos-relatorios"
                title="Como solicitar acesso dos relatórios"
              >
                Como solicitar acesso dos relatórios
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/documentacoes/conheca-nossas-propriedades-do-ga4"
                title="Conheça nossas propriedades do GA4"
              >
                Conheça nossas propriedades do GA4
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/documentacoes/cursos-oficiais-google"
                title="Cursos oficiais Google"
              >
                Cursos oficiais do Google
              </NavDropdown.Item>

              <NavDropdown.Item
                href="/documentacoes/como-procurar-um-codigo-no-confluence"
                title="Como procurar um código no confluence"
              >
                Como procurar um código no Confluence
              </NavDropdown.Item>

              <NavDropdown.Item
                href="/documentacoes/tipos-de-estudos"
                title="Tipos de estudos"
              >
                Tipos de estudos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link title="Relatórios" href="/relatorios">
              Relatórios
            </Nav.Link>
            <Nav.Link title="Estudos" href="/estudos">
              Estudos
            </Nav.Link>
            <Nav.Link title="Histórico" href="/historico">
              Histórico
            </Nav.Link>
            <NavDropdown title="Projetos futuros" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="/projetosfuturos/validador"
                title="Validador"
              >
                Validador
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/projetosfuturos/rededenos"
                title="Rede de nós"
              >
                Rede de nós
              </NavDropdown.Item>
              <NavDropdown.Item href="/projetosfuturos/alerta" title="Alerta">
                Alerta (Slack)
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/geradordedatalayer"
                title="Gerador de Data Layer"
              >
                Gerador de dataLayer
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
