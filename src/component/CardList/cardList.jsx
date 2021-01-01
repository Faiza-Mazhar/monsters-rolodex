import React from "react";
import "./cardList.style.css";
import Card from "../Card/card";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} name={monster.name} email={monster.email} />
      ))}
    </div>
  );
};

export default CardList;
