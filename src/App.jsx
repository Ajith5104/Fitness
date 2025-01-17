import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Review from "./components/Reviews";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import Abouts from "./components/Abouts";


AOS.init({
  offset: 150,
  duration: 800,
});

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Abouts />
      <Review />
      <Contacts/>
      <Footer />
    </div>
  );
}

export default App;
