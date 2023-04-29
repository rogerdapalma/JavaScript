var agora = new Date()
var DiaSem = agora.getDay()
/*
  Dom = 0 
  Seg = 1
  Ter = 2
  Qua = 3
  Qui = 4
  Sex = 5 
  Sab = 6
*/

console.log(DiaSem)

switch(DiaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break    
    default:
        console.log('Dia não existe')
        break
} 