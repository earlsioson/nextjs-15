import canadaData from '../../test/mocks/canada.json';
import { render, screen } from '../../test/test-utils';
import CountryDetails from './CountryDetails';

describe('CountryDetails', () => {
    it('displays country details correctly', () => {
        // Use mock data from our existing mocks
        const country = canadaData[0];

        render(<CountryDetails country={country} />);

        // Check if the country details are displayed correctly
        // These will throw if not found, so no explicit assertions needed
        screen.getByDisplayValue('Canada');
        screen.getByDisplayValue('+1');
        screen.getByDisplayValue('Americas');
    });
});