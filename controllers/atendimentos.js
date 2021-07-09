const Atendimento = require('../models/atendimento')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => { 
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
        res.send('OK')
    })

    app.post('./atendimentos', (req, res) => {
        const atendimento = req.body
        
        Atendimento.adiciona(atendimento, res)
})

}   