import React from "react";
import Work from "../../components/Work/index.js";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";

export default function Worksection() {
  return (
    <>
      <Layout>
        <SEO title="Questions Page" />
        <Work />
      </Layout>
    </>
  );
}
