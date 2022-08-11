const {getAge} = require('./utils')
const {User} = require('./models')

describe("Age function test", () => {
    test('Calculate age, current month after birthday', () => {
        const result = getAge('1983-01-15')

        expect(result).toBe(39);
    });

    test('Calculate age, current month before birthday', () => {
        const result = getAge('1983-10-15')

        expect(result).toBe(38);
    });
})

describe("User model Test", () => {
    const data = {
        id: 'A2',
        first_name: 'Marouane',
        last_name: 'Souadi',
        email: 'marouane@gmail.com',
        password: 'password',
        birthday: '1980-01-01',
    }
    test('Check if password is hidden', () => {
        const user = new User(data)
        expect(user.password).toBeUndefined();
    });

    test('Check if full name is correct', () => {
        const user = new User(data)
        expect(user.full_name).toBe('Marouane Souadi')
    })

})
