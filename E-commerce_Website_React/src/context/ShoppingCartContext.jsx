import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartContext = createContext({});
const initialCartItems = localStorage.getItem("shopping-cart")
? JSON.parse(localStorage.getItem("shopping-cart"))
: [];

const ShoppingCartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState(initialCartItems);

    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }, [cartItems]);
    
    // the total quantity of items in the shopping cart
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    );

    const openCart = () => {
        setIsOpen(true);
    };
    const closeCart = () => {
        setIsOpen(false);
    };
    // returns the quantity of the item with that id in the shopping cart. 
    // It does this by using the find method to search through the cartItems array for an item with a matching id, 
    // and then returning the quantity property of that item if it exists, otherwise returning 0.
    const getItemQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };
    // If the item does not already exist in the shopping cart, it adds a new item with a quantity of 1. 
    // It does this by using the find method to search through the currItems array for an item with a matching id, 
    // and then using map to create a new array with the updated quantity values.
    const increaseCartQuantity = (id) => {
        setCartItems((currItems) => {
        if (currItems.find((item) => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }];
        } else {
            return currItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            } else {
                return item;
            }
            });
        }
        });
    };
    // If the item's quantity becomes 0, it removes the item from the cart. 
    // and then using map and filter to create a new array with the updated quantity values and removed items.
    const decreaseCartQuantity = (id) => {
        setCartItems((currItems) => {
        if (currItems.find((item) => item.id === id)?.quantity === 1) {
            return currItems.filter((item) => item.id !== id);
        } else {
            return currItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
            } else {
                return item;
            }
            });
        }
        });
    };
    // create a new array that excludes the item with the matching id.
    const removeFromCart = (id) => {
        setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    };

    return (
        <ShoppingCartContext.Provider
        value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            openCart,
            closeCart,
            cartQuantity,
            cartItems,
        }}>
        {children}
        <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
        );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};
