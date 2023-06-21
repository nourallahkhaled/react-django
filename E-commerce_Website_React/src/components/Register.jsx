import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../CSS/Register.css'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    let navigate = useNavigate();
    let [userData, setuserData] = useState({
        username: "",
        email: "",
        password: "",
        client_admin: ""
    });

    let [formErrors, setFormErrors] = useState({
        username: "",
        email: "",
        password: "",
        client_admin: ""
    });

    let validateForm = () => {
        let isValid = true;
        let errors = {
            username: "",
            email: "",
            password: "",
            client_admin: ""
        };
        // Validate username
        if (userData.username.trim() === "") {
            errors.username = "Username cannot be empty";
            isValid = false;
        }
        // Validate email
        if (userData.email.trim() === "") {
            errors.email = "Email address cannot be empty";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            errors.email = "Invalid email address";
            isValid = false;
        }
        // Validate password
        if (userData.password.trim() === "") {
            errors.password = "Password cannot be empty";
            isValid = false;
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(userData.password)) {
            errors.password = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 6 characters long";
            isValid = false;
        }
        // Validate client_admin
        if (userData.client_admin.trim() === "") {
            errors.client_admin = "Please select an option";
            isValid = false;
        }
        setFormErrors(errors);
        return isValid;
    }

    let formHandler = (event) => {
        event.preventDefault();
        if (validateForm()) {
            axios.post("http://localhost:3005/users", userData).then((response) => {
                console.log("Data Submitted")
            });
            navigate('/login')
        }

    }

    let operationHandler = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className='register-body' fluid>
            <Form className='form-container container w-25 p-3' onSubmit={formHandler} >
                <h1 className='text-center fs-3 regTitle'>Register Form</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='username' placeholder="Username" autoComplete='off' onChange={operationHandler} />
                    <Form.Text className="text-danger">
                        {formErrors.username}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" name='email' placeholder="Email address" autoComplete='off' onChange={operationHandler} />
                    <Form.Text className="text-danger">
                        {formErrors.email}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" autoComplete='off' onChange={operationHandler} />
                    <Form.Text className="text-danger">
                        {formErrors.password}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSelect">
                    <Form.Select className='inputs mb-5' name='client_admin' onChange={operationHandler} aria-label="Login As" >
                        <option>Register As:</option>
                        <option value="client">Client</option>
                        <option value="administrator">Administrator</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {formErrors.client_admin}
                    </Form.Text>
                </Form.Group>
                <div className='text-center '>
                    <Button className='w-25 my-button' variant="dark" type="submit">
                        Register
                    </Button>
                </div>

            </Form>

        </div>
    )
}
