const express = require('express')
const app = express()
const porta = 3000

app.listen(porta, ()=>{
    console.log(`Porta do server ${porta}`)
    console.log('Para desligar o server: ctrl + c')
})
app.get('/',(req, res)=>{res.send('Home: Hello world!!!')})