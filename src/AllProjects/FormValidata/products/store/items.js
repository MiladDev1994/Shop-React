import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import style from './item.module.css';
import {CardContext} from "../context/CardContextProvider";
import trash from '../../../../image/trash.svg';
import plus from '../../../../image/plus-lg.svg';
import dash from '../../../../image/dash-lg.svg';


const Items = ({productData}) => {

    const {state ,dispatch} = useContext(CardContext);

    const check = (state , id) => {
        const result =  !!state.selectedItems.find(item => item.id === id);
        return result;

    }

    const numBasket = (state , id) => {
        const index = state.selectedItems.findIndex(item => item.id === id)
        if (index === -1){
            return false;
        }else {
            return state.selectedItems[index].quantity;
        }
    }

    useEffect(() => {
    })
    return (

        <div className={style.boxStyle}>
            {/*{console.log(state)}*/}
            <img src={productData.image}  className={style.ImgStale} alt="logo"/>
            <p>{productData.title}</p>
            <h5>{`${productData.price}$`}</h5>
            <div className={style.buyBtn}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    {numBasket(state , productData.id) > 1 && <button className={style.miniBtn} onClick={() => dispatch({type:"DECREASE" , payload:productData})}> <img src={dash} /> </button>}
                    {numBasket(state , productData.id) === 1 && <button className={style.miniBtn} onClick={() => dispatch({type:"REMOVE_ITEM" , payload:productData})}> <img src={trash} /> </button>}
                    {numBasket(state , productData.id) >= 1 && <h5 className={style.value}>{numBasket(state , productData.id)}</h5>}
                    {
                        check(state , productData.id) ?
                            <button className={style.miniBtn} onClick={() => dispatch({type:"INCREASE" , payload:productData})}> <img src={plus} /> </button>:
                            <button className={style.maxiBtn} onClick={() => dispatch({type:"ADD_ITEM" , payload:productData})}>Add</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;