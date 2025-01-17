import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Aimg1 from "../assets/image1.jpg";
import Aimg2 from "../assets/image2.jpg";
import Aimg3 from "../assets/image3.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="heading text-center" data-aos="zoom-in-down">
        About <span>Us</span>
      </h2>
      <div className="row p-3" id="contact-row">
        {/* Carousel Section */}
        <div className="col-12 col-md-6" data-aos="zoom-in-down">
          <div
            id="aboutCarousel"
            className="carousel slide about-img"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Aimg1}
                  className="d-block w-100"
                  alt="About Us Image 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Aimg2}
                  className="d-block w-100"
                  alt="About Us Image 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Aimg3}
                  className="d-block w-100"
                  alt="About Us Image 3"
                />
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#aboutCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#aboutCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* About Content Section */}
        <div className="col-12 col-md-6">
          <div className="about-content" data-aos="zoom-in-up">
            <p>
              Shyam Bobby is a dedicated and accomplished personal trainer with
              a proven track record in the world of bodybuilding and fitness. As
              the <strong>Mr. Chennai 2019 Bronze</strong> and
              <strong> Mr. Tamil Nadu 2024 Bronze</strong> medalist, he combines
              his expertise, passion, and experience to help clients achieve
              their fitness goals. With a focus on personalized training, proper
              technique, and holistic well-being, Shyam is committed to guiding
              individuals toward a stronger, healthier, and more confident
              version of themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
