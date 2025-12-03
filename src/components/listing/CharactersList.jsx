
import CharactersItem from "./CharactersItem";

function CharactersList({ allCharacters }) {
if (allCharacters.length === 0) {
    return "No hay personajes para mostrar";
}


    return (
      <ul className="character_list">
        {allCharacters.map((eachCharacter) => (
          <li key={eachCharacter.id} className="character">
            <CharactersItem eachCharacter={eachCharacter} />
          </li>
        ))}
      </ul>
    );
  }

export default CharactersList;