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
        name: '',
        email: '',
        pass: '',
        confPass: '',
        law: '',
    })

    const [errors , setErrors] = useState({})
    const [focus , setFocus] = useState({
        name: false,
        email: false,
        pass: false,
        confPass: false,
        law: false,
    })

    const changrHandeler = (e) => {
        if (e.target.name === 'law'){
            setData({...data , [e.target.name]: e.target.checked})
        }else {
            setData({...data , [e.target.name] : e.target.value})
        }
    }

    const focusHandeler = (e) => {
        setFocus({...focus , [e.target.name] : true})
    }

    const submitHandeler = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0){
            setFocus({
                name: true,
                email: true,
                pass: true,
                confPass: true,
                law: true,
            })
            notify('No' , "error");
        }else {
            notify('Ok' , "success");
        }
    }

    useEffect(() => {
        setErrors(Validate(data , 'signin'))

    } , [data])



    return (
        <>
            <form className={styles.form} onSubmit={submitHandeler}>
                <h1>SignUp</h1>
                <div className={styles.inputBox}>
                    <label>Name</label>
                    <input type={"text"} name={"name"} value={data.name} onChange={changrHandeler} onFocus={focusHandeler}/>
                    {errors.name && focus.name && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.inputBox}>
                    <label>ConfPass</label>
                    <input type={"text"} name={"confPass"} value={data.confPass} onChange={changrHandeler} onFocus={focusHandeler}/>
                    {errors.confPass && focus.confPass && <span>{errors.confPass}</span>}
                </div>
                <div className={styles.checked}>
                    <div>
                        <label>I Accept All Law</label>
                        <input type={"checkbox"} name={"law"} value={false} onChange={changrHandeler} onFocus={focusHandeler}/>
                    </div>
                    {errors.law && focus.law && <span>{errors.law}</span>}
                </div>
                <div className={styles.btn}>
                    <Link to="/login">Login</Link>
                    <button type={"submit"}>SignUp</button>
                </div>
            </form>

            <ToastContainer />
        </>


    );
};

export default SignIn;