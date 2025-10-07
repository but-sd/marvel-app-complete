// src/pages/ContactPage.test.jsx

import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
    test('sets the document title correctly', () => {
        render(<ContactPage />);
        expect(document.title).toBe('Contact | Marvel App');
    
        const headingElement = screen.getByRole('heading', { level: 2, name: 'Contact Us' });
        expect(headingElement).toBeInTheDocument();
    
        const paragraphElement = screen.getByText(/Feel free to contact us at/i);
        expect(paragraphElement).toBeInTheDocument();
        const linkElement = screen.getByRole('link', { name: 'marvelApp@gmail.com' });
        expect(linkElement).toHaveAttribute('href', 'mailto:marvelApp@gmail.com');
    });
});