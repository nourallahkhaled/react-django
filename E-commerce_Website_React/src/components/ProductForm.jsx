import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import '../CSS/productForm.css'

export function ProductForm() {
    let { id } = useParams();
    let navigate = useNavigate();

    let [product, setProduct] = useState({});
    let [formValues, setFormValues] = useState({
        productName: "",
        image: "",
        price: "",
        pquantity: "",
    });
    let formOperation = (e) => {
        e.preventDefault();
        const { productName, image, price, pquantity } = formValues;
        if (id == 0) {
            axios.post("http://localhost:3005/products", {
                productName,
                image,
                price: parseInt(price),
                pquantity: parseInt(pquantity),
            })
            .then(() => {
                navigate("/store");
            });
            } else {
            axios.put(`http://localhost:3005/products/${id}`, {
                productName,
                image,
                price: parseInt(price),
                pquantity: parseInt(pquantity),
            })
            .then(() => {
                navigate("/store");
            });
            }
        };



    let OperationHandler = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    let getProduct = async () => {
        let response = await axios.get(`http://localhost:3005/products/${id}`);
        setProduct(response.data);
        setFormValues(response.data);
    };
    useEffect(() => {
        if (id != 0) {
            getProduct();
        }
    }, []);
    return (
        <div className="pt-5 pb-5 bg-store">
            <div style={{ width: "500px" }} className='container mt-5 bg-form p-5'>
                <Form onSubmit={formOperation}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label style={{ color: "#3A98B9", fontWeight: "bold" }}>Product Name</Form.Label>
                        <Form.Control
                            onChange={OperationHandler}
                            name='productName'
                            type='text'
                            placeholder='Enter Product Name'
                            defaultValue={product.productName}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicImage'>
                        <Form.Label style={{ color: "#3A98B9", fontWeight: "bold" }}>Product Image</Form.Label>
                        <Form.Control
                            onChange={OperationHandler}
                            name='image'
                            type='text'
                            placeholder='Enter Product Image URL'
                            defaultValue={product.image}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label style={{ color: "#3A98B9", fontWeight: "bold" }}>Price</Form.Label>
                        <Form.Control
                            onChange={OperationHandler}
                            name='price'
                            type='number'
                            placeholder='Enter Product Price'
                            defaultValue={product.price}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='quantity'>
                        <Form.Label style={{ color: "#3A98B9", fontWeight: "bold" }}>Quantity</Form.Label>
                        <Form.Control
                            onChange={OperationHandler}
                            name='pquantity'
                            type='number'
                            placeholder='Enter Product Quantity'
                            defaultValue={product.pquantity}
                        />
                    </Form.Group>

                    <button className="myBtn" type='submit'>
                        {id == 0 ? "Add Product" : "Edit Product"}
                    </button>
                </Form>
            </div>
        </div>
    );
}
