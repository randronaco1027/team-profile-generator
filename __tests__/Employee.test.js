const Employee = require('../lib/Employee')

//Determines if name entered is a string
test('gets name of employee', () => {
    const employee = new Employee('Ray', 1, 'ray@email.com')
    expect(typeof (employee.getName())).toBe('string')
})

//Determines if id entered is a number
test('gets id of employee', () => {
    const employee = new Employee('Ray', 1, 'ray@email.com')
    expect(typeof (employee.getId())).toBe('number')
})

//Determines if email entered is string
test('gets email of employee', () => {
    const employee = new Employee('Ray', 1, 'ray@email.com')
    expect(typeof (employee.getEmail())).toBe('string')
})

// Always returns employee because it was overwritten
test('gets role of employee', () => {
    const employee = new Employee();
    expect(employee.getRole()).toEqual("Employee");
}); 