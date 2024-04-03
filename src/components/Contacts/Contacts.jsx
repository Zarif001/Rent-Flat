import React from "react";
import styles from "./Contacts.module.scss";
import location from "../../images/location.svg";
import mail from "../../images/mail.svg";
import insta from "../../images/insta.svg";
import vk from "../../images/vk.svg";
import call2 from "../../images/call2.svg";


import { Container } from "react-bootstrap";

function Contacts() {
  return (
    <Container>
      <div id="contacts" className={styles.contacts}>
        <div className={styles.content}>
          <h3>Контакты</h3>
          <div className={styles.items}>
            <div>
          <div className={styles.item}>
            <img src={location} alt={location} />
            <p>Пермский край, город Березники</p>
          </div>
          <div className={styles.item}>
            <img src={mail} alt={mail} />
            <p>mail@yandex.ru</p>
          </div>
          <div className={styles.item}>
            <img src={call2} alt={call2} />
            <p>+7 (919) 714-25-00</p>
          </div>
          </div>

          <div className={styles.contentBox}>
          <div className={`${styles.item} ${styles.itemBtn}`}>
            <div style={{display: 'flex', alignItems:'center'}}>
            <img src={insta} alt={insta} />
            <p>arendakvartir59</p>
            </div>
          {innerWidth < 1000 ? '' : <button>Подписаться</button>}
          </div>
          <div className={`${styles.item} ${styles.itemBtn}`}>
            <div style={{display: 'flex', alignItems:'center'}}>
            <img src={vk} alt={vk} />
            <p>arendakvartir59</p>
            </div>
            {innerWidth < 1000 ? '' : <button>Подписаться</button>}
          </div>
          </div>
          </div>

        { innerWidth < 1000 ?  <div className={styles.item}>
          <button>Подписаться</button>
          </div> : null}
        </div>

        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7644918676338!2d69.24632257608826!3d41.31398670054486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2z0JPQvtGB0YLQuNC90LjRhtCwICLQpdC40LvRgtC-0L0gLSDQotCw0YjQutC10L3RgiI!5e0!3m2!1sru!2s!4v1708682285348!5m2!1sru!2s"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Container>
  );
}
export default Contacts;
