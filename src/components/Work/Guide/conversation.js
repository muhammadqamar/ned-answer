import React from "react";
import { Col } from "react-bootstrap";
import profileAvatar from "./assets/images/profile-avatar.jpg";

export default function Conversation() {
  return (
    <Col md={6}>
      <div className="conversation">
        <div className="d-flex justify-content-start align-items-center mb-2">
          <div className="avatar-img">
            <img src={profileAvatar} />  
          </div>
          <label>Tricia</label>
        </div>
        <div className="message-detail">
          <p>
            We’ve been tryin to conceive for 5 months and I’m nervous about x y and z. Is this common?
          </p>
        </div>
      </div>
      <div className="conversation">
        <div className="d-flex justify-content-end align-items-center mb-2">
          <div className="avatar-img">
            <img src={profileAvatar} />  
          </div>
          <label>Board Certified Expert</label>
        </div>
        <div className="message-detail ml-auto">
          <p>
          Hi Tricia. Yes - this is completely normal. That said something you’ll want to see a specialist about is..
          </p>
        </div>
      </div>
    </Col> 
  );
}
