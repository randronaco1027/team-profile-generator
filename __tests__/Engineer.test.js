const Engineer = require('../lib/Engineer')

test('determine if github is string', () => {
    const engineer = new Engineer('Ray', 1, 'ray@email.com', 'github.com/ray')
    expect(typeof (engineer.getGithub())).toBe('string')
})

test('determine if role is engineer', () => {
    const engineer = new Engineer('Ray', 1, 'ray@email.com', 'github.com/ray')
    expect(engineer.getRole()).toBe('Engineer')
})