import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import Questions from "../../components/Questions/index.js";

export default function MainHome() {
  return (
    <Layout>
      <SEO title="Questions Page" />

      <Questions />
    </Layout>
  );
}
