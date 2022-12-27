import React from "react";
import locationData from "../Data/data";
import Travel from "./Travel";

export default function () {
  return (
    <section className="locations">
      {locationData.map((location) => (
        <Travel {...location} />
      ))}
    </section>
  );
}
