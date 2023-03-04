import React, {useContext , useEffect} from 'react';
import {Link} from "react-router-dom";
import {CardContext} from "../context/CardContextProvider";
import BasketItem from "./basketItem";
import styles from './basket.module.css';

const Basket = () => {

    const {state , dispatch} = useContext(CardContext);


    return (
        <div className={styles.basketBox}>

            <div className={styles.productBox}>
                {state.selectedItems.map(product => <BasketItem key={product.id} data={product} />)}
            </div>

            <div className={styles.sumBox}>
                <div>
                    {state.itemsCounter > 0 ?
                        <>
                            <h5> Sum Price : {state.total}$ </h5>
                            <h5> Sum quantity : {state.itemsCounter} </h5>
                            <button onClick={() => dispatch({type:"CHECKOUT"})}>Checkout</button>
                            <Link to="/products">Go To Shop</Link>
                        </>
                        :
                        <Link to="/products">Go To Shop</Link>
                    }
                </div>
            </div>




        </div>
    );
};

export default Basket;