import React from "react";
import { Col } from "react-bootstrap";
import Mainthumbnail from "../assets/images/main.png";
import user from "../assets/images/user.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
export default function SpecificDetails() {
  //  window.addEventListener("scroll", function() {
  //   try {
  //     if (window.pageYOffset > 852) {
  //       document
  //        .getElementById("social-content")
  //        .classList.add("addsocialcount");
  //    } else {
  //       document
  //         .getElementById("social-content")
  //        .classList.remove("addsocialcount");
  //     }
  //    } catch (e) {}
  //  });
  return (
    <div className="SpecificDetails">
      <div className="content">
        <Col md={12} lg={8}>
          <h1>ENDOMETRIOSIS AND INFERTILITY: WHAT YOU NEED TO KNOW </h1>

          <div className="user">
            <div>
              <img src={user} />
              <div>
                <h4>Stories</h4>
                <p>BY George Fenfro, March 13, 2020 </p>
              </div>
            </div>
            <div className="social-content ">
              <div className="socialcount">
                <div className="box twitter">
                  <TwitterIcon /> Tweet
                </div>
                <div className="box facebook">
                  <FacebookIcon /> Share
                </div>
              </div>
            </div>
          </div>

          <div className="main thumbnail">
            <img src={Mainthumbnail} className="" />
          </div>
          <div className="social-content check">
            <div className="socialcount" id="social-content">
              <div className="box twitter">
                <TwitterIcon />
              </div>
              <div className="box facebook">
                <FacebookIcon />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              quis ornare elit, tincidunt vulputate ipsum. Proin volutpat nunc
              ut lacus euismod, non rutrum lectus scelerisque. Nulla facilisi.
              Integer eget hendrerit ipsum, vel maximus nulla. Ut nec eros quam.
              Mauris eget metus ornare, blandit metus sit amet, faucibus elit.
              <br />
              <br />
              Sed nec augue id augue pretium efficitur ut non diam. Proin a
              cursus dolor. Phasellus interdum auctor mi, quis maximus mi
              interdum et. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Vestibulum dapibus mauris
              ac pharetra consequat. Fusce blandit convallis quam quis iaculis.
              Nam pulvinar ultricies facilisis. Fusce vel commodo eros.
              <br />
              <br />
              Vestibulum eros nulla, viverra ut sollicitudin vitae, posuere vel
              mi. Vestibulum risus mi, porta sagittis arcu eget, porta tempor
              dolor. Mauris eget metus ornare, blandit metus sit amet, faucibus
              elit. Sed nec augue id augue pretium efficitur ut non diam. Proin
              a cursus dolor.
              <br />
              <br />
              Phasellus interdum auctor mi, quis maximus mi interdum et. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Vestibulum dapibus mauris ac pharetra
              consequat. Fusce blandit convallis quam quis iaculis. Nam pulvinar
              ultricies facilisis. Fusce vel commodo eros. Vestibulum eros
              nulla, viverra ut sollicitudin vitae, posuere vel mi. Vestibulum
              risus mi, porta sagittis arcu eget, porta tempor dolor.
            </p>
          </div>
        </Col>
      </div>
    </div>
  );
}
