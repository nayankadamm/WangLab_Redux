import React, { useState } from 'react'
import { Row, Col, Container,Image, Form,Button } from "react-bootstrap";
import logo from "../images/logo.png"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../redux/authApi';
export default function Login() {
    const navigate = useNavigate();
const [login,{isLoading}]=useLoginMutation();

const[creds,setCreds] = useState({
    email:"",
    password:""
})
const handleChange =(e)=>{

    const{name,value}= e.target;
   setCreds({...creds,[name]:value})
}
const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
       const res= await login({...creds}).unwrap();
       console.log({res});
        
        setCreds({
            email:"",
            password:""
        })
        if(res.success){
            localStorage.setItem("token",res.authtoken)
            navigate("/")
        }
       
    } catch (error) {
        console.error('Failed to submit the form:', error); // Log the error
      alert('Failed to submit the form');
    }
}

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
                       type='email'
                       value={creds.email}
                       name="email"
                       placeholder='enter the email....'
                       onChange={handleChange}
                       />
                   </Form.Group>
                   <Form.Group className='my-3 w-72'>
                       <Form.Label>Password</Form.Label>
                       <Form.Control
                       type='password'
                       name="password"
                       value={creds.password}
                       placeholder='enter the password...'
                       onChange={handleChange}
                       />
                   </Form.Group>
               
                   <p>New user? <Link to='/register'> Register</Link> </p>
                   <Button onClick={handleSubmit}  className='flex flex-col justify-center'>Login</Button>
               </Form>
           </div>
            </Row>
        
            </Col>
        </Row>

    </Container>
  )
}
