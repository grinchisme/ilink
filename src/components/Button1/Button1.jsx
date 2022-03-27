import React from 'react'
import s from './Button1.module.css';

const Button1 = (props) => {
    return (
        <button className={s.button1}>{props.text}</button>
    )
}

export default Button1;