import React from "react";
import Hero from "../assets/heroImage.png";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content" data-aos="zoom-in">
        <h3>Build Your</h3>
        <h1>Dream Physique</h1>
        <h3>
          <span className="multiple-text">
            <Typewriter
              options={{
                strings: ["Body building ", "Personal trainering", "Diet plan"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </h3>
        <p>
          Join a supportive fitness journey tailored to your goals. Whether
          you’re a beginner or an experienced athlete, we’re here to guide you
          every step of the way. Start building your dream physique today!
        </p>
        <a href="#" className="btn">
          Join Us
        </a>
      </div>

      <div className="home-img" data-aos="zoom-in">
        <img src={Hero} alt="HeroImage" />
      </div>
    </section>
  );
};

export default Home;
