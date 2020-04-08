import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import Expert from "../../components/experts/index";

export default function Experts() {
  return (
    <Layout>
      <SEO title="About Us Page" />

      <Expert />
    </Layout>
  );
}
