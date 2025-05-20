import { vi } from 'vitest';
import { fireEvent, render, screen } from '../../test/test-utils';
import CountrySelect from './CountrySelect';

const mockRouter = {
    push: vi.fn(),
};

vi.mock('next/navigation', () => ({
    useRouter: () => mockRouter,
}));

describe('CountrySelect', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders country radio buttons', () => {
        render(<CountrySelect />);

        expect(screen.getByLabelText('Canada')).toBeInTheDocument();
        expect(screen.getByLabelText('Mexico')).toBeInTheDocument();
    });

    it('navigates to the selected country page when radio button is clicked', () => {
        render(<CountrySelect />);

        fireEvent.click(screen.getByLabelText('Canada'));

        expect(mockRouter.push).toHaveBeenCalledWith('Canada');
    });
});