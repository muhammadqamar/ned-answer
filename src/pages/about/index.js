import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import About from "../../components/aboutUs/index";

export default function AboutUs() {
  return (
    <Layout>
      <SEO title="About Us Page" />

      <About />
    </Layout>
  );
}
