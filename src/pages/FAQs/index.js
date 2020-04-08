import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import FAQS from "../../components/faqs/index";

export default function FAQs() {
  return (
    <Layout>
      <SEO title="About Us Page" />
      <FAQS />
    </Layout>
  );
}
