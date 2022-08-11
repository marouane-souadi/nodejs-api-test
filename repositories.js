const {loadDbData, saveDbData} = require('./db')
const {User} = require('./models')

let currentId = 11

const UserRepository = {
    all: () => {
        return loadDbData().map(user => new User(user))
    },

    find: id => {
        const users = loadDbData()
        const user = users.find( user => user.id === id)
        if (user) {
            return new User(user)
        }
    },

    findByEmail: (email) => {
        const users = loadDbData()
        return users.find(u => u.email === email)
    },

    add: (user) => {
        const users = loadDbData()
        user.id = `A${currentId}`
        saveDbData([...users, user])
        currentId++
        return new User(user)
    },

    update: (user) => {
        const users = loadDbData()
        const index = users.findIndex(u => u.id === user.id)
        if (index !== -1) {
            users[index] = {...users[index], ...user}
            saveDbData(users)
            return new User(users[index])
        }
    },

    delete: (userId) => {
        const users = loadDbData()
        const filteredUsers = users.filter(u => u.id !== userId)
        saveDbData(filteredUsers)
    }
}

module.exports = {
    UserRepository,
}