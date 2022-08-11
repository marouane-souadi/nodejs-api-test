const {getAge} = require('./utils')

function User(data) {
    this.id = data.id
    this.full_name = `${data.first_name} ${data.last_name}`
    this.email = data.email
    this.age = getAge(data.birthday)
}

module.exports = {
    User
}