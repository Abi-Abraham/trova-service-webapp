import React, { useState } from "react";
import Booking from "./Booking";

const RequestPersonCard = ({ presentSlide }) => {
  const [loadingData, setLoadingData] = useState(
    presentSlide.request.requstPersons.slice(0, 6)
  );
  let perPerson =
    presentSlide.request.requstPersons.length > 6
      ? loadingData
      : presentSlide.request.requstPersons;

  const [dataLength, setdataLength] = useState(
    presentSlide.request.requstPersons.length
  );
  const loadMore = () => {
    setLoadingData(presentSlide.request.requstPersons.slice(0));
    setdataLength(perPerson.length);
  };


  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {perPerson.map((personDetails, index) => (
            <div key={index} className="col-md-6 col-xl-4 col-12">
              {perPerson.length > 6 ? (
                <Booking personDetails={personDetails} />
              ) : (
                <Booking personDetails={personDetails} />
              )}
            </div>
          ))}
        </div>
        {dataLength > 6 ? (
          <div
            style={{
              color: "#018ab8",
              fontSize: "14px",
              fontWeight: "100",
              textAlign: "center",
              margin: "15px auto",
              cursor: "pointer",
              padding: "10px 6%",
              letterSpacing: "2px",
              border: "1px solid #018ab8",
              width: "fit-content",
            }}
            onClick={loadMore}
          >
            Load More...
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default RequestPersonCard;
