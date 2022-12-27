import React from "react";
import globe from "../images/icons/globe.svg";

export default function () {
  return (
    <nav className="header">
      <img src={globe} alt="" />
      <h1>my travel journal.</h1>
    </nav>
  );
}
