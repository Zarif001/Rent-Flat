import React from "react";
import styles from "./OurFlats.module.scss";
import BoxContainer from "../BoxContainer/BoxContainer";
import { Link } from "react-router-dom";
import { ALLFLATS } from "../Data/data";
import { useContext } from "react";
import { AppContext } from "../../store/AppContex";
function OurFlats() {
  const {onSelectId} = useContext(AppContext)
  return (
    <BoxContainer>
      <div id="flats" className={styles.ourFlats}>
        <h2 className={styles.title}>Наши квартиры </h2>
        <div className={styles.flats}>
          { 
            ALLFLATS.slice(0,4 ).map((item) =>(
              <div className={styles.items} key={item.id}>
                <div className={styles.picture}>
                  <img src={item.image} alt={item.image} />
                </div>
                <div className={styles.item}>
                  <h3>{innerWidth < 1280 ? item.titleRes : item.title} </h3>
                  <p>Сутки: <span>{item.span}</span></p>
                  <div className={styles.location}>
                  <div style={{display: innerWidth < 1280 ? 'none' : 'flex' }}>
                    <img src={item.locationImg} alt={item.locationImg} />
                    <p>{item.locationText}</p>
                    </div>
                    <Link to='/selectFlats'>
                    <button onClick={() => onSelectId(item.id)}>Подробнее</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link to="/allFlats">
          <button className={styles.button}>Смотреть все квартиры</button>
          </Link>
          </div>
      </div>
    </BoxContainer>
  );
}
export default OurFlats;
