//require packages
const express = require('express')
const cors = require('cors')

//require controller for function declarations
const ctrl = require('./controller')
const swapiCharacters = require('./httpOperations')

//create server instance
const app = express()
const port = 8080

//Top level middleware to parse to json to javascript
app.use(express.json())
app.use(cors())

//End points
app.get('/users', ctrl.getUsers)
app.get('/user/:id', ctrl.getUserByParamId)
app.get('/user', ctrl.getUserByQueryId)

app.post('/users', ctrl.createNewUser)

app.delete('/users/:id', ctrl.deleteUserByParamId)


//swapi
app.get('https://swapi.co/api/people:page', swapiCharacters.getSwapiCharacters)

//get server listening
app.listen(port, () => console.log(`Server running on port ${port}`))

