import React, { useState, useEffect } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";

function LoginModel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setTimeout(() => {
      document.getElementsByClassName("looplogin")[0].click();
    }, 400000000);
  };

  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName("looplogin")[0].click();
    }, 400000000);
  }, []);
  return (
    <div className="Loginmodel">
      <Button
        className="looplogin"
        style={{ display: "none" }}
        variant="primary"
        onClick={handleShow}
      >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} sm={3}>
              <div className="img-position">
                <img
                  src={`${require("../assets/images/user.svg")}`}
                  className="user"
                />
                <img
                  src={`${require("../assets/images/question.svg")}`}
                  className="question"
                />
              </div>
            </Col>
            <Col xs={12} sm={9}>
              <h1>Don’t see your question here? Join the community and ask!</h1>
              <p>
                Creating an account is free and posts are always anonymous.
                Start now to get answers from unmatched medical professionals.
              </p>
              <div className="signupsection">
                <a>
                  <button>Sign up for free</button>
                </a>
                <a>Already have an account? </a>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <h3>Download Fertility Answers Mobile App</h3>
          <div className="logos">
            <img src={`${require("../assets/images/applestore.png")}`} />
            <img src={`${require("../assets/images/playstore.png")}`} />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModel;
