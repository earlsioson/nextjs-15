import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        root: __dirname,
        setupFiles: ['./vitest.setup.ts'],
        include: ['**/*.test.{ts,tsx}'], // Look for .test files directly beside components
        exclude: ['node_modules', '.next', 'out'],
        alias: {
            '@': resolve(__dirname, './')
        },
    },
})