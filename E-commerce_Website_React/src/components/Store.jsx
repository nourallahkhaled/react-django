import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";

const Store = () => {
    const [storeItems, setStoreItems] = useState([]);

    useEffect(() => {
        const fetchStoreItems = async () => {
        const response = await fetch("http://localhost:8000/api/allproducts");
        const data = await response.json();
        setStoreItems(data);
        };

        fetchStoreItems();
    }, []);

    return (
        <div className="bg-store pt-5">
            <h1 className="p-4 mt-3 text-center store-title">New Collection</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {storeItems.map((product) => (
                <Col key={product.id}>
                    <StoreItem
                        id={product.id}
                        productName={product.productName}
                        productDescription={product.productDescription}
                        productPrice={product.productPrice}
                        productQuantity={product.productQuantity}
                        image={product.image}
                    />
                </Col>
                ))}
            </Row>
        </div>
    );
};

export default Store;