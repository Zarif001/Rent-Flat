import React from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./Nav.module.scss";

function Aside({ onClose }) {
  return (
    <>
      <aside className={styles.aside}>
        <div className={styles.asideContent}>
          <IoMdClose onClick={onClose} className={styles.icons} style={{fill:'#fff'}}/>
          <ul className={styles.asideList}>
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
        </div>
      </aside>
    </>
  );
}
export default Aside;
