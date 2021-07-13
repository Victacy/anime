import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import { Button,Container,Row,Col } from 'react-bootstrap'
export default function Index() {
  
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={6}>
            <StaticImage src="../../static/images/home.png" width={500} placeholder='tracedSVG'
              alt=" Homepage design " style={{ marginBottom: `1.45rem` }} />
          </Col>
          <Col md={6} >
              <h1 style={{textAlign:`center`,color:`white`}}>Platinum Portfolio page</h1>
              <p>Designs aim to bring out the best ideas of the viewer to life.
                Join me as i display unique and beautiful designs that will give the best experience yet.</p>
        <Link>
          <Button type="submit" > Follow</Button>
        </Link>
      
    </Col>
        </Row>
      </Container>
      

    </Layout>
  )
}
