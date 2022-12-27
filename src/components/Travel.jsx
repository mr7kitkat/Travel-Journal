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
          <p className="country">{props.country}</p>
          <a href={props.map_link} className="map_location">
            View on Google Maps
          </a>
        </div>

        <h2 className="locationName">{props.location}</h2>

        <p className="travelPeriod">
          {props.from_date} - {props.to_date}
        </p>

        <p className="description">{props.description}</p>
      </div>
    </section>
  );
}
