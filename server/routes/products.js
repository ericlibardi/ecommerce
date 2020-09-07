const express = require('express')
const productModel = require('../model/productModel')
const router = express.Router()

router.get('/all',
    (req, res) => {
        productModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

module.exports = router