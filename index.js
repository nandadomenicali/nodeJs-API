const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(2000, () => console.log('servidor rodando na porta 2000'))
