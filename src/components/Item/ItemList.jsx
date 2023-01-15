import { Row } from "react-bootstrap";
import Item from "./Item";
import "bootstrap";

const ItemList = ({ products }) => {
   
    function renderItems() {
        return products?.map((item) => <Item prod={item} key={item.id} />);
    }

    return (
        <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
            {renderItems()}
        </Row>
    );
};

export default ItemList;
