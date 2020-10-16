import React from "react";
import "./card.style.css";

const Card = ({ name, email }) => {
  return (
    <div className="card">
      <img
        alt={`${name}'s monster`}
        src={`https://robohash.org/${name}.png?set=set2&size=180x180`}
      ></img>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Card;
