import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import Profile from "../../components/experts/profile/index.js";

export default function Profiles() {
  return (
    <Layout>
      <SEO title="Profile Page" />

      <Profile />
    </Layout>
  );
}
