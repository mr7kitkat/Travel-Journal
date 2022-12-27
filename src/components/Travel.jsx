import React from "react";
import icon from "../images/icons/landmark.svg";

export default function (props) {
  const image = new URL(`../images/${props.image}`, import.meta.url).href;
  return (
    <section className="travel">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <div className="countryDetail">
          <img src={icon} alt="" className="icon" />
          <h2>{props.country}</h2>
          <a href={props.map_link} className="map_location"></a>
        </div>

        <p className="locationName">{props.location}</p>

        <p className="travelPeriod">
          <span className="fromDate">{props.from_date}</span>-
          <span className="toDate">{props.to_date}</span>
        </p>

        <p className="description">{props.description}</p>
      </div>
    </section>
  );
}
