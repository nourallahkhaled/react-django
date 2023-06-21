import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import '../CSS/store.css'

const StoreItem = ({ id }) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        } = useShoppingCart();
    const [item, setItem] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchItem = async () => {
        const response = await fetch(`http://localhost:3005/products/${id}`);
        const data = await response.json();
        setItem(data);
        setLoading(false);
        };

        fetchItem();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const { productName, price, image, pquantity } = item;
    const quantity = getItemQuantity(id);

    let buttonText, label;
    if (pquantity === 0) {
        buttonText = 'Sold Out';
    }else if (pquantity === 1) {
        buttonText = 'Add To Cart';
        label = 'Hurry Up! Last Piece';
    } else {
        buttonText = 'Add To Cart';
    }
    const handleClick = () => {
        if (buttonText === 'Add To Cart') {
            increaseCartQuantity(id);
        }
    };

return (
    <Container className="mx-5 mb-5 bg-store">
        <Card style={{ width: '19rem' }}>
        <Card.Img
            variant="top"
            src= {image}
            style={{ height: "480px", objectFit: "contain" }}
        />
        <Card.Body className="d-flex flex-column bg-card">
            <Card.Title style={{ color: '#967E76', fontWeight: "bold" }}>{productName}</Card.Title>
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span style={{ fontWeight: "bold" }} className="ms-2 text-center text-muted">{price} EGP</span>
            </Card.Title>
            <Card.Text style={{ color: '#3A98B9', fontWeight: "bold" }}>Quantity: {pquantity} Pieces</Card.Text>
            <div className="mt-auto text-center">
            {label && <span style={{ color: '#967E76', fontWeight: "bold" }}>{label}</span>}
            <br />
            {quantity === 0 ? (
                <Button className="w-95" style={{ backgroundColor: '#3A98B9' }} disabled={pquantity === 0} onClick={() => handleClick()}>
                {buttonText}
                </Button>
            ) : (
                <div
                className="d-flex align-items-center flex-column"
                style={{ gap: "0.5rem" }}
                >
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: "0.5rem" }}
                >
                    <button className="pmsign" style={{ backgroundColor: '#3A98B9' }} onClick={() => decreaseCartQuantity(id)}>-</button>
                    <div>
                        <span style={{ color: '#967E76'}} className="fs-5 text-muted">{quantity} in cart</span>
                    </div>
                    <button className="pmsign" style={{ backgroundColor: '#3A98B9' }} onClick={() => increaseCartQuantity(id)}>+</button>
                </div>
                <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(id)}
                >
                    Remove
                </Button>
                </div>
            )}
            </div>
        </Card.Body>
        </Card>
    </Container>
        
    );
};

export default StoreItem;


