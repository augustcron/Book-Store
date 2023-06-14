import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>Буквоед</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/books'>
            <Nav.Link>Книги</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/shops'>
            <Nav.Link>Магазины</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Акции" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Две книги по цене одной</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                100 лучших книг со скидкой 20%
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                В день рождения скидка 30%
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
		  	<Nav.Link href="/"><i className="fa-solid fa-heart"></i> Избранное</Nav.Link>
            <Nav.Link href="/"><i className="fa-solid fa-cart-shopping"></i> Корзина</Nav.Link>
            <Nav.Link href="/"><i className="fa-solid fa-user"></i> Вы</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;