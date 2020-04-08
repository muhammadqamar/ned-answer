import React from "react";
import Reads from "./reads.js";
import "./assets/css/style.scss";
import { useStaticQuery, graphql } from "gatsby";
import Tabsheader from "./tabsHeader.js";
export default function Fertile() {
  const data = useStaticQuery(graphql`
    {
      allCosmicjsFertiles {
        edges {
          node {
            slug
            metadata {
              header_logo {
                url
              }
              tagline
              fetured {
                data {
                  category
                  media
                  mediatype
                  description
                }
              }
              reads_data {
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
  var content_read;
  var content_header;
  var content_tab;

  data.allCosmicjsFertiles.edges.map((x, y) => {
    switch (x.node.slug) {
      case "editor-pick":
        content_editor = x.node.metadata;
        break;
      case "reads":
        content_read = x.node.metadata;
        break;
      case "headers":
        content_header = x.node.metadata;
        break;
      case "tabs":
        content_tab = x.node.metadata;
        break;
    }
  });

  return (
    <div className="Fertileedge">
      <div className="header">
        <h2>
          FERTILE<span>EDGE</span>
        </h2>
      </div>
      <Tabsheader tabs={content_tab.fetured.data} />
      <Reads
        tagline={content_editor.tagline}
        content={content_editor.editors_pick_data.data}
        reads={content_read.reads_data.data}
      />
    </div>
  );
}
