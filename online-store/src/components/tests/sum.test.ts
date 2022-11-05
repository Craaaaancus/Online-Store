import { sum } from '../controller/sum'

test('Sum', () => {
  expect(sum(3,4)).toBe(7)
})
