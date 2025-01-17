import React from 'react'
import enquiry from "../assets/contact.png";
function Enquiry() {
  return (
    <section id="enquiry" >
    <h2 className="heading text-center" data-aos="zoom-in-down">
      Enquiry <span>US</span>
    </h2>
    <div className="row p-3" id="enquiry-row" >
      <div className="col-12 col-md-6 py-2" data-aos="zoom-in-down">
        <img
          className="enquiry-img img-fluid rounded"
          src={enquiry}
          alt="enquiry Us"
        />
      </div>
      <div className="col-12 col-md-6 ">
        <div
          className="form-container p-0 px-2 rounded shadow" data-aos="zoom-in-up"
        >
          <form >
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                id="mobileNumber"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Enter fitness goals"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Enter your location"
              />
            </div>
            <div className="mb-3">
              <textarea
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
    </div>
  </section>
  )
}

export default Enquiry