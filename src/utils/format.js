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

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

//exportando esses dados

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}