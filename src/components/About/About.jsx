import React from 'react'
import BoxContainer from '../BoxContainer/BoxContainer'
import styles from './About.module.scss'
import icon5 from '../../images/icon5.svg'
import icon6 from '../../images/icon6.svg'
import icon7 from '../../images/icon7.svg'

function About() {
    return (
        <BoxContainer>
        <div className={styles.about}>
            <h2>О нас</h2>
            <div className={styles.items}>
                <p className={styles.text}>Сегодня «Домашняя гостиница» — одна из крупнейших в Пермском крае гостиничных сетей, динамично расширяющая географический охват и повышающая качество сервиса.</p>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <img src={icon5} alt={icon5} />
                    <div>
                        <span>40+</span>
                        <p>Клиентов</p>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <img src={icon6} alt={icon6} />
                    <div>
                        <span>100+</span>
                        <p>Отзывов</p>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <img src={icon7} alt={icon7} />
                    <div>
                        <span>9</span>
                        <p>Квартир</p>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
        </div>
        </BoxContainer>
    )
}
export default About