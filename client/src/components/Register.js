import React from 'react'
import { Row, Col, Container,Image, Form, Button } from "react-bootstrap";
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <Container className='mt-4 rounded-lg   shadow' >
        <Row>
            <Col  md={6}  className='h-screen  flex justify-center items-center'>
            <Image  src={logo} className='size-96 rounded '></Image>
            </Col>
            <Col  md={6}  className='h-screen bg-black flex-col justify-center flex items-center  '>
            <Row>
                <h1 className='text-white font-serif' >Register</h1>
            </Row>
            1<Row className='flex justify-center size-96 items-center '>
            <div className=' size-96 shadow h-96 bg-white rounded flex justify-center align-middle mt-2 ' >
               
               <Form className='  '>
                
                   <Form.Group className='my-3 w-72'>
                       <Form.Label>Name</Form.Label>
                       <Form.Control
                       placeholder='enter the email....'
                       />
                   </Form.Group>
                   <Form.Group className='my-3 w-72'>
                       <Form.Label>Email address</Form.Label>
                       <Form.Control
                       placeholder='enter the password...'
                       />
                   </Form.Group>
                   <Form.Group className='my-3 w-72'>
                       <Form.Label>Password</Form.Label>
                       <Form.Control
                       placeholder='password...'
                       />
                   </Form.Group>
                   <Form.Group className='my-3 w-72'>
                      
                       <Form.Control
                       placeholder='Confirm password...'
                       />
                   </Form.Group>
               
                   <Button className='flex flex-col justify-center'>Register</Button>
               </Form>
           </div>
            </Row>
            <Row>
                <p className='text-white mt-5'>Already user? <Link to='/login'>Login</Link></p>
            </Row>
           
            </Col>
        </Row>

    </Container>
  )
}
