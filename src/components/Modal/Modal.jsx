import React, {useEffect}from "react";
import styles from "./Modal.module.scss";
import accros from '../../images/accros.svg'
export default function Modal({onClose}) {
    const handleKeyEvent = (event) =>{
        if(event.key === 'Escape') {
            onClose()
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeyEvent);
        return () => {
          window.removeEventListener('keydown', handleKeyEvent);
        };
      }, []);
  return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
        <div onClick={onClose} style={{display:'flex', justifyContent: 'flex-end', cursor:'pointer'}}>
            <img src={accros} alt="*" />
        </div>
      <div className={styles.modalItems}>
        <h4>Заказать звонок</h4>
        <p>Оставьте заявку и мы свяжемся с Вами в ближайшее время!</p>
        <form action="submit">
          <input type="text" required placeholder="Имя" />
          <input type="number" required placeholder="Телефон" />
          <button type="submit">Отправить</button>
        </form>
      </div>
        </div>
    
    </div>
  );
}
