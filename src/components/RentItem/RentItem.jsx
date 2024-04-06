import React from "react";
import styles from "./RentItem.module.scss";
import flatBg from '../../images/flatBg.png'
import icon1 from '../../images/icon1.svg'
import icon2 from '../../images/icon2.svg'
import icon3 from '../../images/icon3.svg'
import icon4 from '../../images/icon4.svg'
import BoxContainer from "../BoxContainer/BoxContainer";
import { Link } from "react-router-dom";
function RentItem() {
  return (
    <BoxContainer>
    <div className={styles.rent}>
      <div className={styles.rentItem}>
      <div className={styles.caption}>
        <h2>Аренда квартир в Березниках</h2>
        <p>На длительный срок или посуточно</p>
        <Link to='/allFlats'>
        <button>Смотреть варианты</button>
        </Link>
        
      </div>
      <div className={styles.picture}>
        <img src={flatBg} alt={flatBg} loading="lazy" />
      </div>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src={icon1} alt={icon1} loading="lazy" />
          <p>Заключаем договоры, предоставляет отчётные документы</p>
        </div>
        <div className={styles.item}>
          <img src={icon2} alt={icon2}loading="lazy" />
          <p>Наличный и
безналичный расчёт</p>
        </div>
        <div className={styles.item}>
          <img src={icon3} alt={icon3}loading="lazy" />
          <p>Бронирование и заселение круглосуточно</p>
        </div>
        <div className={styles.item}>
          <img src={icon4} alt={icon4} loading="lazy" />
          <p>Полная 
конфиденциальность</p>
        </div>
      </div>
    </div>
    </BoxContainer>
  );
}
export default RentItem 
