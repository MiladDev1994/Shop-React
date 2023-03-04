import React, {useEffect, useState , useRef} from 'react';
import ApiCoin from "./apiCoin";
import ItemCoin from "./itemCoin";
import styles from './itemCoin.module.css'

const Coin = () => {

    const [data , setData] = useState([])
    const [value , setValue] = useState('')

    useEffect(() => {
        const fetchapi = async () => {
            setData(await ApiCoin())
        }
        fetchapi()
    } , [])


    const newData = data.filter(coin => coin.name.toUpperCase().includes(value.toUpperCase()));
    return (
        <div className={styles.mainBox}>
                {!data.length ?
                    <h1> Loading.....</h1> :
                    <>
                        <input type={"text"} placeholder={"Search"} value={value} onChange={e => setValue(e.target.value)}/>
                        <div style={{marginTop:"50px" , borderRadius:"15px" , overflow:"hidden" , boxShadow:"0 0 30px rgba(0, 0, 0, 0.3)"}}>
                            {newData.map(coin => <ItemCoin
                                key={coin.id}
                                symbol={coin.symbol}
                                name={coin.name}
                                image={coin.image}
                                price={coin.current_price}
                                change={coin.price_change_percentage_24h}
                            />)}
                        </div>
                    </>
                }
        </div>
    );

};

export default Coin;