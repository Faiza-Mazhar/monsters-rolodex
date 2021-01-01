import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./component/CardList/cardList";
import SearchBox from "./component/SearchBox/searchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchFieldInput, setSearchFieldInput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const modifiedMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchFieldInput.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Cats</h1>
      <SearchBox placeholder="Search Monsters" handleChange={handleChange()} />
      <CardList monsters={modifiedMonsters} />
    </div>
  );

  function handleChange() {
    return (event) => setSearchFieldInput(event.target.value);
  }
}

export default App;
