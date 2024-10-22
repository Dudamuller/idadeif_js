function verificarNumero(){
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    switch (numero){
        case 1: 
        resultado.textContent = "Você escolheu o número 1";
        break
        case 2: 
        resultado.textContent = "Você escolheu o número 2";
        break
        case 3: 
        resultado.textContent = "Você escolheu o número 3";
        break
        case 4: 
        resultado.textContent = "Você escolheu o número 4";
        break
        case 5: 
        resultado.textContent = "Você escolheu o número 5";
        break
    }
}