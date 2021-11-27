import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import About from './about';
import Home from './home';
import Pricing from './pricing';

const NavBar = () => {
    return (
  <Router>
    <Navbar bg="light" variant="light">
      <Container>
        <img id="iyengar-img" src="https://images.squarespace-cdn.com/content/5b6fa15250a54fc4fb59a237/1534971049670-OX6AM2XTK8BOIN584P2Q/logo_sf.png?content-type=image%2Fpng" alt="iyengar"/>
      <Navbar.Brand href="/">KymYoga</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
        <Nav.Link as={Link} to={"/pricing"}>Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <div>
    <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
    </div>
    
  </Router>
    )
}

export default NavBar;
