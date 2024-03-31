import React from "react";
import BoxContainer from "../BoxContainer/BoxContainer";
import logo from "../../images/logo.png";
import emailSvg from "../../images/email.svg";
import call from "../../images/call.svg";
import styles from "./Nav.module.scss";
import { useContext, useState } from "react";
import { AppContext } from "../../store/AppContex";
import { IoIosMenu } from "react-icons/io";
import Aside from "./Aside";

function Nav() {
  const { onOpen } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <BoxContainer>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt={logo} />
          </a>
          <div className={styles.burgerMenu}>
          {isMenuOpen ? (
            <IoIosMenu onClick={handleToggleMenu} className={styles.icons} />
          ) : (
           <Aside onClose={handleToggleMenu}/>
          )}
        </div>
        </div>
      
        {window.innerWidth > 1280  && (
          <div className={styles.mainList}>
            <ul className={styles.list}>
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
        )}
        <div className={styles.infoBg}>
          <div className={styles.boxWImages}>
            <img src={emailSvg} alt={emailSvg} />
            <span>mail@yandex.ru</span>
          </div>
          <div className={styles.boxWImages}>
            <img src={call} alt={call} />
            <span>+7 (919) 714-25-00</span>
          </div>
          <button onClick={onOpen}>{innerWidth > 1000 ? 'Заказать звонок' : 'Обратная связь'}</button>
        </div>
      </div>
    </BoxContainer>
  );
}
export default Nav;
