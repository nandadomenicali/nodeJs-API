const query = require('../infraestrutura/database/queries')

class Atendimento{
    adiciona(atendimento) {
        const sql  = 'INSERT INTO Atendimentos SET ?' 
        query()
    }

}

module.exports = new Atendimento()