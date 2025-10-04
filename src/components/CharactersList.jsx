import { Link } from "react-router";

export default function CharactersList({ characters = [] }) {
  return (
    <ul id="characters">
      {characters.map((character) => (
        <Link to={`/characters/${character.id}`} key={character.id}>
          <li>{character.name}</li>
        </Link>
      ))}
    </ul>
  );
}
