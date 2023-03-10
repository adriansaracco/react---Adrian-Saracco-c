import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    const [orderId, setOrderId] = useState(null);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalItems(cart.reduce((previous, current) => previous + current.qty, 0));
        setTotalPrice(cart.reduce((previous, current) => previous + current.qty * current.price, 0));
    }, [cart]);

    const addToCart = (item, qty) => {
        if (isInCart(item.id)) {
            let index = cart.findIndex((elem) => elem.id === item.id);
            let product = cart[index];
            product.qty += qty;
            const newCart = [...cart];
            // * Elimina el elemento con qty nuevo por el viejo
            newCart.splice(index, 1, product);
            setCart([...newCart]);
        } else {
            setCart([...cart, { ...item, qty }]);
        }
    };

    const removeItemById = (id) => {
        // Elimina el producto y el total
        const newCart = [...cart];
        let index = newCart.findIndex((elem) => elem.id === id);
        newCart.splice(index, 1);
        setCart([...newCart]);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (productID) => {
        return cart.some((item) => item.id === productID);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                removeItemById,
                clearCart,
                totalPrice,
                setTotalPrice,
                totalItems,
                orderId,
                setOrderId,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
