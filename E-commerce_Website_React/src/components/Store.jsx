import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";

const Store = () => {
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
        <div className="bg-store pt-5">
        <h1 className="p-4 mt-3 text-center store-title">New Collection</h1>
        <Row md={2} xs={1} lg={3} className="g-4">
            {storeItems.map((item) => (
            <Col key={item.id}>
                <StoreItem {...item} />
            </Col>
            ))}
        </Row>
        </div>
    );
};

export default Store;