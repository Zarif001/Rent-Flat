import React from "react";
import styles from "./OurFlats.module.scss";
import BoxContainer from "../BoxContainer/BoxContainer";
import { FLATS } from "./OurFlats";
function OurFlats() {
  return (
    <BoxContainer>
      <div className={styles.ourFlats}>
        <h2 className={styles.title}>Наши квартиры </h2>
        <div className={styles.flats}>
          {
            FLATS.map(item =>(
              <div className={styles.items} key={item.id}>
                <div className={styles.picture}>
                  <img src={item.image} alt={item.image} />
                </div>
                <div className={styles.item}>
                  <h3>{item.title}</h3>
                  <p>{item.text} <span>{item.span}</span></p>
                  <div className={styles.location}>
                    <div style={{display: 'flex'}}>
                    <img src={item.locationImg} alt={item.locationImg} />
                    <p>{item.locationText}</p>
                    </div>
                    <button>Подробнее</button>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <button className={styles.button}>Смотреть все квартиры</button>
          </div>
      </div>
    </BoxContainer>
  );
}
export default OurFlats;
