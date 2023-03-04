import React from 'react';
import styles from './itemCoin.module.css'
const ItemCoin = (props) => {
    // console.log(props)
    const {image , name , price , symbol , change } = props
    return (
        <div className={styles.coinBox}>
            <img src={image}/>
            <h4>{symbol.toUpperCase()}</h4>
            <h5>{name}</h5>
            <h5 className={change > 0 ? styles.green : styles.red}>{Math.floor(change)}%</h5>
            <h4>{price}$</h4>
        </div>
    );
};

export default ItemCoin;