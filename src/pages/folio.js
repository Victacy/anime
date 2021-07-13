import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Container,Card,Row,Col } from 'react-bootstrap'

export default function Portfolio() {
    return (
        <Layout>
        <div style={{color:`black`}}>
            <h1>Portfolio</h1>
            <Container>
               <Row>
                   <Col md={6}>
                   <Card className="mb-3">
                   <StaticImage src="../../static/images/magic.jpg" width={300} className="card-img-top"
                        alt="Castle,Somewhere in the world" placeholder="tracedSVG"/>
                 <Card.Body>
                 <Card.Title>Pic one</Card.Title>
                 <Card.Text>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </Card.Text>
                 </Card.Body>
            </Card>
                   </Col>
                   <Col md={6} className="mb-3">
                   <Card>
                    <StaticImage src="../../static/images/tower.jpeg" width={300} className="card-img-top"
                        alt="Eiffel Tower,Paris-France" placeholder="tracedSVG"/>
                 <Card.Body>
                 <Card.Title>Pic two</Card.Title>
                 <Card.Text>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 </Card.Text>
                 </Card.Body>
            </Card>
                   </Col>
               </Row>
            </Container>
        </div>
        </Layout>
    )
}



// width={300} quality={95} style={{ marginBottom: `1.45rem` }}