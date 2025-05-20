import { http, HttpResponse } from 'msw';
import canada from './canada.json';
import mexico from './mexico.json';

export const handlers = [
    http.get('https://restcountries.com/v3.1/name/Canada?fullText=true', ({ params }) => {
        const name = params.name;

        if (name === 'Canada') {
            return HttpResponse.json({
                ...canada[0]
            });
        }
    }),
    http.get('https://restcountries.com/v3.1/name/Mexico?fullText=true', ({ params }) => {
        const name = params.name;

        if (name === 'Mexico') {
            return HttpResponse.json({
                ...mexico[0]
            });
        }
    })
];