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
import { useContext  } from "react";
import { AppContext } from "../../store/AppContex";

function SelectFlat() {
  const {messages} = useContext(AppContext)
  return (
    <>
      {messages && <Modal />}

    <header className={styles.header}>
      <Nav />
      <div className={styles.background}></div>
    </header>
    <main className={styles.main}>
      <SelectedFlat/>
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
