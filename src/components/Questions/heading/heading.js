import React from "react";
import { Link } from "gatsby";

export default function Heading({ heading, subheading, link = {} }) {
  return (
    <div className="Headng">
      <h1>{heading}</h1>

      <h5>
        {subheading}
        <Link href=""> {link}</Link>
      </h5>
    </div>
  );
}
