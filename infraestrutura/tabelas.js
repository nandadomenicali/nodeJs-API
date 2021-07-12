class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
        this.criarPets()

    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(50), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY (id))'

        this.conexao.query(sql, (erro)=>{
            if(erro) {
                console.log(erro)
            }else {
                console.log('tabela criada com sucesso')                                 
            }

        })   
    }

    criarPets(){
        const query = 'CREATE TABLE IF NOT EXIST Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar (200), PRIMARY KEY (id))'

        this.conexao.query(query, () => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Pets criada')
            }
        })
    } 

}


module.exports = new tabelas