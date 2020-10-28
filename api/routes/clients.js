const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {
    let result = null
    try {
        result = await axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
        console.log('data', result.data)
    } catch (error) {
        console.log('Error while fetching data', error)
    }

    res.status(200).json({
        message: 'Handling GET requests to /clients',
        result: result.data
    })
})

router.get('/:id', async (req, res, next) => {
    let result = null
    try {
        result = await axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
        console.log('data', result.data)
        const clientId = result.data.clients.filter(client => client.id === req.params.id)
        res.status(200).json({
            message: 'Handling GET requests to /clients',
            result: clientId
        })
    } catch (error) {
        console.log('Error while fetching data', error)
    }
})

router.get('/name/:userName', async (req, res, next) => {
    let result = null
    try {
        result = await axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
        console.log('data', result.data)
        const username = result.data.clients.filter(user => user.name === req.params.userName)
        res.status(200).json({
            message: 'Handling GET requests to /clients',
            result: username
        })
    } catch (error) {
        console.log('Error while fetching data', error)
    }
})

module.exports = router;