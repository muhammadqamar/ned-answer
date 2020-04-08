import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import Editordetails from "../../components/Fertile/details/index.js";

export default function MainHome(props) {
  return (
    <Layout {...props}>
      <SEO title="Fertile Page" />

      <Editordetails />
    </Layout>
  );
}
