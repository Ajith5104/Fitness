import React from "react";

// Importing images for services
import PhysicalFitness from '../assets/PhysicalFitness.jpg';
import WeightGain from '../assets/WeightGain.jpg';
import Strength from '../assets/strength.jpg'; 
import FatLoss from '../assets/FatLoss.jpg';
import Weightlifting from '../assets/Weightlifting.jpg';
import Running from '../assets/Running.jpg';

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
          <img src={PhysicalFitness} alt="Physical Fitness" />
          <h4>Physical Fitness</h4>
        </div>

        {/* Service Row: Weight Gain */}
        <div className="rows">
          <img src={WeightGain} alt="Weight Gain" />
          <h4>Weight Gain</h4>
        </div>

        {/* Service Row: Strength Training */}
        <div className="rows">
          <img src={Strength} alt="Strength Training" />
          <h4>Strength Training</h4>
        </div>

        {/* Service Row: Fat Loss */}
        <div className="rows">
          <img src={FatLoss} alt="Fat Loss" />
          <h4>Fat Loss</h4>
        </div>

        {/* Service Row: Weight Lifting */}
        <div className="rows">
          <img src={Weightlifting} alt="Weightlifting" />
          <h4>Weight Lifting</h4>
        </div>

        {/* Service Row: Running */}
        <div className="rows">
          <img src={Running} alt="Running" />
          <h4>Running</h4>
        </div>
      </div>
    </section>
  );
};

export default Service;
