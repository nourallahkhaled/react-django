import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../CSS/store.css'
export function Products() {
    let [products, setProducts] = useState([]);

    let getAllProduct = async () => {
        try {
            let response = await axios.get("http://localhost:8000/api/allproducts");
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    let deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/product/${id}`);
            getAllProduct();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <div style={{backgroundColor:"#FFF1DC"}} className='p-5 pt-5 text-center'>
            <div className='container'>
                <h2 className='p-4 pt-5 text-center store-title' style={{display:"inline-block", marginLeft:"430px"}}>Our Products</h2>
                <NavLink to='/products/0/edit' className="btn" style={{backgroundColor:"#3A98B9", marginLeft:"350px"}}>
                    <i className="bi bi-plus-lg"></i>
                    Add New Product
                </NavLink>
                <Table className='myTable'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            {/* <th>Product Image</th> */}
                            <th>Price</th>
                            <th>Quanitity</th>
                            <th>Description</th>
                            <th>Actions</th>


                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    {/* <td><img src={product.image} style={{height:"150px"}}></img></td> */}
                                    <td>{product.productPrice}</td>
                                    <td>{product.productQuantity}</td>
                                    <td>{product.productDescription}</td>
                                    <td>
                                        <NavLink to={`/products/${product.id}/edit`}>
                                            <i className='fs-2 text-info mx-1 bi bi-pencil-square'></i>
                                        </NavLink>
                                        <i className='fs-2 text-danger mx-1 bi bi-trash3-fill' onClick={() => deleteProduct(product.id)}
                                            style={{ cursor: "pointer" }}></i>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}