import { Country } from '@/data/country/types';
import CountryDetails from '@/features/country/CountryDetails';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';

export default async function Page({
    params,
}: {
    params: Promise<{ name: string }>
}) {
    try {
        const { name } = await params;
        // Use the environment variable or default to the API URL
        const apiBaseUrl = process.env.API_BASE_URL || 'https://restcountries.com/v3.1/name';
        const resp = await fetch(`${apiBaseUrl}/${name}?fullText=true`);

        if (!resp.ok) {
            throw new Error(`Failed to fetch country data: ${resp.status} ${resp.statusText}`);
        }

        const country: Country[] = await resp.json();
        return (
            <CountryDetails country={country[0]} />
        );
    } catch (error) {
        return (
            <Container maxWidth="md">
                <Alert severity="error" sx={{ mt: 2 }}>
                    {error instanceof Error ? error.message : 'An error occurred while fetching country data'}
                </Alert>
            </Container>
        );
    }
}