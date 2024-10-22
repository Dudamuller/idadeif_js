function verificarIdade() {
    const DataNascimento = document.getElementById("DataNascimento").value;
    const nascimento = new Date(DataNascimento);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    const resultado = document.getElementById('resultado');

    if (idade < 18) {
        resultado.textContent = "Você é menor de idade";
    } else if (idade === 18) {
        resultado.textContent = "Você tem 18 anos!!!!!!!!!!";
    } else if (idade > 18 && idade < 60) {
        resultado.textContent = "Você é maior de idade e não tem 60 anos ainda";
    } else {
        resultado.textContent = "Você tem 60 anos ou mais";
    }
}