import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Cardf from '../../pages/Card/Card';
function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='home'>Flights</Nav.Link>
            <Nav.Link as={Link} to='AddFlight'>Sell Flight</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;