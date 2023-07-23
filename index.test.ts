import { expect, test } from 'vitest'

import createNoise from './src'

test('noise-2d', () => {
  const getValue = createNoise()
  const value = getValue(1, 1)
  expect(value).toBeTypeOf('number')
  expect(value).toBeLessThan(1)
  expect(value).toBeGreaterThan(-1)
})
