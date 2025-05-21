import { render, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import canadaData from '../../test/mocks/canada.json';
import mexicoData from '../../test/mocks/mexico.json';
import { server } from '../../test/mocks/server';
import Page from './page';

// Mock the environment variable
vi.stubEnv('API_BASE_URL', 'https://restcountries.com/v3.1/name');

describe('Country Page Component', () => {
    beforeEach(() => {
        // Reset handlers before each test to ensure clean slate
        server.resetHandlers();
    });

    it('fetches and displays Canada data correctly', async () => {
        // Mock the specific API call for this test
        server.use(
            http.get('https://restcountries.com/v3.1/name/Canada', ({ request }) => {
                const url = new URL(request.url);
                if (url.searchParams.get('fullText') === 'true') {
                    return HttpResponse.json(canadaData);
                }
                return HttpResponse.json([]);
            })
        );

        // Create resolved params to simulate the Next.js router
        const params = Promise.resolve({ name: 'Canada' });

        // Render the page component
        render(await Page({ params }));

        // Verify correct data is displayed
        await waitFor(() => {
            // These will throw if not found, so no explicit assertions needed
            screen.getByDisplayValue('Canada');
            screen.getByDisplayValue('+1');
            screen.getByDisplayValue('Americas');
        });
    });

    it('fetches and displays Mexico data correctly', async () => {
        // Mock the specific API call for this test
        server.use(
            http.get('https://restcountries.com/v3.1/name/Mexico', ({ request }) => {
                const url = new URL(request.url);
                if (url.searchParams.get('fullText') === 'true') {
                    return HttpResponse.json(mexicoData);
                }
                return HttpResponse.json([]);
            })
        );

        // Create resolved params to simulate the Next.js router
        const params = Promise.resolve({ name: 'Mexico' });

        // Render the page component
        render(await Page({ params }));

        // Verify correct data is displayed
        await waitFor(() => {
            // These will throw if not found, so no explicit assertions needed
            screen.getByDisplayValue('Mexico');
            screen.getByDisplayValue('+5');
            screen.getByDisplayValue('Americas');
        });
    });

    it('displays an error message when country data cannot be fetched', async () => {
        // Mock an API error response
        server.use(
            http.get('https://restcountries.com/v3.1/name/Unknown', () => {
                return new HttpResponse(null, { status: 404, statusText: 'Not Found' });
            })
        );

        const params = Promise.resolve({ name: 'Unknown' });
        render(await Page({ params }));

        // Check that the error alert is displayed
        const errorElement = screen.getByText(/Failed to fetch country data: 404 Not Found/i);
        expect(errorElement).toBeDefined();
    });
});