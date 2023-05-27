let num = [5, 8, 2, 9, 3]
num.push(1)//add num 
num.sort()//elemento que ordena
console.log(num)
console.log(`Vetor tem ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}
