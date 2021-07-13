import React from 'react'
import {Link} from 'gatsby'
import { Navbar,Nav,Container } from 'react-bootstrap'
import '../styles/navbar.css'


export default function Navigation() {
    return (
     <header style={{backgroundColor:`rgb(139, 0, 139)`}}>
        <Container >
           <Navbar expand="lg" variant="dark">
               <Navbar.Brand>Platinum</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive" />
               <Navbar.Collapse id="responsive" >
                   <Nav as="ul" className="ml-auto">
                    <Nav.Item as="li">
                        <Link to="/" className="nav-link" activeClassName="active">Home</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/about" className="nav-link">About</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/folio" className="nav-link">Portfolio</Link>
                    </Nav.Item>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
        </Container>
      </header>
        
    )
}
