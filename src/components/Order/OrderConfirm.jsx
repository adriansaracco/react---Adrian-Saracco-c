import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const OrderConfirm = ({ orderId }) => {
    const { clearCart } = useContext(CartContext);
    return (
        <>
            <h1>Comprobante Generado</h1>
            <h2>
                Podrás seguir tu compra con el siguiente código: <b>{orderId}</b>
            </h2>
            <Link to={"/"}>
                <Button onClick={clearCart} variant="outline-primary">
                    Ir al Inicio
                </Button>
            </Link>
        </>
    );
};
