import React, {useContext} from 'react';
import {productsContext} from "../context/productContextProvider";
import {useParams} from "react-router-dom";

const Product = () => {
    const params = useParams();
    const id = Number(params.id);
    const data = useContext(productsContext);
    const item = data[id-1]

    return (

        <div>
            {data.length === 0 ?
                <h1>Loding....</h1> :

                <div>
                    <img src={item.image} alt="logo"/>
                    <h2>{item.title}</h2>
                </div>
            }
        </div>
    );
};

export default Product;