import { expect, it, describe } from 'vitest'
import { render } from '@testing-library/vue'
import Page from './index.vue'

describe('Test App', () => {
    it.only('should render hidden elements correctly', () => {
        const { getByTestId } = render(Page)

        expect(getByTestId('hidden-element')).toBeVisible()
    })
})
