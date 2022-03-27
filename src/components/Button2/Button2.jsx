import React from 'react'
import s from './Button2.module.css';

const Button2 = (props) => {
    return (
        <button className={s.button2}>{props.text}</button>
    )
}

export default Button2;