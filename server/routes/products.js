const express = require('express')
const productModel = require('../model/productModel')
const router = express.Router()

router.post('/', (req, res) => {
    const newProduct = new productModel({
        title: req.body.title,
        price: req.body.price,
        size: req.body.size,
        image: req.body.image,
        description: req.body.description,
        category: req.body.category
    })
    newProduct.save()
      .then(product => {
      res.send(product)
      })
      .catch(err => {
      res.status(500).send("Server error" + err)}) 
});

router.get('/all',
    (req, res) => {
        productModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

module.exports = router