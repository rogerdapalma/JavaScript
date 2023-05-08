function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        //alert('tudo ok por aqui!!!') //testando
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value) //inicio
        let f = Number(fim.value) //fim
        let p = Number(passo.value) //passo
        if(p <= 0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}  \u{25B6}`//U+25B6//emoji(site unicode)
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}  \u{25B6}`
            }
        }
        res.innerHTML += `\u{1F3C1}`//U+1F3C1 //emoji
    }
}