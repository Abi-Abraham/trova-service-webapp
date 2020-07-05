import React from "react";
import SingleCard from "./SingleCard";

const RequestPersonCard = ({ presentSlide }) => {
  let perPerson = presentSlide.request.requstPersons;
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {perPerson.map((personDetails, index) => (
            <div key={index} className="col-md-6 col-lg-4 col-12">
              <SingleCard personDetails={personDetails} />
            </div>
          ))}
        </div>
        <div
          style={{
            color: "gray",
            fontSize: "14px",
            fontWeight: "600",
            textAlign: "center",
            margin: "15px 0 4rem 0",
          }}
        >
          No more service requests.
        </div>
      </div>
    </>
  );
};

export default RequestPersonCard;
