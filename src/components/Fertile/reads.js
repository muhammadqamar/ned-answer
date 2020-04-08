import React, { useRef, useEffect } from "react";
import { Col } from "react-bootstrap";
import Editors from "./editorsPick.js";
import add from "./assets/images/add.png";
import { Link } from "gatsby";
export default function Reads({ tagline, content, reads }) {
  const staticimgad = useRef();

  useEffect(() => {}, []);
  //window.addEventListener("scroll", function() {
  // if (window.pageYOffset > 852) {
  //      document.getElementById("staticimgadd").classList.add("addimgcont");
  // } else {
  //     document.getElementById("staticimgadd").classList.remove("addimgcont");
  //   }
  // });

  return (
    <div className="Reads">
      {reads.map((x, y) => {
        return (
          <>
            {y == 3 && <Editors tagline={tagline} content={content} />}
            <div className="morebox">
              <Col md={12} lg={8}>
                <Link to="./fertile/details">
                  <div>
                    <img src={x.media} />
                    <div className="more">
                      <div>
                        <h4>{x.categoryType}</h4>
                        <p>{x.description}</p>
                      </div>
                      <div className="user">
                        <img src={x.user.img} />
                        <h5>{x.user.name}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
              {y === 0 && (
                <Col md={12} lg={4}>
                  <div className="" ref={staticimgad}>
                    <img src={add} />
                  </div>
                </Col>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}
