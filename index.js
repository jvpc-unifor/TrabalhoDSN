const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site!</h1>");
})

//rota do cadastro de produtos
app.get("/carro", function(req,res){
    res.send("<h1>Lista de carros!</h1>");
})

app.get("/moto", function(req,res){
    res.send("<h1>Lista de motos!</h1>");
})

app.get("/caminhao", function(req,res){
    res.send("<h1>Lista de caminhão!</h1>");
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})

