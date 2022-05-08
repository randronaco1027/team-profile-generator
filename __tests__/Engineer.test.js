const Engineer = require('../lib/Engineer')

// Tests if GitHub username is a string
test('determine if github is string', () => {
    const engineer = new Engineer('Ray', 1, 'ray@email.com', 'github.com/ray')
    expect(typeof (engineer.getGithub())).toBe('string')
})

// Nothing needs to be passed into Engineer, this shows that it will always populate with Engineer
test('determine if role is engineer', () => {
    const engineer = new Engineer()
    expect(engineer.getRole()).toBe('Engineer')
})