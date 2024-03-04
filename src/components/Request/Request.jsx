import React from "react";
import styles from "./Request.module.scss";
import BoxContainer from "../BoxContainer/BoxContainer";
import arrows from '../../images/arrows.png'
function Request() {
  return (
    <BoxContainer>
    <div className={styles.request}>
      <div className={styles.requestForm}>
        <h4 className={styles.title}>Напишите нам</h4>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Имя" required/>
          <input className={styles.input} type="email" placeholder="Email" required/>
          <input className={styles.input} type="text" placeholder="Ваше сообщение" required />
          <button>Отправить</button>
        </form>
      </div>
      <div className={styles.leftBox}>
        <div className={styles.picture}>
            <img src={arrows} alt={arrows} />
        </div>
        <p>Дорогой гость, если у тебя есть какие-то пожелания или притензии по улучшению качества обслуживания или просто хочешь оставить свой комментарий, то заполни форму. Мы обязательно ответим тебе, или опубликуем его на нашем сайте.</p>
        <h6>
        Татьяна Вячеславовна
        </h6>
        <span>Директор гостиницы</span>
      </div>
    </div>
    </BoxContainer>
  );
}
export default Request;
