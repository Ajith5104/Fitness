import React from "react";
import contimg from "../assets/contact.png";
function Contacts() {
  return (
    <section id="contact">
      <h2 className="heading text-center" data-aos="zoom-in-down">
        Contact <span>US</span>
      </h2>
      <div className="row p-3" id="enquiry-row">
        <div className="col-12 col-md-6 py-2" data-aos="zoom-in-down">
          <img
            className="enquiry-img img-fluid rounded"
            src={contimg}
            alt="enquiry Us"
          />
        </div>
        <div className="col-12 col-md-6 ">
          <div
            className="form-container p-0 px-2 rounded shadow"
            data-aos="zoom-in-up"
          >
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="12ddde2a-92f6-4391-9efc-fbe3dd98ebba"
              />
              <div className="mb-3">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <input
                  name="mobile"
                  type="number"
                  className="form-control"
                  id="mobileNumber"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <input
                  name="location"
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter your location"
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button type="submit" className="sub-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col contact-details">
            <div className="details">
              <i className="bi bi-telephone d-icon"></i>
              <h2 className="h2">+91 8765678962</h2>
            </div>
          </div>
          <div className="col contact-details">
            <div className="details">
              <i className="bi bi-envelope d-icon"></i>
              <h2 className="h2">shyam@gmail.com</h2>
            </div>
          </div>
          <div className="col contact-details">
            <div className="details">
              <i className="bi bi-geo-alt d-icon"></i>
              <h2 className="h2">Velachery, Chennai</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
