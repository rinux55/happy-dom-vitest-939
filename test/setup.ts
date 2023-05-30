import matchers from '@testing-library/jest-dom/matchers'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/vue'

afterEach(cleanup)
expect.extend(matchers)
