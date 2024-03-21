import React from 'react'
import BoxContainer from '../BoxContainer/BoxContainer'
import logo from '../../images/logo.png'
import emailSvg from '../../images/email.svg'
import call from '../../images/call.svg'
import styles from './Nav.module.scss';

function Nav({onOpen}) {
  
    return(
        <BoxContainer>
        <div className={styles.nav}>
            <div className={styles.logo}>
                <a href="/">
                <img src={logo} alt={logo}/>
                </a>
            </div>
            <ul className={styles.list}>
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="#flats">Квартиры</a>
              </li>
              <li>
                <a href="#about">О нас</a>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
            </ul>

                <div className={styles.infoBg}>
                    <div className={styles.boxWImages}>
                        <img src={emailSvg} alt={emailSvg} />
                        <span>mail@yandex.ru</span>
                </div>
                    <div className={styles.boxWImages}>
                    <img src={call} alt={call} />
                        <span>+7 (919) 714-25-00</span>
                </div>
            <button onClick={onOpen}>Заказать звонок</button>

                </div>
        </div>
        </BoxContainer>
    )
}
export default Nav