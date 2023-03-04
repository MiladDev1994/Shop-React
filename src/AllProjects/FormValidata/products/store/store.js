import React, {useContext, useEffect} from 'react';
import Radium from "radium";
import {productsContext} from "../context/productContextProvider";
import Items from "./items";



const Store = () => {
    const ItemStyle = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around",
        marginTop:"80px",
    }

    const products = useContext(productsContext);
    // console.log('store')
    return (
        <div style={ItemStyle}>

            {
                products.map(product => <Items  key={product.id} productData={product} />)

            }

        </div>
    );
};

export default Radium(Store);