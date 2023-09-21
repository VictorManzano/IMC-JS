const form = document.querySelector('form')

const pesoInput = document.querySelector('#peso')

const alturaInput = document.querySelector('#altura')

const resultado = document.querySelector("#resultado")


form.onsubmit = submit


function submit(event) {
    event.preventDefault()

    const peso = pesoInput.value
    const altura = alturaInput.value


    const resultIMC = IMC(peso, altura)

    resultado.innerHTML = resultIMC

    
}


function IMC(peso, altura) {
   return (peso / ((altura / 100) ** 2)).toFixed(2)
}


