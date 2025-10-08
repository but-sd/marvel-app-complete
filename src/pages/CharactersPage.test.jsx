// src/pages/CharactersPage.test.jsx

import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import CharactersPage from './CharactersPage'
import { act } from 'react'

// Mock data for characters
const characters = [
    {
        id: "1",
        name: "Thor"
    },
    {
        id: "2",
        name: "Captain America"
    }
];

describe('CharactersPage', () => {
    test('render CharactersPage component', async () => {
        // Create a stub for the routes to include CharactersPage
        const Stub = createRoutesStub([
            {
                path: '/characters',
                Component: CharactersPage,
                HydrateFallback: () => null, // No fallback needed for this test
                loader: () => ({ characters: characters }),
            },
        ])

        // Render the CharactersPage component within the routing context
        render(<Stub initialEntries={['/characters']} />)

        // Wait for the heading to appear to ensure routing/render updates are settled
        const heading = await screen.findByRole('heading', { level: 2, name: 'Marvel Characters' })
        expect(heading).toBeInTheDocument()

        // expect the document title to be "Characters | Marvel App"
        expect(document.title).toBe('Characters | Marvel App')

        // expect the character Thor to be in the document
        const thorElement = screen.getByText(characters[0].name);
        expect(thorElement).toBeInTheDocument();

        // expect the charater Captain America to be in the document
        const captainAmericaElement = screen.getByText(characters[1].name);
        expect(captainAmericaElement).toBeInTheDocument();
        
        // expect the number of characters to be in the document
        const numberOfCharactersElement = screen.getByText(`There are ${characters.length} characters`);
        expect(numberOfCharactersElement).toBeInTheDocument();

        // uncomment to see the full DOM output
        // screen.debug()
    })

    test('render CharactersPage component with different order and orderBy', async () => {
        // Create a stub for the routes to include CharactersPage
        const Stub = createRoutesStub([
            {
                path: '/characters',
                Component: CharactersPage,
                HydrateFallback: () => null, // No fallback needed for this test
                loader: () => ({ characters: characters }),
            },
        ])

        // Render the CharactersPage component within the routing context
        render(<Stub initialEntries={['/characters?orderBy=modified&order=desc']} />)

        // Wait for the heading to appear to ensure routing/render updates are settled
        const heading = await screen.findByRole('heading', { level: 2, name: 'Marvel Characters' })
        expect(heading).toBeInTheDocument()

        // expect the document title to be "Characters | Marvel App"
        expect(document.title).toBe('Characters | Marvel App')

        // expect the character Thor to be in the document
        const thorElement = screen.getByText(characters[0].name);
        expect(thorElement).toBeInTheDocument();

        // expect the charater Captain America to be in the document
        const captainAmericaElement = screen.getByText(characters[1].name);
        expect(captainAmericaElement).toBeInTheDocument();
        
        // expect the number of characters to be in the document
        const numberOfCharactersElement = screen.getByText(`There are ${characters.length} characters`);
        expect(numberOfCharactersElement).toBeInTheDocument();

        // expect the orderBy select to have the value "modified"
        const orderBySelect = screen.getByTestId('orderBy');
        expect(orderBySelect).toHaveValue('modified');

        // expect the order select to have the value "desc"
        const orderSelect = screen.getByTestId('order');
        expect(orderSelect).toHaveValue('desc');

        // uncomment to see the full DOM output
        // screen.debug()
    })

    // TODO : fix this test, an error appears in console
    // test('render CharactersPage component with order and orderBy when the select changes', async () => {
    //     // Create a stub for the routes to include CharactersPage
    //     const Stub = createRoutesStub([
    //         {
    //             path: '/characters',
    //             Component: CharactersPage,
    //             HydrateFallback: () => null, // No fallback needed for this test
    //             loader: () => ({ characters: characters }),
    //         },
    //     ])

    //     // Render the CharactersPage component within the routing context
    //     render(<Stub initialEntries={['/characters']} />)

    //     // Wait for the heading to appear to ensure routing/render updates are settled
    //     const heading = await screen.findByRole('heading', { level: 2, name: 'Marvel Characters' })
    //     expect(heading).toBeInTheDocument()

    //     // expect the document title to be "Characters | Marvel App"
    //     expect(document.title).toBe('Characters | Marvel App')

    //     // expect the character Thor to be in the document
    //     const thorElement = screen.getByText(characters[0].name);
    //     expect(thorElement).toBeInTheDocument();

    //     // expect the charater Captain America to be in the document
    //     const captainAmericaElement = screen.getByText(characters[1].name);
    //     expect(captainAmericaElement).toBeInTheDocument();
        
    //     // expect the number of characters to be in the document
    //     const numberOfCharactersElement = screen.getByText(`There are ${characters.length} characters`);

    //     expect(numberOfCharactersElement).toBeInTheDocument();

    //     // expect the orderBy select to have the value "name"
    //     const orderBySelect = screen.getByTestId('orderBy');
    //     expect(orderBySelect).toHaveValue('name');

    //     // expect the order select to have the value "asc"
    //     const orderSelect = screen.getByTestId('order');
    //     expect(orderSelect).toHaveValue('asc');

    //     // when
    //     act(() => {
    //         // change the order select to desc
    //         const orderSelect = screen.getByTestId('order');
    //         orderSelect.value = 'desc';
    //         orderSelect.dispatchEvent(new Event('change', { bubbles: true }));

    //         // then
    //         expect(orderSelect).toHaveValue('desc');

    //         // change the orderBy select to modified
    //         const orderBySelect = screen.getByTestId('orderBy');
    //         orderBySelect.value = 'modified';
    //         orderBySelect.dispatchEvent(new Event('change', { bubbles: true }));

    //         // then
    //         expect(orderBySelect).toHaveValue('modified');
    //     });
    // })
})