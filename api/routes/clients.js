const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /clients'
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /clients'
    })
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if (id === 'special') {
        res.status(200).json({
            message: "You discovered the speical ID",
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Client'
    })
})

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Client'
    })
})

module.exports = router;