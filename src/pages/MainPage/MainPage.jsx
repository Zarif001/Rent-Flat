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
import { useContext } from "react";
import { AppContext } from "../../store/AppContex";

function MainPage() {
  const {messages} = useContext(AppContext)
  return (
    <>
      {messages && <Modal/>}
      <header className={styles.header}>
        <Nav />
        <RentItem />
        <div className={styles.background}></div>
      </header>
      <main className={styles.main}>
        <OurFlats/>
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
