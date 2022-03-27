import React, { Component } from "react";
import Slider from "react-slick";
import Feedback_card from "../Feedback_card/Feedback_card";

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <Feedback_card 
                            name='Буба Бубенцов' 
                            position='Дизайнер' 
                            date='08.01.2022' 
                            info='Отличный коллектив, руководители понимают сам процесс работы 
                            каждого сотрудника и помогают всем без исключения. Система KPI позволяет 
                            реально хорошо зарабатывать по простому принципу - чем больше и лучше ты 
                            работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, 
                            организовали курсы английского языка бесплатно, оплачивают тренажерный зал. 
                            Зарплату выплачивают всегда вовремя.' />
                    </div>
                    <div>
                        <Feedback_card 
                            name='Илья Анташкеевич' 
                            position='' 
                            date='08.01.2022' 
                            info='Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию.
                            Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, 
                            все на одной волне. Всегда готовы помочь с любым вопросом. 
                            Для эффективной работы здесь нужно хорошо знать иностранные языки.' />
                    </div>
                    <div>
                        <Feedback_card 
                            name='Юрина Маргарита' 
                            position='' 
                            date='26.12.2021' 
                            info='Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу 
                            сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы 
                            с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, 
                            грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта 
                            компании ilink.' />
                    </div>
                    <div>
                        <Feedback_card 
                            name='Дмитрий Иванов' 
                            position='' 
                            date='16.12.2021' 
                            info='Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и 
                            трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории,
                            так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, 
                            и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.' />
                    </div>
                </Slider>
            </div>
        );
    }
}