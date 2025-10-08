import React, { useEffect } from 'react';

import { useLoaderData } from 'react-router';
import CharacterDetail from '../components/CharacterDetail';

const CharacterDetailPage = () => {
    // retrieve the character using the useLoaderData hook
    const { character } = useLoaderData();

    //useEffect(() => {
    document.title = `${character.name} | Marvel App`;
    //}, [character]);

    return (
        <>
            <h1>{character.name}</h1>
            <CharacterDetail character={character} />
        </>
    );
};

export default CharacterDetailPage;