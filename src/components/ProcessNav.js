import React from "react";
import { totalServiceRequests } from "../data/data";

const ProcessNav = () => {
  return (
    <div className="process-nav">
      <div className="back-arrow">
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div className="procesess">
        <div className="request">
          <h4 className="process-titles">Requests</h4>
          <span className="badges">{totalServiceRequests.length}</span>
        </div>
        <div className="servicess">
          <h4 className="process-titles">Servicess</h4>
          {/* <span className="badges">1</span> */}
        </div>
        <div className="payment">
          <h4 className="process-titles">Payment</h4>
          {/* <span className="badges">1</span> */}
        </div>
      </div>
    </div>
  );
};

export default ProcessNav;
