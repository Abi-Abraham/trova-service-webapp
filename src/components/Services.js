import React, { useEffect, useRef, useState } from "react";
import { totalServiceRequests } from "../data/data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RequestPersonCard from "./RequestPersonCard";
import ProcessNav from "./ProcessNav";

const Services = () => {
  let mainSlider = useRef(null);
  const [selectSlide, setSelectSlide] = useState(1);
  const [currentData, setCurrentData] = useState(
    totalServiceRequests[selectSlide - 1]
  );

  const getCurrent = (current) => {
    setSelectSlide(current);
  };

  useEffect(() => {
    setCurrentData(totalServiceRequests[selectSlide - 1]);
  }, [currentData, selectSlide]);

  return (
    <>
      <ProcessNav presentSlide={currentData} />
      <Carousel
        showThumbs={false}
        showStatus={true}
        statusFormatter={(current) => getCurrent(current)}
        className="head-carousel"
        ref={mainSlider}
      >
        {totalServiceRequests.map((service) => (
          <div key={service.serviceField.id} className="carousel-box">
            <div className="service-img">
              <img src={service.serviceField.img} alt="" />
            </div>
            <div className="contentet-area">
              <h1 className="service-title">{service.serviceField.title}</h1>
              <h4 className="service-sub-title">
                {service.serviceField.subTitle}
              </h4>
              <p className="service-para">{service.serviceField.descrption}</p>
              <div className="service-main-details">
                <h6 className="service-quantity">
                  {service.serviceField.quantity}
                </h6>
                <div className="service-price">
                  {service.serviceField.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div>
        <RequestPersonCard presentSlide={currentData} />
      </div>
    </>
  );
};

export default Services;
