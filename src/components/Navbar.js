import React from 'react'
import {Link} from 'gatsby'
import {Navbar,Nav} from 'react-bootstrap'
import '../styles/navbar.css'


export default function Navbar() {
    return (
           <Navbar expand="md">
               <Navbar.Brand href="/">Platinum</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive" />
               <Navbar.Collapse id="responsive" >
                   <Nav as="ul">
                    <Nav.Item as="li">
                        <Link to="/" className="nav-link">Home</Link>
                    </Nav.Item>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
        
    )
}
