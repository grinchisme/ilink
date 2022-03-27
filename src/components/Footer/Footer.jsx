import React from 'react';
import IconComponent from '../IconComponent/IconComponent';
import s from './Footer.module.css';
const Footer = ( ) => {
    return (
        <footer className={s.footer}>
            <div className={s.company}>
                © iLINK ACADEMY. ALL RIGHTS RESERVED. 2022
            </div>

            <div className={s.icon}>
                <IconComponent name='Frame 137336554'/>
            </div>
        </footer>
    )
}

export default Footer;