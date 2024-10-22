function verificarIdade(){

    const idade = document.getElementById
    ('idade').value;
    const resultado = document.getElementById('resultado');

    if(idade >= 18){
        resultado.textContent = "Você é maior de idade";
    }

}