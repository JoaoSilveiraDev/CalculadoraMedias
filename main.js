const medias = document.getElementById("medias")
const adicionar = document.getElementById("adicionar")
const array = document.getElementById("array").value
var listaString = []
var listaNumber = []
var pesosString = []
var pesosNumber = []
var media = []

adicionar.addEventListener("click", ()=>{
    listaString.push(document.getElementById("array").value)
    pesosString.push(document.getElementById("pesos").value)
    
})
medias.addEventListener("click", ()=>{
    listaString.forEach((element)=>{
        listaNumber.push(Number(element))
    })
    pesosString.forEach((peso)=>{
        pesosNumber.push(Number(peso))
    })
    for(let i = 0; i<listaNumber.length; i++){
        media.push(listaNumber[i] * pesosNumber[i])
    }
    var somaDenominador = 0
    media.forEach((denominador)=>{
        somaDenominador += denominador;
    })
    var somaDivisor = 0
    pesosNumber.forEach((divisor)=>{
        somaDivisor += divisor
    })
    ////////////////////////////////////////////////////////////////////////////
    if(somaDivisor!=pesosNumber.length){
        document.getElementById("resultado").value = `Sua média ponderada: ${somaDenominador/somaDivisor}`
    }else{
        document.getElementById("resultado").value = `Sua média aritmética: ${somaDenominador/somaDivisor}`
    }
    ////////////////////////////////////////////////////////////////////////////
    var flag = pesosNumber.length
    for(let i = 0; i<flag; i++){
        listaString.pop()
        listaNumber.pop()
        pesosString.pop()
        pesosNumber.pop()
        media.pop()
    }
})