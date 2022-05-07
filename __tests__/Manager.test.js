const Manager = require('../lib/Manager')

test('determine if role is manager', () => {
    const manager = new Manager()
    expect(manager.getRole()).toBe('Manager')
})