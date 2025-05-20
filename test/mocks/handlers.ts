import { http, HttpResponse } from 'msw';
import canada from './canada.json';
import mexico from './mexico.json';

// Improved and more specific API route handling
export const handlers = [
    http.get('https://restcountries.com/v3.1/name/Canada', ({ params, request }) => {
        const url = new URL(request.url);
        const fullText = url.searchParams.get('fullText');

        if (fullText === 'true') {
            return HttpResponse.json(canada);
        }
        return HttpResponse.json(canada);
    }),

    http.get('https://restcountries.com/v3.1/name/Mexico', ({ params, request }) => {
        const url = new URL(request.url);
        const fullText = url.searchParams.get('fullText');

        if (fullText === 'true') {
            return HttpResponse.json(mexico);
        }
        return HttpResponse.json(mexico);
    })
];