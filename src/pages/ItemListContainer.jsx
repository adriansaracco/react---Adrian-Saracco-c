import { getFirestore } from "firebase/firestore";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../queries/Product";
import ItemList from "../components/Item/ItemList";
import ItemPlaceholder from "../components/Item/ItemPlaceholder";
import { Row } from "react-bootstrap";


const ItemListContainer = () => {
    
    const [isLoading, setLoading] = useState(true);
   
    const [prods, setProds] = useState(); // * prods filtrados
    
    const { categoryid } = useParams();

    useEffect(() => {
        const db = getFirestore();
        getAllProducts(db)
            .then((items) => {
                setLoading(false);
                
                if (categoryid) {
                    
                    const filteredArray = items.filter((item) => item.category === categoryid);
                    setProds(filteredArray);
                } else {
                    
                    setProds(items);
                }
            })
            .catch((error) => {
                console.error("Error en consulta a DB: ", error);
            });
    }, [categoryid]);

    return (
        <main className="ItemListContainer">
            <div className="Title-itemListContainer mt-2">
                {categoryid === undefined ? (
                    <h1>Todos nuestros productos</h1>
                ) : (
                    <h1>
                        Categoría elegida: <b>{categoryid}</b>
                    </h1>
                )}
            </div>
            <div className="Body-itemListContainer container-fluid mx-1">
                {isLoading && (
                    <Row xs={1} sm={2} lg={3} xl={4} xxl={5}>
                        <ItemPlaceholder />
                        <ItemPlaceholder />
                        <ItemPlaceholder />
                    </Row>
                )}
                {!isLoading &&
                    (prods?.length === 0 ? (
                        <p className="text-center">No hay productos</p>
                    ) : (
                        <ItemList products={prods} />
                    ))}
            </div>
        </main>
    );
};

export default ItemListContainer;
