import React from 'react';
import Avatar from '../Avatar/Avatar';
import Button2 from '../Button2/Button2';
import Button2_icon from '../Button2_icon/Button2_icon';
import IconComponent from '../IconComponent/IconComponent';
import s from './Header.module.css';
const Header = (props) => {
    const windowInnerWidth = document.documentElement.scrollWidth;
    if (windowInnerWidth > 764) {
        return (
            <header className={s.header}>
                <div className={s.colLeft}>
                    <Avatar />
                    <div className={s.PersonName}>{props.profileName}</div>
                </div>

                <div className={s.colMiddle}>
                    <div>
                        <IconComponent name='ilink' />
                    </div>
                    <div>
                        <IconComponent name='academy' />
                    </div>
                </div>

                <div className={s.colRight}>
                    <Button2 text='Личный кабинет' />
                </div>
            </header>
        )
    } else {
        return (
            <header className={s.header}>
                <div className={s.colLeft}>
                    <Avatar />
                    <div className={s.PersonName}>{props.profileName.split(' ')[0]}</div>
                </div>

                <div className={s.colMiddle}>
                    <div>
                        <IconComponent name='ilink' />
                    </div>
                    <div>
                        <IconComponent name='academy' />
                    </div>
                </div>

                <div className={s.colRight}>
                    <Button2_icon />
                </div>
            </header>
        )
    }
}

export default Header;