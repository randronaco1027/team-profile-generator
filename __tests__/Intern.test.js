const Intern = require('../lib/Intern')

// Tests if school provided is a string
test('determine if school is string', () => {
    const intern = new Intern('Ray', 1, 'ray@email.com', 'Ohio State')
    expect(typeof (intern.getSchool())).toBe('string')
})

// Nothing needs to be passed into Intern, this shows that it will always populate with Intern
test('determine if role is intern', () => {
    const intern = new Intern()
    expect(intern.getRole()).toBe('Intern')
})