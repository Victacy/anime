import React ,{useState} from 'react'
import Layout from '../components/Layout'
import { Form,Button,Container } from 'react-bootstrap'


export default function Contact() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [msg,setMsg] = useState("")


    const handleNameInput = (e) =>{
        setName(e.target.value);
    };

    const handleEmailInput = (e) =>{
        setEmail(e.target.value);
    };

    const handleMsgInput = (e) =>{
        setMsg(e.target.value);
    };

    const handleSub = (e) =>{
        e.preventDefault();
        if (name && email && msg)
            alert('Thank you for patronage')
        else
            alert('Necessary fields are empty')
    }

    return (
        <Layout>
            <Container >
            <Form style={{color: `white`}}>
                <Form.Group value={name} onChange={handleNameInput} controlId="BasicFormName">
                    <Form.Label><b>Name</b></Form.Label>
                    <Form.Control type="text" placeholder=" "/>
                </Form.Group>
                <Form.Group value={email} onChange={handleEmailInput} controlId="BasicFormEmail">
                    <Form.Label><b>Email Address</b></Form.Label>
                    <Form.Control type="email" placeholder=" "/>
                </Form.Group>
                <Form.Group value={msg} onChange={handleMsgInput} controlId="BasicFormMsg">
                    <Form.Label><b>Message</b></Form.Label>
                    <Form.Control as="textarea" rows="5" placeholder="Type something ...."/>
                    {/* <Form.Text>Feel free to address any issues concerning your designs and design career</Form.Text> */}
                </Form.Group>
                <p  className="row justify-content-center">
                <Button type="submit" onClick={handleSub}>Subscribe</Button>
                </p>
                {/* <input type ="clear" /> */}
            </Form>
            </Container>
            
        </Layout>
    )
}
