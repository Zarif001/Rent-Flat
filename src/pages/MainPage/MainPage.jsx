import React from "react";
import RentItem from "../../components/RentItem/RentItem";
import Nav from "../../components/Nav/Nav";
import styles from "./MainPage.module.scss";
import OurFlats from "../../components/OurFlats/OurFlats.jsx";
import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";
import Reviews from "../../components/Reviews/Reviews";
import Request from "../../components/Request/Request";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";

function MainPage({onSelect, onOpen, onClose, sendMessage}) {
  return (
    <>
      {sendMessage && <Modal onClose={onClose}/>}
      <header className={styles.header}>
        <Nav onOpen={onOpen} />
        <RentItem />
        <div className={styles.background}></div>
      </header>
      <main className={styles.main}>
        <OurFlats onSelect={onSelect}/>
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
export default MainPage;
