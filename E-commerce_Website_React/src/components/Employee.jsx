import React from 'react';
import axios from 'axios'

export class Employee extends React.Component {
    state = {details:[]}

    componentDidMount() {
        axios.get("http://localhost:8000")
            .then(res => {
                this.setState({ details: res.data });
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <h2>Helloooo</h2>
                {this.state.details.map((output, id) => {
                    return (
                        <div key={id}>
                            <div>
                                <h2>{output.productName}</h2>
                                <h2>{output.productDescription}</h2>
                                <h2>{output.productQuantity}</h2>
                                <h2>{output.productPrice}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}