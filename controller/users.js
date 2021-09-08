const Users = require('../model/users')


//get all Users
const getAllUsers = (req, res) => {
    Users.findAll((users) => {
        res.json({
            data: {
                message: "All Users Fetched Successfully🎉",
                users: users
            }
        })
    })
}

//get a single User
const getSingleUser = (req, res) => {
    let id = req.params.id
    Users.findById(id, (user) => {
        res.json({
            data: {
                message: `User with Id: ${id} fetched successfully...`,
                user: user
            }
        })
    })
}

//post a User
const addUser = (req, res) => {
    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    Users.save(newUser, () => {
        res.json({
            data: {
                message: 'New User Added!',
                user: newUser
            }
        })
    })
}

//update a User
const updateUser = (req, res) => {
    let id = req.params.id
    Users.findById(id, (User) => {
        let updatedUser = {
            name: req.body.name ? req.body.name : User.name,
            email: req.body.email ? req.body.email : User.email,
            password: req.body.password ? req.body.password : User.password
        }
        Users.updateAndSave(updatedUser, id, () => {
            res.json({
                data: {
                    message: `User with Id: ${id} updated successfully...`,
                    user: updatedUser
                }
            })
        })
    })
}

//delete a User
const deleteUser = (req, res) => {
    let id = req.params.id
    Users.deleteAndSave(id , () => {
        Users.findAll((users) => {
            res.json({
                data: {
                    message: `User Deleted with id: ${id}`,
                    users: users
                }
            })
        })
    })
}

module.exports = {
    getAllUsers, getSingleUser, addUser, updateUser, deleteUser
}