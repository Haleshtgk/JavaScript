import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="/" className='text-light fw-bold'>Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-light'>Home</Nav.Link>
          
           
          </Nav>
          <a href='/create' className="btn btn-light">Create</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;