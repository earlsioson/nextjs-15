'use client'
import { Country } from '@/data/country/types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

interface Props {
    country: Country
}
export default function CountryDetails({ country }: Props) {
    return (
        <Container
            maxWidth="md"
        >
            <Stack
                direction="column"
                spacing={2}
                m={2}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gap: '1rem',
                        gridTemplateColumns: 'repeat(2, 1fr)'
                    }}
                >
                </Box>
                <TextField
                    label="Name"
                    fullWidth
                    name="name"
                    defaultValue={country.name.common}
                />
                <TextField
                    label="IDD"
                    fullWidth
                    name="idd"
                    defaultValue={country.idd.root}
                />
                <TextField
                    label="Region"
                    fullWidth
                    name="region"
                    defaultValue={country.region}
                />
            </Stack >
        </Container>
    );
}