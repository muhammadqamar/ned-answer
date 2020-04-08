//all imports
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "./assets/css/style.scss";
import { Navbar, Nav, Form } from "react-bootstrap";
import logo from "./assets/images/mainlogo.png";
import Search from "./search/search.js";
import menuicon from "./assets/images/Toggle.svg";
import crosstoggle from "./assets/images/crosstoggle.svg";
import { toggleMenu } from "../../../state/app.js";
import { useDispatch, useSelector } from "react-redux";
//main function
export default function Header() {
  const [toggleimg, settoggleimg] = useState();
  const menustatus = useSelector((state) => state.app.openHambergermenu);

  const dispatch = useDispatch();
  useEffect(() => {
    if (menustatus === false) {
      settoggleimg(menuicon);
    } else {
      settoggleimg(crosstoggle);
    }
  }, []);

  useEffect(() => {
    if (menustatus === false) {
      dispatch(toggleMenu(true));
    } else {
      dispatch(toggleMenu(false));
    }
  }, [toggleimg]);

  //toggle hamberger menu
  var togglemenu = () => {
    document.getElementsByTagName("body")[0].classList.toggle("menuexpand");

    if (toggleimg === menuicon) {
      settoggleimg(crosstoggle);
      // dispatch(toggleMenu(true));
    } else {
      settoggleimg(menuicon);
    }
  };

  //jsx
  return (
    <div className="mainheader">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            {" "}
            <img src={logo} className="img-responsive" />
          </Link>
        </Navbar.Brand>
        <Search />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <Nav className="mr-auto">
              <span style={{ display: "flex" }}>
                <Link to="./Questions">Questions</Link>

                <Link to="./work">How it works</Link>
                <Nav.Link href="#link">Login</Nav.Link>
              </span>
            </Nav>
          </Form>
        </Navbar.Collapse>
        <Nav.Link href="#link">
          <button>Sign up for free</button>
        </Nav.Link>
        <Nav.Link href="" onClick={togglemenu} className="toogleimg">
          <img src={toggleimg} />
        </Nav.Link>
      </Navbar>
    </div>
  );
}
