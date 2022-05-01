const sum = require('../lib/Employee')

test('should return 3', () => {
    expect(sum(1,2)).toBe(3)
}) 

test('should return 5', () => {
    expect(sum(1,4)).toBe(5)
}) 