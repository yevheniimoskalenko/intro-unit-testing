const { sum, nativeNull } = require('./intro')
test('sum should  return sum of two values', () => {
expect(sum(2,5)).toBe(7)
expect(sum(2,5)).toEqual(7)
})

test('Sum should return value corrrect comparing to other', ()=>{
expect(sum(3,3)).toBeGreaterThan(5)
expect(sum(3,3)).toBeGreaterThanOrEqual(5)
expect(sum(3,3)).toBeLessThan(10)
expect(sum(3,3)).toBeLessThanOrEqual(6)
})
test('sum should sum 2 float values correctly',()=>{
expect(sum(0.3,0.6)).toBeCloseTo(0.9)
})

test('Native null should return ',()=>{
})