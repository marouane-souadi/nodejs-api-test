const express = require('express')
const {UserRepository} = require('./repositories')

const router = express.Router()

router.get('/users', (req, res) => {
    const users = UserRepository.all()
    res.json(users)
})

router.get('/users/:user_id', (req, res) => {
    const user_id = req.params['user_id']
    const user = UserRepository.find(user_id)
    if (user) {
        res.send(user)
    } else {
        res.status(404).send({
            message: 'not found'
        })
    }

})

router.post('/users', (req, res) => {
    const bodyData = req.body
    const exist = UserRepository.findByEmail(bodyData.email)
    if (exist) {
        res.status(400).send({
            message: 'this email already exist'
        })

    } else {
        const user = UserRepository.add(bodyData)
        res.send(user)
    }
})

router.put('/users/:user_id', (req, res) => {
    const userId = req.params['user_id']
    let user = UserRepository.find(userId)
    if (!user) {
        res.status(404).send({
            message: 'not found'
        })
    }
    const bodyData = req.body
    user = UserRepository.update({...bodyData, id: userId})
    res.send(user)
})

router.delete('/users/:user_id', (req, res) => {
    const userId = req.params['user_id']
    const user = UserRepository.find(userId)
    if (!user) {
        res.status(404).send({
            message: 'not found'}
        )
    } else {
        UserRepository.delete(userId)
        res.send({
            id: userId
        })
    }
})



module.exports = router