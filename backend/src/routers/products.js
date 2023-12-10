const express = require('express')

const ds = require("../datasource/datasource")

const routers = express.Router()

routers.get('/', function (req, res) {
    res.status(200).json(ds.fetchAllProducts())
})

routers.get('/:id', function (req, res) {

    const product = ds.fetchProductById(req.params.id)

    if (product != undefined)
        res.status(200).json(product)
    else
        res.status(404).send()
})

module.exports = routers