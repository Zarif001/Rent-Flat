import React, { useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import AllFlats from "../../components/AllFlats/AllFlats";
import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";
import Reviews from "../../components/Reviews/Reviews";
import Request from "../../components/Request/Request";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";
import { useContext } from "react";
import { AppContext } from "../../store/AppContex";
import './ListOfFlats.scss'

function ListOfFlats() {
  const {messages} = useContext(AppContext)

  return (
    <>
     {messages && <Modal/>}
    <header className="header">
      <Nav/>
      <div className="background"></div>
    </header>
    <main className='main'>
      <AllFlats/>
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
export default ListOfFlats;
