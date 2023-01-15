import { useContext } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidgetActions = () => {
    const { totalItems, totalPrice, clearCart } = useContext(CartContext);

    return (
        <>
            <Dropdown.Divider />
            <span className="cart-total">Total productos: {totalItems}</span>
            <span className="cart-total">Monto total: $ {totalPrice}</span>
            <Dropdown.Divider />
            <span className="cart-buttons">
                <Link to={"cart/"}>
                    <Button variant="success">Pagar</Button>
                </Link>
                <Button onClick={clearCart} variant="danger">
                    Vaciar Compra
                </Button>
            </span>
        </>
    );
};
