// src/components/CharactersList.test.jsx

import { describe, expect, test } from '@jest/globals';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharactersList from './CharactersList';
import { MemoryRouter } from 'react-router';

describe('CharactersList', () => {

    test('renders an empty list when no characters are provided', () => {
        render(<CharactersList />);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeEmptyDOMElement();
    });

    test('renders an empty list when characters is empty', () => {
        render(<CharactersList characters={[]}/>);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeEmptyDOMElement();
    });

    test('renders the correct number of list items when characters are provided', () => {
        const characters = [
            { id: '1', name: 'Thor' },
            { id: '2', name: 'Captain America' },
        ];
        render(
            <MemoryRouter>
                <CharactersList characters={characters}/>
            </MemoryRouter>
        );
        
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(characters.length);

        characters.forEach(character => {
            const linkElement = screen.getByText(character.name);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.closest('a')).toHaveAttribute('href', `/characters/${character.id}`);
        });
    });

});