import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container,Image, Form, Button } from "react-bootstrap";
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../redux/authApi';
export default function Register() 
{
    const navigate = useNavigate();
    const [register,{isLoading,error}] = useRegisterMutation();
    const[creds,setCreds] =useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

const handleChange = (e)=>{
        const {name,value}= e.target;
        setCreds({...creds,[name]:value});
}
const handleSubmit = async()=>{
    try {
        const res = await register({...creds}).unwrap();
        setCreds({
            name:"",
            email:"",
            password:"",
            confirmPassword:""
        })
        navigate("/")
    } catch (error) {
        console.error('Failed to submit the form:', error); // Log the error
      alert('Failed to submit the form');
    }
        
}

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
                       type='text'
                       name ="name"
                       value={creds.name}
                       placeholder='enter the name....'
                       onChange={handleChange}
                       />
                   </Form.Group>
                   <Form.Group className='my-3 w-72'>
                       <Form.Label>Email address</Form.Label>
                       <Form.Control
                       type='email'
                         name ="email"
                       value={creds.email}
                       placeholder='enter the email...'
                       onChange={handleChange}
                       />
                   </Form.Group>
                   <Form.Group className='my-3 w-72'>
                       <Form.Label>Password</Form.Label>
                       <Form.Control
                       type='password'
                         name ="password"
                       value={creds.password}
                       placeholder='password...'
                       onChange={handleChange}
                       />
                   </Form.Group>
                   <Form.Group className='my-3 w-72'>
                      
                       <Form.Control
                       type='password'
                         name ="confirmPassword"
                       value={creds.confirmPassword}
                       placeholder='Confirm password...'
                       onChange={handleChange}
                       />
                   </Form.Group>
               
                   <Button className='flex flex-col justify-center' onClick={handleSubmit} >SUbmit</Button>
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
