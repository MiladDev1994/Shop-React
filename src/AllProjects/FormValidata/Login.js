import React , {useEffect, useState} from 'react';
import { Validate } from "./Validata";
import styles from './SignIn.module.css';
import {Link} from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {

    const notify = (text , type) => {
        if (type === "success"){
            toast.success(text , {position: "bottom-right", theme: "colored",});
        }else {
            toast.error(text , {position: "bottom-right", theme: "colored",});
        }


    }

    const [data , setData] = useState({
        email: '',
        pass: '',
    })

    const [errors , setErrors] = useState({})
    const [focus , setFocus] = useState({
        email: false,
        pass: false,

    })

    const changrHandeler = (e) => {
        setData({...data , [e.target.name] : e.target.value})
    }

    const focusHandeler = (e) => {
        setFocus({...focus , [e.target.name] : true})
    }

    const submitHandeler = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0){
            setFocus({
                email: true,
                pass: true,
            })
            notify('No' , "error");
        }else {
            notify('Ok' , "success");
        }
    }

    useEffect(() => {
        setErrors(Validate(data , 'login'))
    } , [data])


    return (
        <>
            <form className={styles.form} onSubmit={submitHandeler}>
                <h1>Login</h1>

                <div className={styles.inputBox}>
                    <label>Email</label>
                    <input type={"email"} name={"email"} value={data.email} onChange={changrHandeler} onFocus={focusHandeler}/>
                    {errors.email && focus.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.inputBox}>
                    <label>Pass</label>
                    <input type={"text"} name={"pass"} value={data.pass} onChange={changrHandeler} onFocus={focusHandeler}/>
                    {errors.pass && focus.pass && <span>{errors.pass}</span>}
                </div>

                <div className={styles.btn}>
                    <Link to="/signup">SignUp</Link>
                    <button type={"submit"}>Login</button>
                </div>
            </form>

            <ToastContainer />
        </>


    );
};

export default SignIn;