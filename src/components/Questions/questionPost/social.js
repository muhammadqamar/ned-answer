import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import MessageIcon from "@material-ui/icons/Message";
export default function Social({ replies, tag }) {
  return (
    <div className="Social">
      <div>
        <MessageIcon style={{ color: "#606a89" }} />
        <span>{replies} ANSWERS</span>
        <ShareIcon style={{ color: "#606a89" }} />
        <span> SAHRE</span>
        <FavoriteBorderIcon style={{ color: "#606a89" }} />
        <span> SAVE</span>
      </div>
      <img src={tag} />
    </div>
  );
}
