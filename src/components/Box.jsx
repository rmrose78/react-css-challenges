import React from "react";
import "../App.scss";

function Box({ value }) {
  return <div className={`sec1__box sec1__box__${value}`}>{value}</div>;
}

export default Box;
