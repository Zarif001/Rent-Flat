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
import tg1 from "../../images/telegramm1.svg";
import fc1 from "../../images/facebook1.svg";
import vk1 from "../../images/vk1.svg";
import insta1 from "../../images/insta1.svg";
function Footer() {
  return (
    <>
      {innerWidth > 770 ? (
        <div className={styles.footer}>
          <div className={styles.shadow}></div>

          <BoxContainer>
            <div className={styles.content}>
              <div className={styles.contentBox}>
                <img className={styles.img} src={logo} alt="*" />

                <ul className={styles.list}>
                  <li>
                    <a className={styles.link} href="">
                      Главная
                    </a>
                  </li>
                  <li>
                    <a className={styles.link} href="">
                      Квартиры{" "}
                    </a>
                  </li>
                  <li>
                    <a className={styles.link} href="">
                      {" "}
                      Контакты
                    </a>
                  </li>
                  <li>
                    <a className={styles.link} href="">
                      О нас
                    </a>
                  </li>
                  <li className={styles.imgBox}>
                    <img src={mail} alt="*" />
                    <a href="">mail@yandex.ru</a>
                  </li>
                  <li className={styles.imgBox}>
                    <img src={call2} alt="*" />
                    <a href="">+7 (919) 714-25-00</a>
                  </li>
                  <div className={styles.pictures}>
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
              <div className={styles.rectangle}></div>
              <div className={styles.lastContent}>
                <p className={styles.text}>
                  © Copyright 2021, «Домашняя гостиница»
                </p>
                <p className={styles.text}>Пользовательское соглашение</p>
              </div>
            </div>
          </BoxContainer>
        </div>
      ) : (
        <>
          <div className={styles.resFooter}>
            <BoxContainer>
              <div className={styles.resContent}>
              <div className={styles.responsiveImg}>
                <img src={logo} alt="*" />
              </div>
              <div className={styles.pictures}>
                <a href="">
                  <img src={tg1} alt="*" />
                </a>
                <a href="">
                  <img src={fc1} alt="*" />
                </a>
                <a href="">
                  <img src={vk1} alt="*" />
                </a>
                <a href="">
                  <img src={insta1} alt="*" />
                </a>
              </div>
              </div>

            </BoxContainer>
          </div>
        </>
      )}
    </>
  );
}
export default Footer;
