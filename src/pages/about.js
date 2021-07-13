import React from 'react'
//import {Link} from 'gatsby'
import '../styles/abt.css'
import { Button,Row,Col,Container } from 'react-bootstrap'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'

export default function About() {
    return (
        <Layout>
          <Container>
          
            <Row>

            <Col md={6}>
                    <h1 style={{textAlign:`center`,color:`white`}}>About me</h1>
                        <p className="abt">My name is Eunice Adorkor,a designer with almost 2 years experience.My skills range from 
                          graphic design to UIUX.I focus on bringing out a very beautiful and unique design which is 
                          appealing to the user.I am always looking for other creative people and designs to connect 
                          with and help to improve my skills.Design is not always aboutwhat you see but understanding 
                          the concept behind what you see in your own knowledge
                            <br/>
                            <br/>Connect with me here:
                        </p>
                        <a href="https://www.instagram.com/"><Button type="submit" className="insta">Instagram</Button></a>
                        <a href="https://twitter.com/"><Button type="submit" className="twit">Twitter</Button></a>
                        <a href="https://www.facebook.com/"><Button type="submit" className="fb">Facebook</Button></a>
                </Col>

                <Col md={6}>
                    <div className="out">
                <StaticImage src="../../static/images/fem.png" width={400} quality={100} placeholder='tracedSVG'
                    alt="Profile"  /> 
                    </div>
                </Col>

            </Row>
          </Container>  

              
        </Layout>
    )
}


