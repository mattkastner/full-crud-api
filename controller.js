const users = require('./data')

const getUsers = (req, res) => {
    res.status(200).send(users)
}

const getUserByParamId = (req, res) => {
    const {id} = req.params
    res.send(users.filter(e => e.id === +id))
}

const getUserByQueryId = (req, res) => {
    const {id} = req.query
    res.status(200).send(users.filter(e => +id === e.id)[0])

}

const createNewUser = (req, res) => {
    const newUser = {
        id: users.length +1,
        first_name: req.body.first_name || "",
        last_name: req.body.last_name || "",
        email: req.body.email || "",
        hobbies: req.body.hobbies || [],
        laptop: req.body.laptop || {}
    }
    users.push(newUser)
    res.status(200).send(users)
}

const deleteUserByParamId = (req, res) => {
    const {id} = req.params
    users = users.filter((user) => {
        return user.id !== +id
    })
    res.status(200).send(users)
}

module.exports = {
    getUsers,
    getUserByParamId,
    getUserByQueryId,
    createNewUser,
    deleteUserByParamId
}