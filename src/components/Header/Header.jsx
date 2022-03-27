import React from 'react';
import Avatar from '../Avatar/Avatar';
import Button2 from '../Button2/Button2';
import IconComponent from '../IconComponent/IconComponent';
import s from './Header.module.css';
const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.colLeft}>
                <Avatar/>
                <div className={s.PersonName}>{props.profileName}</div>
            </div>

            <div className={s.colMiddle}>
                <div>
                    <IconComponent name='ilink'/>
                </div>
                <div>
                    <IconComponent name='academy'/>
                </div>
            </div>

            <div className={s.colRight}>
                <Button2 text='Личный кабинет'/>
            </div>
        </header>
    )
}

export default Header;