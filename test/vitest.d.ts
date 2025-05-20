import 'vitest';

// Add the matchers to Vitest's interfaces
interface CustomMatchers<R = unknown> {
    toBeInTheDocument(): R;
    toBeVisible(): R;
    toHaveTextContent(text: string | RegExp): R;
    toHaveValue(value: string | string[]): R;
    toBeDisabled(): R;
    toBeEnabled(): R;
    toBeChecked(): R;
}

declare module 'vitest' {
    interface Assertion<T = any> extends CustomMatchers<T> { }
    interface AsymmetricMatchersContaining extends CustomMatchers { }
}