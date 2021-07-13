import React ,{useState} from 'react'
import Layout from '../components/Layout'
import { Form,Button,Container } from 'react-bootstrap'


export default function Contact() {
    const [sub,subbed] = useState("")

    const handleSub = (e) =>{
        e.preventDefault
    }

    return (
        <Layout>
            <Container >
            <Form style={{color: `white`,textAlign:`center`}}>
                <Form.Group controlId="BasicFormName">
                    <Form.Label><b>Name</b></Form.Label>
                    <Form.Control type="text" placeholder=" "/>
                </Form.Group>
                <Form.Group controlId="BasicFormEmail">
                    <Form.Label><b>Email Address</b></Form.Label>
                    <Form.Control type="email" placeholder=" "/>
                </Form.Group>
                <Form.Group controlId="BasicFormMsg">
                    <Form.Label><b>Message</b></Form.Label>
                    <Form.Control as="textarea" rows="5" placeholder="Type something ...."/>
                    {/* <Form.Text>Feel free to address any issues concerning your designs and design career</Form.Text> */}
                </Form.Group>
                <p  className="row justify-content-center">
                <Button type="submit">Subscribe</Button>
                </p>
                {/* <input type ="clear" /> */}
            </Form>
            </Container>
            
        </Layout>
    )
}
