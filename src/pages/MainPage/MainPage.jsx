import React from "react";
import RentItem from "../../components/RentItem/RentItem";
import Nav from "../../components/Nav/Nav";
import "./MainPage.scss";
import OurFlats from "../../components/OurFlats/OurFlats.jsx";
import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";
import Review from "../../components/Reviews/Reviews";
import Request from "../../components/Request/Request";
import Footer from "../../components/Footer/Footer";

function MainPage() {
  return (
    <>
      <header className="header">
        <Nav />
        <RentItem />
        <div className="background"></div>
      </header>
      <main className='main'>
        <OurFlats/>
        <About/>
        <Contacts/>
        <Review/>
        <Request/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
export default MainPage;
