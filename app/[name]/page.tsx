import { Country } from '@/data/country/types';
import CountryDetails from '@/features/country/CountryDetails';

export default async function Page({
    params,
}: {
    params: Promise<{ name: string }>
}) {
    const { name } = await params;
    const resp = await fetch(`${process.env.API_BASE_URL}/${name}?fullText=true`);
    const country: Country[] = await resp.json();
    return (
        <CountryDetails country={country[0]} />
    );
}