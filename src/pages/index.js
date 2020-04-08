import React from "react";

import "circular-std";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import Home from "../components/Home/index.js";

const IndexPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {location.pathname == "/" && <Home />}
    </Layout>
  );
};

export default IndexPage;
