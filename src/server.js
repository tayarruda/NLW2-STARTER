const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "84999665855",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "84999665855",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Tayná Arruda", 
        avatar: "https://avatars0.githubusercontent.com/u/12829191?s=60&v=4",
        whatsapp: "84999665855",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",               
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",               
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]

//FUNCIONALIDADES
function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}
function pageLanding(res,res){
    return res.render("index.html")
}
function pageStudy(req,res){
    const filters = req.query //estou recebendo os dados pelo req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})//populando dados e enviando para o frontend
}
function pageGiveClasses(req,res){
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0 //pego as chaves do objeto e transformo em um array e verifico se o array nao esta vazio
    //se tiver dado, adicionar data a lista de proffys
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")//exibe a pagina de todos os profs
    }
    //se nao tiver dados exibo a pagina de cadastro de profs
    return res.render("give-classes.html", {subjects, weekdays})
}

//SERVIDOR
//pegando dependencia no projeto
const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use(express.static("public"))//configurando os arquivos estatitoc
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//START DO SERVIDOR
.listen(5500)