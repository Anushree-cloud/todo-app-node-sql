const User = require('../model/user')

const login = (req, res) => {
    User.findAll((users) => {
        let findUser = users.find((user) => {
            return (user.email === req.body.email) && (user.password === req.body.password) 
        })
        if(users){
            res.json({
                data: {
                    message:`Welcome ${findUser.name}`,
                    user: findUser,
                    authCheck: true
                }
            })
        }
        else{
            res.json({
                data: {
                    message:`Invalid Username or Password.`,
                    authCheck: false
                }
            })
        }
    })
}

module.exports = {
    login
}