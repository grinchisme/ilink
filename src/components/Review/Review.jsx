import React from 'react';
import s from './Review.module.css';
import Button2_icon from '../Button2_icon/Button2_icon'
import SimpleSlider from '../SimpleSlider/SimpleSlider';

const Review = ({active, setActive}) => {
    return (
        <div>
            <div className={s.window}>
                <div className={s.container}>
                    <div className={s.row1}>
                        <div className={s.title}>
                            Отзывы
                        </div>
                        <div className={s.button} onClick={()=> setActive(true)}>
                            <Button2_icon text='Добавить отзыв' />
                        </div>
                    </div>

                    <div>
                        <div className={s.cards}>
                            <SimpleSlider/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Review;
