import React, {useContext} from 'react';
import {useLocation} from "react-router-dom";
import {CardContext} from "./AllProjects/FormValidata/products/context/CardContextProvider";
import {Link} from "react-router-dom";
import styles from './navbar.module.css';
import basketLogo from '../src/image/1a1MeGq90KaUCSlxsBusRwZpmCxODwKDGzxWdKjf.svg'

const Navbar = () => {

    const location = useLocation().pathname.replace('/' , '')

    const basket = useContext(CardContext)
    return (
        <ul className={styles.navbar}>
            <li><Link to={"/login"} className={location === "login" ? styles.inHref : styles.outHref }>Login</Link></li>
            <li><Link to={"/signup"} className={location === "signup" ? styles.inHref : styles.outHref }>Register</Link></li>
            <li><Link to={"/products"} className={location === "products" ? styles.inHref : styles.outHref }>Products</Link></li>
            <li><Link to={"/coin"} className={location === "coin" ? styles.inHref : styles.outHref }>Coin</Link></li>
            <li><Link to={"/basket"} className={location === "basket" ? styles.inHref : styles.outHref }><img width={"30px"} src={basketLogo} /> <span>{basket.state.itemsCounter}</span> </Link></li>
        </ul>
    );
};

export default Navbar;