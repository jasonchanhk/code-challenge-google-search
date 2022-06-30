const express = require('express');
const router = express.Router();

const Result = require('../models/search')

router.get('/', (req, res) => {
    res.status(405).send()
})

router.get('/:keyword', (req, res) => {
    try{
        const selectedData = Result.findByKeyword(req.params.keyword)
        res.send(selectedData)
    }catch(err){
        res.status(404).send()
    }
})

module.exports = router
