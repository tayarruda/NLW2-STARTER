//procurar o botao 
document.querySelector("#add-time")
.addEventListener('click', cloneField)

//quando clicar no botao executar uma ação
function cloneField(){
    //clicou no botao duplica os campos

    //acho os campos que quero duplicar
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //limpo os campos antes de colocar na pagina
    //pego os campos que quero limpar
    const fields = newFieldContainer.querySelectorAll('input')
    //passo por eles limpando
    fields.forEach(function(field) {
        field.value = ""
    })


    //duplicou os campos->coloca na pagina
    //onde vou colocar
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}


