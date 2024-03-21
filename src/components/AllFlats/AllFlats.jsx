import React from 'react'
import BoxContainer from '../BoxContainer/BoxContainer'
import styles from './AllFlats.module.scss'
import { ALLFLATS } from '../Data/data'
import { Link } from "react-router-dom";


export default function AllFlats({onSelect}) {
    return(
        <BoxContainer>
        <div className={styles.allFlats}>
            <h2>Наши квартиры</h2>
            <div className={styles.cards}>
                
            {ALLFLATS.map(item =>(
                 <div className={styles.items} key={item.id}>
                 <img className={styles.image} src={item.image} alt="*" />
                 <h4>{item.title}</h4>
                 <p>{item.text}</p>
                 <span> {item.span}</span>
                 <div className={styles.locations}>
                     <img className={styles.icon} src={item.locationImg} alt="" />
                     <p>{item.locationText}</p>
                 </div>
                 <Link to='/selectFlats'>
                 <button onClick={() => onSelect(item.id)}>Подробнее</button>
                 </Link>
             </div>
            ))}
            </div>

        </div>
        </BoxContainer>
    )
}