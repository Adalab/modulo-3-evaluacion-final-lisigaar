import { Link } from "react-router-dom";

function CharactersItem({ eachCharacter }) {
  return (
    <>
      <Link className="card__link" to={"/character/" + eachCharacter.id}>
        {eachCharacter.image ? (
          <img
            className="character_image"
            src={eachCharacter.image}
            alt={`Foto de ${eachCharacter.name}`}
          />
        ) : (
          <div className="character_image placeholder">
            <span>Sin imagen</span>
          </div>
        )}
        <h3 className="character_name">{eachCharacter.name}</h3>
        <p className="character_species">{eachCharacter.species}</p>
      </Link>
    </>
  );
}

export default CharactersItem;
