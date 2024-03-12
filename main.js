const form = document.querySelector('#form')
const inputBeneficiario = document.querySelector('#input-beneficiario')
const inputConta = document.querySelector('#input-conta')
const inputValor = document.querySelector('#input-valor')
const res = document.querySelector('.res')


function validarNome(nomeCompleto){
    const nomeComarray = nomeCompleto.split(" ")
    return nomeComarray.length >= 2
}

form.addEventListener('submit', function(e){
    let formValido = false
    e.preventDefault();

    
    const mensagem = `A contia de R$:<b>${inputValor.value}</b> foi depositada na conta: <b>${inputConta.value}</b> do cliente: <b>${inputBeneficiario.value}</b>`  
    
    formValido = validarNome(inputBeneficiario.value) === false
    if(formValido){
        res.innerHTML ='O nome tem que estar completo'
        
    } else {
       
      res.innerHTML = `${mensagem}`

      inputBeneficiario.value = ''
      inputConta.value = ''
      inputValor.value = ''
    }
})




