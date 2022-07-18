const express = require('express');
const routes = require('./routes')

const app = express()
const port = 3500

routes(app)

//está ouvindo e se está funcionando
app.listen(port, () => 
    console.log(`servidor está rodando na porta ${port}`)
    )

module.exports = app


