const User = require('../model/user')

const login = (req, res) => {
    let data = {
        email: req.body.email,
        password: req.body.password
    }
    User.findByEmailAndPassword(data, (user) => {
        res.json({
            data: {
                message: `Welcome Back ${user.name}`,
                user: user,
                authCheck: true
            }
        })
    })
}

module.exports = {
    login
}