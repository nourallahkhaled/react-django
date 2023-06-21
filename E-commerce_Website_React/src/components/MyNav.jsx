import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import '../CSS/MyNav.css'
export function MyNav(props) {
    let navigate = useNavigate()
    const { openCart, cartQuantity } = useShoppingCart();
    let handelLogout = () => {
        localStorage.removeItem("shopping-cart")
        window.location.reload();
        navigate('/home');
        props.changable.handler(false);
        // islogged(false);
    }
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                <Navbar.Brand style={{ color: '#EEEEEE' }} className="Brand fs-4 fw-bold" href="#home">Clothing Gold</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" id="left-nav">
                            <NavLink style={{ color: '#EEEEEE' }}  className="nav-link" to="/">Home</NavLink>
                            <NavLink style={{ color: '#EEEEEE' }} className="nav-link" to="/about">About</NavLink>
                            <NavLink style={{ color: '#EEEEEE' }} className="nav-link" to="/store">Products</NavLink>
                            {/* <NavLink style={{ color: '#EEEEEE' }} className="nav-link" to="/store" >
                            </NavLink> */}
                        </Nav>
    
                        {props.changable.data === "Login" ? (
                            <Nav className="ms-auto text-light">
                                <NavLink className="nav-link" style={{ color: '#EEEEEE' }} to="/login">{props.changable.data}</NavLink>
                            </Nav>
                        ) : (
                                <Nav className="ms-auto text-light">
                                    <span className="mt-2" > {props.changable.data}</span>
                                    <button onClick={openCart} style={{border:"0px" , backgroundColor:"transparent" , position: "relative", marginRight:"20px", marginLeft:"20px" }}>
                                        <i className='fs-5 text-light m-1 bi bi-cart3'></i>
                                        <div
                                            className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
                                            style={{
                                                color: "white",
                                                width: "1.5rem",
                                                height: "1.5rem",
                                                position: "absolute",
                                                bottom: 0,
                                                right: 0,
                                                transform: "translate(25%, 25%)",
                                            }}
                                            >
                                            {cartQuantity}
                                        </div>
                                    </button>
                                    <button style={{ background: 'none', border: 'none', color: 'white', marginLeft: "10px" }} onClick={handelLogout}>Log Out</button>
                                </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

