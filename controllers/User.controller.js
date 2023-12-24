const { User } = require("../models/User.model")
const UserController = {
    getAll: async (req, res) => {
        try {
            const users = await User.find()
            res.send(users)
        } catch (error) {
            res.status(500).send("an error occured while getting users")
        }
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id
            const target = await User.findById(id)
            res.send(target)
        } catch (error) {
            res.send(`an error occured while getting item with id ${id}`)
        }
    },
    add: async (req, res) => {
        try {
            const { name, surname, age } = req.body
            const newUser = new User({
                name,
                surname,
                age,
                isDeleted: false
            })
            await newUser.save()
            res.status(201).send("new user created")

        } catch (error) {
            res.status(500).send("an error occured while creating new user")
        }
    },
    edit: async (req, res) => {

        try {
            const { id } = req.params
            const { name, surname, age } = req.body
            await User.findByIdAndUpdate(id, { name, surname, age })
            res.send("item updated")
        } catch (error) {
            res.status(500).send("an error occured while editing item")
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await User.findByIdAndDelete(id)
            res.status(203).send("item deleted")
        }
        catch (error) {
            res.status(500).send("an error occured while deleting item from users")
        }
    },


}
module.exports = { UserController }