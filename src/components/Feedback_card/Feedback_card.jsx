import React from 'react';
import Avatar from '../Avatar/Avatar';
import s from './Feedback_card.module.css'

const Feedback_card = (props) => {
    return (
        <div className={s.container}>
            <div className={s.row1}>
                <Avatar/>
                <div className={s.info}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.position}>{props.position}</div>
                </div>
                <div className={s.date}>
                    {props.date}
                </div>
            </div>

            <div className={s.row2}>
                {props.info}
            </div>

        </div>
    );
}

export default Feedback_card;
