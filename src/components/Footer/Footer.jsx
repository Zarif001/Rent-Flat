import React from "react";
import styles from "./Footer.module.scss";
import BoxContainer from "../BoxContainer/BoxContainer";
import logo from "../../images/logo.png";
import mail from "../../images/mail.svg";
import call2 from "../../images/call2.svg";
import tg from "../../images/telegramm.svg";
import fc from "../../images/facebook.svg";
import vk from "../../images/vk.svg";
import insta from "../../images/insta.svg";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.shadow}></div>

      <BoxContainer>
        <div className={styles.content}>
          <img className={styles.img} src={logo} alt="*" />

          <ul className={styles.list}>
            <li>
              <a href="">Главная</a>
            </li>
            <li>
              <a href="">Квартиры </a>
            </li>
            <li>
              <a href=""> Контакты</a>
            </li>
            <li>
              <a href="">О нас</a>
            </li>
            <li>
              <img src={mail} alt="*" />
              <a href="">mail@yandex.ru</a>
            </li>
            <li>
              <img src={call2} alt="*" />
              <a href="">+7 (919) 714-25-00</a>
            </li>
            <div>
              <a href="">
                <img src={tg} alt="*" />
              </a>
              <a href="">
                <img src={fc} alt="*" />
              </a>
              <a href="">
                <img src={vk} alt="*" />
              </a>
              <a href="">
                <img src={insta} alt="*" />
              </a>
            </div>
          </ul>
        </div>
      </BoxContainer>
    </div>
  );
}
export default Footer;
