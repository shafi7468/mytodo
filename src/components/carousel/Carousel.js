import React from "react";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "600px" }}
      >
        <div className="carousel-inner" style={{ height: "600px" }}>
          <div className="carousel-item active">
            <img
              src={process.env.PUBLIC_URL + "/images/amc3.jpg"}
              className="d-block w-100"
              style={{ height: "600px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
          <img
              src={process.env.PUBLIC_URL + "/images/amc4.jpg"}
              className="d-block w-100"
              style={{ height: "600px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
          <img
              src={process.env.PUBLIC_URL + "/images/amc1.jpg"}
              className="d-block w-100"
              style={{ height: "600px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
          <img
              src={process.env.PUBLIC_URL + "/images/amc2.jpg"}
              className="d-block w-100"
              style={{ height: "600px" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          style={{ height: "400px" }}
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
          data-bs-target="#carouselExampleControls"
          style={{ height: "400px" }}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
