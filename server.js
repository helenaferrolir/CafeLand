const express = require('express')
const server = express()

server.get("/", function (req, res) {
    return res.send("hi, baralho")
})

server.listen(5000, function () {
    console.log("running")
})