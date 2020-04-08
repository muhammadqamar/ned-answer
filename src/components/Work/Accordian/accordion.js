import React, { useState } from "react";
import AccordionDetail from "./accordionDetail.js";

export default function Accordion({ content }) {
  return <AccordionDetail content={content} />;
}
