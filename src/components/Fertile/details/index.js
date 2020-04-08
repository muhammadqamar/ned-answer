import React from "react";
import Editors from "../editorsPick.js";
import "../assets/css/style.scss";
import SpecificDetails from "./specificAnswer.js";

import { useStaticQuery, graphql } from "gatsby";

export default function Fertiledetails() {
  const data = useStaticQuery(graphql`
    {
      allCosmicjsFertiles {
        edges {
          node {
            slug
            metadata {
              editors_pick_data {
                data {
                  categoryType
                  media
                  mediaType
                  description
                  user {
                    name
                    img
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  var content_editor;

  data.allCosmicjsFertiles.edges.map((x, y) => {
    switch (x.node.slug) {
      case "editor-pick":
        content_editor = x.node.metadata;
        break;
    }
  });

  return (
    <div className="Fertileedge">
      <SpecificDetails />
      <Editors
        tagline="MORE FROM FERTILITY ANSWER"
        content={content_editor.editors_pick_data.data}
      />
    </div>
  );
}
