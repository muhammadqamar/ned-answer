import React from "react";
import LoginModel from "./LoginModel/loginModel.js";
import "bootstrap/dist/css/bootstrap.min.css";

// component export
import Header from "./header/index";
import Footer from "./footer/index";
import Join from "./joinforFree/joinForFree";
import "./assets/css/layout.scss";
import Menu from "./menu/menu.js";
import { useStaticQuery, graphql } from "gatsby";
console.log(process.env);
const Layout = ({ children, location = "" }) => {
  const data = useStaticQuery(graphql`
    {
      allCosmicjsFooterBanners {
        edges {
          node {
            metadata {
              button_text
              heading
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Header />
      {children}
      <div className="fixedheightsearch"></div>
      {location.pathname != undefined &&
      location.pathname.includes("/fertile") ? null : (
        <Join
          heading={data.allCosmicjsFooterBanners.edges[0].node.metadata.heading}
          buttonText={
            data.allCosmicjsFooterBanners.edges[0].node.metadata.button_text
          }
        />
      )}

      <Footer />
      <LoginModel />

      <div className="menubar">
        <Menu />
      </div>
    </>
  );
};

export default Layout;
