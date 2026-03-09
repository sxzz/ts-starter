import { expect, test } from 'vitest'
import { foo } from '../src/index.ts'

test('simple', () => {
  expect(foo).toBe('foo')
})
