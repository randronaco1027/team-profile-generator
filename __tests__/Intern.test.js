const Intern = require('../lib/Intern')

test('determine if school is string', () => {
    const intern = new Intern('Ray', 1, 'ray@email.com', 'Ohio State')
    expect(typeof (intern.getSchool())).toBe('string')
})

test('determine if role is intern', () => {
    const intern = new Intern('Ray', 1, 'ray@email.com', 'github.com/ray')
    expect(intern.getRole()).toBe('Intern')
})