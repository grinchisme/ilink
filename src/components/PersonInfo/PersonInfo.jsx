import React from 'react';
import IconComponent from '../IconComponent/IconComponent';
import s from './PersonInfo.module.css';

const PersonInfo = () => {
    return (
        <div className={s.Info}>
            <div className={s.box}>
                <div className={s.colLeft}>
                    <div className={s.name}>
                        Владимир Демьянов
                    </div>
                </div>
                <div className={s.colRight}>
                    <div className={s.date}>
                    08.08.2001
                    </div>
                </div>
            </div>
            <div className={s.PersonData}>
                <div className={s.PersonDataItem}><b>Город:</b> Томск</div>
                <div className={s.PersonDataItem}>
                    <b>Пол:</b> Мужской
                    <IconComponent name='Female'/>
                </div>
                <div className={s.PersonDataItem}><b>Возвраст:</b> 20</div>
            </div>

            <div className={s.SelfData}>
                <b>О себе:</b> Всем привет! Меня зовут Вова, мне 20 лет, я студент. Учусь на Механико-Математическом факультете, но хочу связать свою жизнь с It.
            </div>

            <div className={s.PetData}>
                <IconComponent name='pet 1'/>
                <div className={s.PetStatus}>
                    <b>Домашнее животное:</b> нет
                </div>
            </div>
        </div>
    )
}

export default PersonInfo;