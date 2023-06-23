import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function UserDetails() {
    let { id } = useParams();
    let [customer, setCustomer] = useState({});
    let [editing, setEditing] = useState(false);
    let [firsstName, setFirstName] = useState("");
    let [lasstName, setLastName] = useState("");

    let getCustomerData = async () => {
        let response = await axios.get(`http://localhost:8000/api/customer/${id}`);
        setCustomer(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
    };

    useEffect(() => {
        getCustomerData();
    }, []);

    let handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    let handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };


    let handleFormSubmit = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:8000/api/customer/${id}`, {
        firstName: firsstName,
        lastName: lasstName,
        });
        setEditing(false);
        getCustomerData();
    };

    return (
        <div className="bg-light p-5">
        <div className="container mt-5">
            <div>
                <img
                style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    border: "2px solid antiquewhite",
                    borderRadius: "50%",
                }}
                src="https://www.pngitem.com/pimgs/m/0-6243_user-profile-avatar-scalable-vector-graphics-icon-woman.png"
                alt="user avatar"
                />
            </div>
            
            {editing ? (
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                <label htmlFor="firsstName">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="firsstName"
                    value={firsstName}
                    onChange={handleFirstNameChange}
                />
                <label htmlFor="lasstName">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="lasstName"
                    value={lasstName}
                    onChange={handleLastNameChange}
                />
                </div>
                <button type="submit" className="btn btn-dark">
                Save
                </button>
                <button
                type="button"
                className="btn btn-secondary ms-3"
                onClick={() => setEditing(false)}
                >
                Cancel
                </button>
            </form>
            ) : (
            <>
                <h3 className="lead fs-2 mt-3 text-info"  style={{display:'inline-block',paddingRight:'10px'}}>
                User Name: {customer.firstName} {customer.lastName}
                </h3>
                <button
                type="button"
                className="btn btn-dark"
                onClick={() => setEditing(true)}
                >
                <i class="bi bi-pencil-square"></i>
                </button>
                <p className="lead fs-2 mt-3 text-info">
                Email: {customer.email}
                </p>
            </>
            )}
        </div>
        </div>
    );
}

export default UserDetails;