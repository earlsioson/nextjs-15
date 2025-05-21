import { vi } from 'vitest';
import { fireEvent, render, screen } from '../../test/test-utils';
import CountrySelect from './CountrySelect';

// Mock object for the router
const mockRouter = {
    push: vi.fn(),
};

// Mock useRouter
vi.mock('next/navigation', () => ({
    useRouter: () => mockRouter,
}));

describe('CountrySelect', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        vi.clearAllMocks();
    });

    it('renders country radio buttons', () => {
        render(<CountrySelect />);

        // Check if the radio buttons are rendered
        // These will throw an error if not found, so no assertion needed
        screen.getByLabelText('Canada');
        screen.getByLabelText('Mexico');
    });

    it('navigates to the selected country page when radio button is clicked', () => {
        render(<CountrySelect />);

        // Select a country
        fireEvent.click(screen.getByLabelText('Canada'));

        // Verify navigation was triggered with correct path
        expect(mockRouter.push).toHaveBeenCalledWith('Canada');
    });
});