import React from "react";

const Plans = () => {
  return (
    <section className="plans" id="plans">
      <h2 className="heading" data-aos="zoom-in-down">
        Our <span>Plans</span>
      </h2>

      <div className="plans-content" data-aos="zoom-in-up">
        {/* Basic Plan */}
        <div className="box">
          <h3>BASIC</h3>
          <h2>
            <span>8000/Month</span>
          </h2>
          <ul>
            <li>Smart workout plan</li>
            <li>At home workouts</li>
          </ul>
          <a href="#">
            Join Now
            <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>

        {/* Pro Plan */}
        <div className="box">
          <h3>PRO</h3>
          <h2>
            <span>12000/Month</span>
          </h2>
          <ul>
            <li>Pro GYMS</li>
            <li>Smart workout plan</li>
            <li>At home workouts</li>
          </ul>
          <a href="#">
            Join Now
            <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>

        {/* Premium Plan */}
        <div className="box">
          <h3>PREMIUM</h3>
          <h2>
            <span>15000/Month</span>
          </h2>
          <ul>
            <li>ELITE Gyms & Classes</li>
            <li>Pro GYMS</li>
            <li>Smart workout plan</li>
            <li>At home workouts</li>
            <li>Personal Training</li>
          </ul>
          <a href="#">
            Join Now
            <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
