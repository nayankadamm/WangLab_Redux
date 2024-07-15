import React from 'react'
import { Row, Col, Container,Image, Form } from "react-bootstrap";
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <Container className='rounded-lg  mt-4   shadow' >
        <Row>
            <Col  md={6}  className='h-screen  flex justify-center items-center'>
            <Image  src={logo} className='size-96 rounded '></Image>
            </Col>
            <Col  md={6}  className='h-screen bg-black flex flex-col justify-center items-center '>
            <Row className='mb-6'>
                <h1 className='text-white font-serif'>Login</h1>
            </Row>
            <Row className='flex justify-center size-96 items-center mb-20'>
            <div className='size-96 shadow h-96 bg-white rounded flex justify-center  ' >
               
               <Form className='mt-16'>
                   
                   <Form.Group className='my-3 w-72'>
                       <Form.Label>Email address</Form.Label>
                       <Form.Control
                       placeholder='enter the email....'
                       />
                   </Form.Group>
                   <Form.Group className='my-3 w-72'>
                       <Form.Label>Password</Form.Label>
                       <Form.Control
                       placeholder='enter the password...'
                       />
                   </Form.Group>
               
                   <p>New user? <Link to='/register'> Register</Link> </p>
               </Form>
           </div>
            </Row>
        
            </Col>
        </Row>

    </Container>
  )
}
