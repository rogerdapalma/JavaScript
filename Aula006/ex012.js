var agora = new Date() 
var hora = agora.getHours() //hora atual do cliente
console.log(`Atualmente são exatamente ${hora} Horas.`)
if (hora <12){
    console.log("Bom dia!")
} else if (hora <= 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}