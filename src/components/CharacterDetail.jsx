/**
 * Component to render the details of a character
 * @param {*} character - Character object 
 */
function CharacterDetail({ character = {} }) {
    return !character.name ? (
        // if character name is not provided, then display "No character"
        <div>No character</div>
    ) : (
        // else display the character details
        <div>
            <h2>{character.name}</h2>
            {character.thumbnail && (
                <img
                    src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`}
                    alt={character.name}
                />
            )}
            <p>{character.description}</p>
            <p>{character.modified}</p>
        </div>
    );
}

export default CharacterDetail;