import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
    test: {
        css: true,
        environment: 'nuxt',
        setupFiles: ['test/setup.ts']
    }
})
