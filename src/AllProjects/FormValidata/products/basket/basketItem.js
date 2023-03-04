import React, {useContext , useEffect} from 'react';
import styles from './basket.module.css';
import {CardContext} from "../context/CardContextProvider";

const BasketItem = (props) => {

    const {dispatch} = useContext(CardContext);
    const {image , title , price , quantity} = props.data



    return (
        <div className={styles.itemBox}>
            <img src={image} />
            <p>{title}</p>
            <h5>{quantity}</h5>
            <h5>{price}$</h5>
            <div>
                {quantity === 1 ?
                <button onClick={() => dispatch({type:"REMOVE_ITEM" , payload:props.data})}>*</button> :
                <button onClick={() => dispatch({type:"DECREASE" , payload:props.data})}>-</button>
                }
                <button onClick={() => dispatch({type:"INCREASE" , payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default BasketItem;