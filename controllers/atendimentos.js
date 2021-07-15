const Atendimento = require('../models/atendimento')

module.exports = app => {
    app.get('/atendimentos', (req) => {
        Atendimento.lista()
            .then(resultados => res.json(resultados))   
            .catch(erros => res.status(400).json(erros))
    })  

    app.get('/atendimentos/:id', (req, res) => { 
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
        res.send('OK')
    })

    app.post('./atendimentos', (req, res) => { 
        const atendimento = req.body
        
        Atendimento.adiciona(atendimento)
        .then(atendimentoCadastrado => 
            res.status(201).json(atendimentoCadastrado)
        )
        .catch(erro => res.status(400).json(erro))
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id) 
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atentimento.deleta(id, res)
    })

}    