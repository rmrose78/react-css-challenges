import React, { useState } from "react";

function ColorChangerBox() {
  const [inputColor, setInputColor] = useState("Empty Value");

  const onChange = (e) => {
    setInputColor(e.target.value);
  };

  return (
    <>
      <h1>Color Changer</h1>
      <p>Type a color and change the background of box to the input color.</p>
      <div className="sec2__box" style={{ backgroundColor: inputColor }}>
        <h1 title="">{inputColor ? inputColor : "Empty Value"}</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Type a color: </label>
        <input
          className="sec2__input"
          type="text"
          placeholder="Type a color"
          required
          onChange={onChange}
        />
      </form>
    </>
  );
}

export default ColorChangerBox;
