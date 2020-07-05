import React from "react";

const SingleCard = ({ personDetails }) => {
  return (
    <div className="request-card">
      <div className="request-card-header">
        <div className="status">
          <h5>Pending Request</h5>
          <div>{personDetails.reqstdTD}</div>
        </div>
        <div className="request-progress-bar">1,2,3</div>
      </div>
      <div className="abt-person">
        <div className="person-details">
          <div className="person-img">
            <img src={personDetails.rqstrImg} alt="" />
          </div>
          <div className="name-loc">
            <h5>{personDetails.rqstrName}</h5>
            <h6>{personDetails.location}</h6>
          </div>
        </div>
        <div className="old-deals">
          <div className="shake-hand-icon">
            <i className="fa fa-handshake-o" aria-hidden="true"></i>
          </div>
          <div className="deal-count">
            <div>You two had {personDetails.oldDeals} deals before.</div>
          </div>
        </div>
      </div>
      <p className="person-available-title">Customer is available at:</p>
      <div className="icons-details">
        <div className="clock-icon">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </div>
        <div className="availablity">
          {personDetails.availTime.map((availTime) => (
            <div key={availTime}>{availTime}</div>
          ))}
        </div>
      </div>
      <div className="icons-details">
        <div className="clock-icon">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
        </div>
        <div className="availablity">{personDetails.detailedLoc}</div>
      </div>
      <div className="all-buttons">
        <div className="reschedule-btn">
          <button>Reschedule</button>
        </div>
        <div className="accept-btn">
          <button>Accept Request</button>
        </div>
        <div className="more-btn">
          <div className="span-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="more-text">More</div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
