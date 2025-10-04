import CharactersList from "../components/CharactersList";
import NumberOfCharacters from "../components/NumberOfCharacters";
import { useLoaderData } from "react-router";

const CharactersPage = () => {
    // change the title of the page
    document.title = "Characters | Marvel App";

    // Get the list of characters from the API
    const { characters } = useLoaderData();

    return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;