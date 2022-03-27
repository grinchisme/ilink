import React, { useState } from 'react';
import s from './App.module.css';
import Comment from './components/Comment/Comment';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import PersonInfo from './components/PersonInfo/PersonInfo';
import Review from './components/Review/Review';
import img from './sourceImage/2.jpg'



const App = () => {
  const [modalActive, setModalActive]= useState(true);
  return (
    <div>
      <Header profileName='Владимир Демьянов' />
      <div className={s.App}>
        <div className={s.H}>
          Добро пожаловать в акадению!
        </div>

        <div className={s.allInfo}>
          <div className={s.imageBox}>
            <img src={img} alt="description of image" className={s.image}/>
          </div>
          <PersonInfo />
        </div>
        <div className={s.review}>
          <Review active={modalActive} setActive={setModalActive}/>
        </div>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <Comment/>
      </Modal>
      
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
