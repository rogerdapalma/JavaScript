let amigo = {nome: 'Roger', 
sexo:'M', 
peso: 88.2,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}} //{}objeto //[] array


amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
