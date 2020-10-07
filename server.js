const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const dicasGerais = require('./data-dg')
const dicasTorneio = require('./data-dt')
const { request } = require('express')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",
    {
        express: server,
        autoescape: false,
        noCache: true
    })


server.get("/", function (req, res) {
    const presentation = {
        title: "A que devo a honra?",
        desc: "“Quem procura acha”. Se está buscando dicas que te ajudarão a avançar de forma mais consciente no jogo e construir seu café dos sonhos, espero que ache mesmo! Fique à vontade para vir sempre."
    }

    return res.render("index", { presentation })

})


server.get("/dicas-gerais", function (req, res) {
    const id = req.query.id

    const recente = dicasGerais.find(function (dicaGeralRecente) {
        if (dicaGeralRecente.id == "dica1geral") {
            return true;
        } else {
            return res.send("Dica not found!")
        }
    })

    return res.render("dicas-gerais", { recente, dicasGerais })
})

server.get("/dicas-gerais-more", function (req, res) {
    const id = req.query.id

    const dicaGeral = dicasGerais.find(function (dicaGeral) {
        if (dicaGeral.id == id) {
            return true
        }
    })

    if (!dicaGeral) {
        return res.send("Dica not found!")
    }

    return res.render("dicas-gerais-more", { dicaGeral, dicasGerais })
})

server.get("/dicas-torneio", function (req, res) {
    const id = req.query.id

    const recente = dicasTorneio.find(function (dicaTorneioRecente) {
        if (dicaTorneioRecente.id == "dica1torneio") {
            return true;
        } else {
            return res.send("Dica not found!")
        }
    })

    return res.render("dicas-torneio", { recente, dicasTorneio })
})

server.get("/dicas-torneio-more", function (req, res) {
    const id = req.query.id

    const dicaTorneio = dicasTorneio.find(function (dicaTorneio) {
        if (dicaTorneio.id == id) {
            return true
        }
    })

    if (!dicaTorneio) {
        return res.send("Dica not found!")
    }

    return res.render("dicas-torneio-more", { dicaTorneio, dicasTorneio })
})


server.listen(5000, function () {
    console.log("running")
})