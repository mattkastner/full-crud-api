const axios = require('axios')

const getSwapiCharacters = (req, res) => {
    const {page} = req.params
    let getSwapiPromise = axios.get(`https://swapi.co/api/people/?${page}=`)
    getSwapiPromise.then(response => {
        res.status(200).send(response.data.results)
    }).catch (error =>{
        res.status(500).send(error)
    })
}

module.exports = {
    getSwapiCharacters
}