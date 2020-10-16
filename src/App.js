import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./component/CradList/cardList";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters([...users, ...users]));
  }, []);

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
