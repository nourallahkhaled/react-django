import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ id, quantity }) => {
    const { removeFromCart } = useShoppingCart();
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

    const { productName, price, image } = item;

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
            src={image}
            alt={`${productName}-img`}
            style={{ height:"200px", width: "125px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {productName}{" "}
                    {quantity > 1 && (
                    <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                        x{quantity}
                    </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                    {price}
                </div>
            </div>
            <div>{price * quantity}</div>
            <Button
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCart(item.id)}
            >
            &times;
            </Button>
        </Stack>
                );
        };
    
    export default CartItem;