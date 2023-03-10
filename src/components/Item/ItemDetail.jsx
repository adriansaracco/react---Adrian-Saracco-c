import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector";

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    const onAdd = (qty) => {
        addToCart(item, qty);
    };

    return (
        <Row className="container-fluid">
            <Col className="col-md-5 text-center mt-2 container-fluid">
                <img className="mw-100" src={item?.img} alt={item?.title} />
            </Col>
            <Container className="mt-2 col-md-7 container-fluid">
                <Col className="col-md-12">
                    <h1>{item?.title}</h1>
                </Col>
                <Col className="col-md-12">
                    <h2>$ {item?.price}</h2>
                </Col>
                <Col className="col-md-12">
                    <p>{item?.text}</p>
                </Col>
                <ItemQuantitySelector stock={item?.stock} initial={1} handleAdd={onAdd} />
            </Container>
        </Row>
    );
};

export default ItemDetail;
