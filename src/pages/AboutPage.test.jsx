// src/pages/AboutPage.test.jsx

import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
    test('sets the document title correctly', () => {
        render(<AboutPage />);
        expect(document.title).toBe('About | Marvel App');
    
        const headingElement = screen.getByRole('heading', { level: 2, name: 'About Us' });
        expect(headingElement).toBeInTheDocument();
    
        const paragraphElement = screen.getByText('We are a team of Marvel fans who love to create awesome apps!');
        expect(paragraphElement).toBeInTheDocument();
    });
});