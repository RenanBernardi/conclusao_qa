const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000 //porta padrão
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando Professor!' }));
 
// GET /aplicarDesconto
router.get('/icms/:valor', (req, res) => {
    const valor = parseInt(req.params.valor)
    //const desconto = parseInt(req.params.desconto)
    res.json({icms: (valor * 0.18)})
})
 
app.use('/', router)
 
if (require.main === module){
    //inicia o servidor
    app.listen(port)
    console.log('API funcionando Projessor!')
}
 
module.exports = app