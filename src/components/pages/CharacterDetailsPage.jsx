
import { useParams, Link } from "react-router-dom";

function CharacterDetailsPage({ findCharacter }) {
  const { idCharacter } = useParams();

  const characterFound = findCharacter(idCharacter);

  if (!characterFound) {
    return (
      <article className="detail_container">
        <h2>Personaje no encontrado</h2>
        <Link className="detail_back" to="/">← Volver al inicio</Link>
      </article>
    );
  }

  return (
    <div className="detail_container">

      {/* Botón de volver, sin useNavigate */}
      <Link className="detail_back" to="/">
        ← Volver
      </Link>

      <article className="detail_card">
        <img
          className="detail_image"
          src={characterFound.image || "https://placehold.co/400x400/0b0a0a/d4af37?text=Sin+imagen"}
          alt={characterFound.name}
        />

        <div className="detail_info">
          <h1 className="detail_name">{characterFound.name}</h1>

          <ul className="detail_data">
            <li>
              <strong>Especie:</strong> {characterFound.species}
            </li>
            <li>
              <strong>Casa:</strong> {characterFound.house || "Desconocida"}
            </li>
            <li>
              <strong>Género:</strong> {characterFound.gender || "Desconocido"}
            </li>
            <li>
              <strong>Estado:</strong>{" "}
              {characterFound.alive ? "Vivo/a" : "Muerto/a"}
            </li>

            {characterFound.alternate_names?.length > 0 && (
              <li>
                <strong>Nombres alternativos:</strong>{" "}
                {characterFound.alternate_names.join(", ")}
              </li>
            )}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default CharacterDetailsPage;
