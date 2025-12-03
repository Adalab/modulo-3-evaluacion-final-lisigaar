import CharactersList from "../listing/CharactersList";

function ListingPage({
  filterName,
  setFilterName,
  filterHouse,
  setFilterHouse,
  loading,
  filteredCharacters,
}) {
  const handleFilterName = (ev) => {
    setFilterName(ev.target.value);
  };

  const handleFilterHouse = (ev) => {
    setFilterHouse(ev.target.value || "Gryffindor");
  };


  return (
    <>
      <form className="filters">
        <fieldset className="filters_section">
          <div>
            <label htmlFor="filterName">Busca por personaje:</label>
            <input
              className="filters_input_text"
              id="filterName"
              type="text"
              placeholder="Ej: Harry Potter"
              onInput={handleFilterName}
              value={filterName}
            />
          </div>

          <div>
            <label htmlFor="filterHouse">Selecciona la casa:</label>
            <select className="filters_input_select" id="filterHouse" onChange={handleFilterHouse} value={filterHouse || "Gryffindor"}>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
            </select>
          </div>
        </fieldset>
      </form>

      {loading ? (
        <div className="loading_container">
          <div className="loading"></div>
        </div>
      ) : (
        <CharactersList allCharacters={filteredCharacters} />
      )}
    </>
  );
}

export default ListingPage;