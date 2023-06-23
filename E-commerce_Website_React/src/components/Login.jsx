// import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import '../CSS/Login.css'
// import { useEffect, useRef, useState } from 'react';
// import axios from 'axios';


// export default function Login(props) {


//     let [loginData, setLoginData] = useState({
//         email: "",
//         password: "",
//         client_admin: ""
//     })
//     let [err, setErr] = useState('')
//     const navigate = useNavigate();
//     let users = [];

//     let operationHandler = (event) => {
//         setLoginData({
//             ...loginData,
//             [event.target.name]: event.target.value
//         })
//     }


    // let handelLogin = async (event) => {
    //     event.preventDefault();
    //     try {
    //         let response = await axios.get("http://localhost:3005/users");
    //         let users = response.data;
    //         let user = users.find((user) => user.email === loginData.email
    //             && user.password === loginData.password
    //             && user.client_admin === loginData.client_admin);
    //         setErr('')
    //         props.onLogin(user, true);
    //         navigate('/home');


    //     } catch (error) {
    //         console.error(error);
    //         setErr("There was a problem logging in. Check your email and password or create an account.")

    //     }


//     }

//     return (
//         <Container fluid className='paddingLogin'>
//             <Row>
//                 <Col md-6 className="d-flex align-items-center justify-content-center">
//                     <Image src="bgLogin.jpeg" className='rounded object-cover m-3' style={{ height: '650px' }} fluid />
//                 </Col>
//                 <Col md-6 className="d-flex align-items-center justify-content-center">

//                     <Form className='container text-center w-50' onSubmit={handelLogin}>
//                         <h1 className='mb-5 loginTitle'>Login Form</h1>
                        
//                         <p className='text-danger'>
//                             {err}
//                         </p> 
                        
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Control className='inputs mt-5 mb-4' type="email" name="email" placeholder="Email address " required onChange={operationHandler} />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Control className='inputs mb-4' type="password" name="password" placeholder="Password" required onChange={operationHandler} />

//                         </Form.Group>

//                         <Form.Select className='inputs mb-5' name='client_admin' onChange={operationHandler} aria-label="Login As" >
//                             <option>Login As:</option>
//                             <option value="client">Client</option>
//                             <option value="administrator">Administrator</option>
//                         </Form.Select>
                            
//                         <Button className='w-100 inputs my-button ' variant='' type="submit">
//                             LOGIN
//                         </Button>

//                         <p className='mt-2 '>Don't have an account? <NavLink className="nav-link d-inline text-decoration-underline " to="/register">Register Now</NavLink></p>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css'


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:8000/login/', { email, password });
        if (response.data.success) {
            // Redirect the user to the appropriate page
            navigate('/home');
            props.onLogin(true); 
        } else {
            setErrorMsg(response.data.error);
        }
        } catch (error) {
        console.log(error);
        setErrorMsg('An error occurred.');
        }
    };

    return (
        <Container fluid className='paddingLogin'>
            <Row>
                <Col md-6 className="d-flex align-items-center justify-content-center">
                    <Image src="bgLogin.jpeg" className='rounded object-cover m-3' style={{ height: '650px' }} fluid />
                </Col>
                <Col md-6 className="d-flex align-items-center justify-content-center">
                    <Form className='container text-center w-50' onSubmit={handleSubmit}>
                        <h1 className='mb-5 loginTitle'>Login Form</h1>
                        <p className='text-danger'>{errorMsg && <p>{errorMsg}</p>}</p> 
                        
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className='inputs mt-5 mb-4' type="email" name="email" placeholder="Email address " required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control className='inputs mb-4' type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        
                        <Button className='w-100 inputs my-button ' variant='' type="submit">
                            LOGIN
                        </Button>
                        <p className='mt-2 '>Don't have an account? <NavLink className="nav-link d-inline text-decoration-underline " to="/register">Register Now</NavLink></p>
                    </Form>
                </Col>
            </Row>
        </Container>    
    );
};

export default Login;