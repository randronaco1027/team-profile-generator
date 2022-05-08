const Manager = require('../lib/Manager')

// Nothing needs to be passed into Manager, this shows that it will always populate with Manager
test('determine if role is manager', () => {
    const manager = new Manager()
    expect(manager.getRole()).toBe('Manager')
})