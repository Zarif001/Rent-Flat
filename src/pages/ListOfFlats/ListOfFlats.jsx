import React from "react";
import Nav from "../../components/Nav/Nav";
import AllFlats from "../../components/AllFlats/AllFlats";
import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";
import Reviews from "../../components/Reviews/Reviews";
import Request from "../../components/Request/Request";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";
import './ListOfFlats.scss'

function ListOfFlats({onSelect, onOpen, onClose, sendMessage}) {
  return (
    <>
     {sendMessage && <Modal onClose={onClose}/>}
    <header className="header">
      <Nav onOpen={onOpen}/>
      <div className="background"></div>
    </header>
    <main className='main'>
      <AllFlats onSelect={onSelect}/>
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
