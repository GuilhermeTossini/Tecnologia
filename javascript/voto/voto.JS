function calcular(){
    var voto = window.document.getElementById('voto')
 
 
    var resp = window.document.getElementById('resp')
    var idade = Number(voto.value)
 
    if (idade < 16) {
        resp.innerText = "Não pode Votar!"
    }
 
    else if (idade < 18 ||  idade > 70){
        resp.innerHTML = "Voto facultativo"
    }
 
    else {
        resp.innerHTML = "Voto obrigatório"
    }
 
    }