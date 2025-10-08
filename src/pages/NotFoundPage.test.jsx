// src/pages/NotFoundPage.test.jsx

import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
    test('sets the document title correctly', () => {
        render(<NotFoundPage />);
        expect(document.title).toBe('404 Not Found | Marvel App');
    
        const headingElement = screen.getByRole('heading', { level: 2, name: '404 - Page Not Found' });
        expect(headingElement).toBeInTheDocument();
    
        const paragraphElement = screen.getByText('The page you are looking for does not exist.');
        expect(paragraphElement).toBeInTheDocument();
    });
});