import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./component/CradList/cardList";
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
      {console.log(monsters)}
      <SearchBox
        placeholder="Search Monsters"
        handleChange={(event) => setSearchFieldInput(event.target.value)}
      />
      <CardList monsters={modifiedMonsters} />
    </div>
  );
}

export default App;
