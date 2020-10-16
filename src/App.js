import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [monsters]);

  return (
    <div className="App">
      {monsters.map((monster) => {
        console.log("monster", monster);
        return <h2 key={monster.id}>{monster.name}</h2>;
      })}
    </div>
  );
}

export default App;
