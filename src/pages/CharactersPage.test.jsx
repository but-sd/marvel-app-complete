import { expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import CharactersPage from './CharactersPage'

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