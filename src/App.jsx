import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Review from "./components/Reviews";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";


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
      <About />
      <Review />
      <Contacts/>
      <Footer />
    </div>
  );
}

export default App;
