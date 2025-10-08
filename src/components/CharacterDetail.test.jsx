// CharacterDetail.test.jsx

import { describe, expect, test } from '@jest/globals';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail', () => {

    test('renders loading state when character is null', () => {
        render(<CharacterDetail />);
        const noCharacterElement = screen.getByText('No character');
        expect(noCharacterElement).toBeInTheDocument();
    });

    test('renders the character detail correctly', () => {
        const character = {
            id: '1',
            name: 'Spider-Man',
            description: 'A superhero with spider-like abilities.',
            thumbnail: {
                path: 'https://example.com/spiderman',
                extension: 'jpg'
            },
            modified: '2014-01-13T14:48:32-0500',
        };
        
        render(<CharacterDetail character={character} />);
        const nameElement = screen.getByText('Spider-Man');
        expect(nameElement).toBeInTheDocument();

        const descriptionElement = screen.getByText(character.description);
        expect(descriptionElement).toBeInTheDocument();

        const imageElement = screen.getByAltText(character.name);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', 'https://example.com/spiderman/standard_large.jpg');

        const modifiedElement = screen.getByText(character.modified);
        expect(modifiedElement).toBeInTheDocument();

        // uncomment to see the full DOM output
        // screen.debug()
    });
});