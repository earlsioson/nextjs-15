import theme from '@/features/site/theme';
import { ThemeProvider } from '@mui/material/styles';
import { render } from '@testing-library/react';
import React from 'react';

/**
 * Custom render function that wraps components with the MUI ThemeProvider
 * This ensures all components have access to the theme during testing
 */
function customRender(ui: React.ReactNode, options = {}) {
    return render(
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>,
        options
    );
}

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override the render method
export { customRender as render };
