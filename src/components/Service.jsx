import React from "react";

// Importing images for services
import Img1 from '../assets/Physical-Fitness.jpg';
import Img2 from '../assets/Weight-Gain.jpg';
import strengthImage from '../assets/straining.jpg'; 
import Img4 from '../assets/Fat-Loss.jpg';
import Img5 from '../assets/Weight-lifting.jpg';
import Img6 from '../assets/Running.jpg';

const Service = () => {
  return (
    <section className="services" id="services">
      {/* Section Header */}
      <h2 className="heading" data-aos="zoom-in-down">
        Our <span>Services</span>
      </h2>

      {/* Services Content */}
      <div className="services-content" data-aos="zoom-in-up">
        {/* Service Row: Physical Fitness */}
        <div className="rows">
          <img src={Img1} alt="Physical Fitness" />
          <h4>Physical Fitness</h4>
        </div>

        {/* Service Row: Weight Gain */}
        <div className="rows">
          <img src={Img2} alt="Weight Gain" />
          <h4>Weight Gain</h4>
        </div>

        {/* Service Row: Strength Training */}
        <div className="rows">
          <img src={strengthImage} alt="Strength Training" />
          <h4>Strength Training</h4>
        </div>

        {/* Service Row: Fat Loss */}
        <div className="rows">
          <img src={Img4} alt="Fat Loss" />
          <h4>Fat Loss</h4>
        </div>

        {/* Service Row: Weight Lifting */}
        <div className="rows">
          <img src={Img5} alt="Weightlifting" />
          <h4>Weight Lifting</h4>
        </div>

        {/* Service Row: Running */}
        <div className="rows">
          <img src={Img6} alt="Running" />
          <h4>Running</h4>
        </div>
      </div>
    </section>
  );
};

export default Service;
