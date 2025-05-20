import { render, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import canadaData from '../../test/mocks/canada.json';
import mexicoData from '../../test/mocks/mexico.json';
import { server } from '../../test/mocks/server';
import Page from './page';

vi.stubEnv('API_BASE_URL', 'https://restcountries.com/v3.1/name');

describe('Country Page Component', () => {
    beforeEach(() => {
        server.resetHandlers();
    });

    it('fetches and displays Canada data correctly', async () => {
        server.use(
            http.get('https://restcountries.com/v3.1/name/Canada', ({ request }) => {
                const url = new URL(request.url);
                if (url.searchParams.get('fullText') === 'true') {
                    return HttpResponse.json(canadaData);
                }
                return HttpResponse.json([]);
            })
        );

        const params = Promise.resolve({ name: 'Canada' });

        render(await Page({ params }));

        await waitFor(() => {
            expect(screen.getByDisplayValue('Canada')).toBeInTheDocument();
            expect(screen.getByDisplayValue('+1')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Americas')).toBeInTheDocument();
        });
    });

    it('fetches and displays Mexico data correctly', async () => {
        server.use(
            http.get('https://restcountries.com/v3.1/name/Mexico', ({ request }) => {
                const url = new URL(request.url);
                if (url.searchParams.get('fullText') === 'true') {
                    return HttpResponse.json(mexicoData);
                }
                return HttpResponse.json([]);
            })
        );

        const params = Promise.resolve({ name: 'Mexico' });

        render(await Page({ params }));

        await waitFor(() => {
            expect(screen.getByDisplayValue('Mexico')).toBeInTheDocument();
            expect(screen.getByDisplayValue('+5')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Americas')).toBeInTheDocument();
        });
    });

    it('displays an error message when country data cannot be fetched', async () => {
        server.use(
            http.get('https://restcountries.com/v3.1/name/Unknown', () => {
                return new HttpResponse(null, { status: 404, statusText: 'Not Found' });
            })
        );

        const params = Promise.resolve({ name: 'Unknown' });
        render(await Page({ params }));

        expect(screen.getByText(/Failed to fetch country data: 404 Not Found/i)).toBeInTheDocument();
    });
});