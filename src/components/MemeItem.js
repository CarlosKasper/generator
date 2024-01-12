import React, { useState } from "react";
import { connect } from "react-redux";
import { createMeme } from "../actions";

function MemeItem(props) {
  const [hovered, setHovered] = useState(false);

  function postMeme() {
    const { text0, text1 } = props;
    const memeObj = {
      template_id: props.meme.id,
      text0,
      text1,
    };
    props.createMeme(memeObj);
  }

  return (
    <div
      className="meme-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => postMeme()}
    >
      <img
        src={props.meme.url}
        alt={props.meme.name}
        className={hovered ? "meme-img darken-img" : "meme-img"}
      />
      <p className={hovered ? "meme-txt" : "no-txt"}>
        {props.meme.name}
      </p>
    </div>
  );
}

export default connect(null, { createMeme })(MemeItem);
