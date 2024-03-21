import React from "react";
import BoxContainer from "../BoxContainer/BoxContainer";
import styles from "./SelectedFlat.module.scss";
import { ALLFLATS } from "../Data/data";
import Slides from "./Slides";
import { DETAILS } from "./data";
import { Button } from "react-bootstrap";
import './Slides.scss'


export default function SelectedFlat({ id, onOpen }) {
  return (
    <BoxContainer>
      <div className={styles.selectFlat}>
        {ALLFLATS.map((item) => {
          return (
            <div key={item.id}>
              {item.id === id && (
                <div>
                  <h2 className={styles.caption}>
                    {DETAILS.map((item) => {
                      return (
                        item.id === id && (
                          <span key={item.id}>{item.caption}</span>
                        )
                      );
                    })}
                  </h2>
                  <div className={styles.box}>
                    <div className='pictures'>
                   <Slides id={id}/>
                    </div>
                    <div className={styles.content}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span>{item.span}</span>
                    <div style={{display:'flex', alignItems: 'center', marginTop: '20px'}}>
                        <img src={item.locationImg} alt="" />
                        <p className={styles.localText}>{item.locationText}</p>
                    </div>
                    <Button onClick={onOpen}>Забронировать</Button>
                    </div>
                  
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </BoxContainer>
  );
}
