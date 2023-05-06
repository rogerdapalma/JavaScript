function vereficar(){
    //window.alert('funcionou!')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    //var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verefique as informações e tente novamente ')
    } else {
        //window.alert('tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade caulculada : ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'FOTOHomem_C.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'FOTOHomem_J.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'FOTOHomem_A.png')
            } else {
                //idoso
                img.setAttribute('src', 'FOTOHomem_V.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'FOTOMulher_C.png')
                } else if (idade < 21){
                    //jovem
                    img.setAttribute('src', 'FOTOMulher_J.png')
                } else if (idade < 50){
                    //adulto
                    img.setAttribute('src', 'FOTOMulher_A.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'FOTOMulher_V.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} com ${idade} anos.`
        res.appendChild(img)
        

    }
}