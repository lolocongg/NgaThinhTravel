import React from "react";
import "./bookingForm.css";

const BookingForm = ({ selectedPackage, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted!");
    onClose();
  };

  return (
    <div className="bookingFormOverlay">
      <div className="bookingForm">
        <h3> Book: {selectedPackage.destTitle} </h3>{" "}
        <p>
          <strong> Location: </strong> {selectedPackage.location}{" "}
        </p>{" "}
        <p>
          <strong> Price: </strong> {selectedPackage.fees}{" "}
        </p>{" "}
        <p>
          <strong> Description: </strong> {selectedPackage.description}{" "}
        </p>{" "}
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" placeholder="Enter your full name" required />
          </label>{" "}
          <label>
            Email:
            <input type="email" placeholder="Enter your email" required />
          </label>{" "}
          <label>
            Phone Number:
            <input type="tel" placeholder="Enter your phone number" required />
          </label>{" "}
          <button type="submit" className="btn">
            Submit{" "}
          </button>{" "}
          <button type="button" className="btn cancel" onClick={onClose}>
            Cancel{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default BookingForm;
