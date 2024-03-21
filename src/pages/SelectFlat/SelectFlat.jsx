import React from "react";
import Nav from "../../components/Nav/Nav";
import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";
import Reviews from "../../components/Reviews/Reviews";
import Request from "../../components/Request/Request";
import Footer from "../../components/Footer/Footer";
import styles from './SelectFlat.module.scss'
import SelectedFlat from "../../components/SelectedFlat/SelectedFlat";
import Modal from "../../components/Modal/Modal";
function SelectFlat({items, onOpen, onClose, sendMessage}) {
  return (
    <>
      {sendMessage && <Modal onClose={onClose}/>}

    <header className={styles.header}>
      <Nav onOpen={onOpen}/>
      <div className={styles.background}></div>
    </header>
    <main className={styles.main}>
      <SelectedFlat id={items} onOpen={onOpen} />
      <About/>
      <Contacts/>
      <Reviews/>
      <Request/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </>
  );
}
export default SelectFlat;
