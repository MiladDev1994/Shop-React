import React, { useEffect } from "react";
import {Route, Routes , useLocation} from 'react-router-dom';
import Navbar from "../../navbar";
import Store from "./products/store/store";
import SignIn from "./SignIn";
import Login from "./Login";
import ProductContextProvider from "./products/context/productContextProvider";
import Product from "./products/product/product";
import Basket from "./products/basket/basket";
import Coin from "../Coin/coin";


import CardContextProvider from "./products/context/CardContextProvider";

const IndexF = () => {




    return (
        <ProductContextProvider>
            <CardContextProvider>
                <Navbar />
                <Routes>
                    <Route path={"/login"} element={< Login />} />
                    <Route path={"/signup"} element={< SignIn />} />
                    <Route path={"/products"} element={< Store />} />
                    <Route path={"/basket"} element={< Basket />} />
                    <Route path={"/products/:id"} element={< Product />} />
                    <Route path={"/coin"} element={< Coin />} />
                </Routes>
            </CardContextProvider>
        </ProductContextProvider>
    );
}

export default IndexF;
