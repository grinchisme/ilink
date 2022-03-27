import React from 'react';
import IconComponent from '../IconComponent/IconComponent';
import s from './Avatar.module.css';
import avatar1 from '../../sourceImage/avatar/avatar1.png'
import avatar2 from '../../sourceImage/avatar/avatar2.png'
import avatar3 from '../../sourceImage/avatar/avatar3.png'

const Avatar = (props) => {
    // if (props.name==avatar1){
    //     return (
    //         <div className={s.icon}>
    //             <img src={avatar1}/>
    //         </div>
    //     )
    // } else if (props.name==avatar2){
    //     return (
    //         <div className={s.icon}>
    //             <img src={avatar2}/>
    //         </div>
    //     )
    // } else if (props.name==avatar3){
    //     return (
    //         <div className={s.icon}>
    //             <img src={avatar3}/>
    //         </div>
    //     )
    // } else{
    //     return (
    //         <div className={s.icon}>
    //             <IconComponent name='Camera'/>
    //         </div>
    //     )
    // }
    return (
        <div className={s.icon}>
            <IconComponent name='Camera' />
        </div>
    )

}

export default Avatar;