import React from 'react';
import Button2 from '../Button2/Button2';
import Button2_icon from '../Button2_icon/Button2_icon';
import IconComponent from '../IconComponent/IconComponent';
import s from './Comment.module.css';


const Comment = () => {
    const windowInnerWidth = document.documentElement.scrollWidth;

    if (windowInnerWidth > 764) {
        return (
            <div>
                <div className={s.row1}>
                    <div className={s.title}>
                        Отзыв
                    </div>
                    <div className={s.icon}>
                        <IconComponent name='add-line-1' />
                    </div>
                </div>

                <div className={s.text}>
                    Как вас зовут?
                </div>

                <div className={s.row2}>
                    <div className={s.put1Box}>
                        <input className={s.put1} name="login" id="login" placeholder="Имя Фамилия"></input>
                    </div>
                    <div className={s.button}>
                        <Button2_icon text='Загрузить фото' />
                    </div>
                </div>

                <div className={s.text}>
                    Все ли вам понравилось?
                </div>

                <div className={s.put2Box}>
                    <input className={s.put2} name="login" id="login" placeholder="Напишите пару слов о вашем опыте..." maxlength="200" required ></input>
                </div>

                <div className={s.row3}>
                    <div>
                        <Button2 text='Отправить отзыв' />
                    </div>

                    <div className={s.noteIcon}>
                        <IconComponent name='Info Square' />
                    </div>
                    <div className={s.note}>
                        Все отзывы проходят модерацию в течение 2 часов
                    </div>

                </div>

            </div>
        );
    } else {
        return (
            <div>
                <div className={s.row1}>
                    <div className={s.title}>
                        Отзыв
                    </div>
                    <div className={s.icon}>
                        <IconComponent name='add-line-1' />
                    </div>
                </div>

                <div className={s.text}>
                    Как вас зовут?
                </div>

                <div className={s.row2}>
                    <div className={s.put1Box}>
                        <input className={s.put1} name="login" id="login" placeholder="Имя Фамилия"></input>
                    </div>
                    <div className={s.button}>
                        <Button2_icon text='Загрузить фото' />
                    </div>
                </div>

                <div className={s.text}>
                    Все ли вам понравилось?
                </div>

                <div className={s.put2Box}>
                    <input className={s.put2} name="login" id="login" placeholder="Напишите пару слов о вашем опыте..." maxlength="200" required ></input>
                </div>

                <div className={s.row3}>

                    <div className={s.noteIcon}>
                        <IconComponent name='Info Square' />
                    </div>
                    <div className={s.note}>
                        Все отзывы проходят модерацию в течение 2 часов
                    </div>

                </div>

                <div>
                    <Button2 text='Отправить отзыв' />
                </div>



            </div>
        )

    }
}

export default Comment;
