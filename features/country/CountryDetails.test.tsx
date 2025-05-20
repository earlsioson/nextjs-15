import canadaData from '../../test/mocks/canada.json';
import { render, screen } from '../../test/test-utils';
import CountryDetails from './CountryDetails';

describe('CountryDetails', () => {
    it('displays country details correctly', () => {
        const country = canadaData[0];

        render(<CountryDetails country={country} />);

        expect(screen.getByDisplayValue('Canada')).toBeInTheDocument();
        expect(screen.getByDisplayValue('+1')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Americas')).toBeInTheDocument();
    });
});