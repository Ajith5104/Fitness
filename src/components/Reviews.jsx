import React from "react";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
const Review = () => {
  return (
    <section id="review" className="review">
      <div className="review-box">
        <h2 className="heading" data-aos="zoom-in-down">
          Client <span>Reviews</span>
        </h2>

        <div className="wrapper" data-aos="zoom-in-up">
          {/* Review 1 */}
          <div className="review-item">
            <img src={Img2} alt="John" />
            <h2>Seetha</h2>
            <div className="rating">
              <i className="bx bxs-star" id="star"></i>
              <i className="bx bxs-star" id="star"></i>
              <i className="bx bxs-star" id="star"></i>
              <i className="bx bxs-star" id="star"></i>
              <i className="bx bxs-star" id="star"></i>
            </div>
            <p>
              Lose 15 kg in 60 days with a calorie-deficit diet, high-protein
              South Indian meals, daily workouts, and hydration. Track progress
              weekly and stay consistent for lasting results.
            </p>
          </div>

          {/* Review 2 */}
          <div className="review-item">
            <img src={Img1} alt="Steve" />
            <h2>Arun</h2>
            <div className="rating">
              <i className="bx bxs-star" id="star"></i>
              <i className="bx bxs-star" id="star"></i>
              <i className="bx bxs-star" id="star"></i>
              <i className="bx bxs-star" id="star"></i>
            </div>
            <p>
              To reduce from 105 kg to 70 kg in 70 days, follow a
              calorie-deficit diet, eat lean proteins, avoid junk, and do cardio
              with strength training. Stay consistent and track progress!
            </p>
          </div>

          {/* Review 3 */}
          <div className="review-item">
            <img src={Img3} alt="David" />
            <h2>Kumar</h2>
            <div className="rating">
              <i className="bx bxs-star" id="star"></i>
              <i className="bx bxs-star" id="star"></i>
              <i className="bx bxs-star" id="star"></i>
              <i className="bx bxs-star" id="star"></i>
              <i className="bx bxs-star" id="star"></i>
            </div>
            <p>
              To gain weight from 48 kg to 72 kg in 60 days, eat calorie-dense
              foods, focus on protein, and strength train regularly. Stay
              consistent and monitor progress!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
