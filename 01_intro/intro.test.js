const { sum, nativeNull } = require('./intro')
test('sum should  return sum of two values', () => {
expect(sum(2,5)).toBe(7)
})