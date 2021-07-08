module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Servidor rodando'))

    app.post('./atendimentos', (req, res) => {
        
        res.send('POST')
})

}