import React, { useState } from "react";

import "./styles.css";

const TextInput = (props) => {
  const [textentrer, aficherText] = useState("");
  function handleTextChange(event) {
    aficherText(event.target.value);
  }
  return (
    <div>
      <input
        value={textentrer}
        className="input"
        type="text"
        onChange={(event) => handleTextChange(event)}
      />
      <h3> texte saisie : {textentrer}</h3>
    </div>
  );
};
export default TextInput;
