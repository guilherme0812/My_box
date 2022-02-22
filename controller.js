const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
let user = models.User;
let tracking = models.Tracking;
let product = models.Product;


app.post('/login', async (req, res) => {
  let response = await user.findOne({
    where: {name: req.body.name, password: req.body.password}
  })
  if (response === null) {
    res.send(JSON.stringify('error'))
  } else {
    res.send(response);
  }
})

app.post('/verifyPass', async (req, res) => {
  let response = await user.findOne({
    where: {id: req.body.id, password:req.body.senhaAntiga}
  })
  if (response === null) {
    res.send(JSON.stringify("A senha antiga não confere."))
  } else {
     // Verificar se as senhas foram digitadas iguais
     if (req.body.novaSenha === req.body.confNovaSenha) {
       // Atualizando password no banco de dados
       response.password = req.body.novaSenha
       response.save()
       res.send(JSON.stringify('Senha atualizada com sucesso!'))
     } else {
       res.send(JSON.stringify('As senhas nãp conferem'))
     }
  }
})

// Cadastrar produto no banco de dados
app.post('/create', async (req, res) => {
    let trackingId = ''
    let create = await tracking.create({
      code: req.body.code,
      local: req.body.local, 
      userId: req.body.userId,
      createdAt: new Date(), 
      updatedAt: new Date()
   }).then( (response)=>{
     trackingId += response.id
   })

   await product.create({
     trackingId: trackingId,
     name: req.body.product
   })
})

let port = process.env.PORT || 3000;
app.listen(port, (req,res)=> {
    console.log("Servidor rodando")
})