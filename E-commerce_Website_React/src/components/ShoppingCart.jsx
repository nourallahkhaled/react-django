import React, { useState, useEffect } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

const ShoppingCart = ({ isOpen }) => {
    const { closeCart, cartItems } = useShoppingCart();
    const [storeItems, setStoreItems] = useState([]);

    useEffect(() => {
        const fetchStoreItems = async () => {
        const response = await fetch("http://localhost:3005/products");
        const data = await response.json();
        setStoreItems(data);
        };

        fetchStoreItems();
    }, []);

    return (
        <Offcanvas style={{ backgroundColor: '#FFF1DC', color: '#3A98B9', fontSize:"20px" }} show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{fontWeight:'bold', fontSize:"25px"}}>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
            {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
                Total{" "}
                {cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find((i) => i.id === cartItem.id);
                                        return total + (item?.price || 0) * cartItem.quantity;
                                    }, 0)
                }
            </div>
            </Stack>
        </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ShoppingCart;