import React from 'react'
import s from './Button2_icon.module.css';

const Button2_icon = (props) => {
    const windowInnerWidth = document.documentElement.scrollWidth;
    
    if (windowInnerWidth < 764) {
        return (
            <button className={s.button2}>
                <div className={s.content}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#FFFFFF" />
                    </svg>
                </div>
            </button>
        )
    } else {
        return (
            <button className={s.button2}>
                <div className={s.content}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#FFFFFF" />
                    </svg>
                    {props.text}
                </div>
            </button>
        )
    }

}

export default Button2_icon;