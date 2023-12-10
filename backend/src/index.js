const express = require('express')

const productsRouters = require("./routers/products")

const apiServer = express()

apiServer.use('/products',productsRouters)

apiServer.get('/',function(req,res){
    res.send('5ara 3leek')
})

apiServer.listen(3000,() => console.log("api server started"))



//console.log("hello yastaaa");