import { useEffect, useState } from "react";
import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import ListingPage from "./pages/ListingPage";

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((responseData) => {
        const allCleanCharacters = responseData.map((eachCharacter) => ({
          id: eachCharacter.id,
          name: eachCharacter.name,
          species: eachCharacter.species,
          image: eachCharacter.image,
          house: eachCharacter.house,
          gender: eachCharacter.gender,
          alive: eachCharacter.alive,
          alternate_names: eachCharacter.alternate_names,
        }));

        setAllCharacters(allCleanCharacters);
        setLoading(false);
      });
  }, []);

  const findCharacter = (idCharacter) => {
    const characterFound = allCharacters.find(
      (oneCharacter) => oneCharacter.id === idCharacter
    );

    return characterFound;
  };

  const filteredCharacters = allCharacters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(filterName.toLowerCase())
  )
  .filter((eachCharacter) =>
    eachCharacter.house.toLowerCase().includes(filterHouse.toLowerCase())
  )  
  ;

  return (
    <div className="app">
      <header className="header">
        <h1 className="header_title">Harry Potter</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ListingPage
                filterName={filterName}
                setFilterName={setFilterName}
                filterHouse={filterHouse}
                setFilterHouse={setFilterHouse}
                loading={loading}
                filteredCharacters={filteredCharacters}
              />
            }
          />
          <Route
            path="/character/:idCharacter"
            element={<CharacterDetailsPage findCharacter={findCharacter} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
