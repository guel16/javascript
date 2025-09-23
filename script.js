// Seleciona o botão pelo ID e adiciona o evento de clique
document.getElementById("btn").addEventListener("click", () => {
    console.log('Olá, como é seu nome?');
    let meunome = 'Miguel';
    console.log(meunome);

    // IDADE
    console.log('Qual é sua idade?');
    let SuaIdade = 16;
    console.log(SuaIdade);

    // NASCIMENTO
    console.log('Quando você nasceu?');
    let SeuAno = '2025';
    console.log(SeuAno);

    // CALCULANDO
    console.log('Faça o calculo:');
    let Calculo = (2025 - SuaIdade);
    console.log(Calculo);

    // COMBINAÇÃO
    console.log('Como é seu nome?');
    let frase = 'Meu nome é ' + meunome;
    console.log(frase);

    // IF simples
    if (SuaIdade >= 18){
        console.log('Você é maior de idade.');
    } else {
        console.log('Você é menor de idade.');
    }

    // Mensagem extra na tela só pra visual feedback
    alert(`Olá ${meunome}! Você tem ${SuaIdade} anos. Calculo: ${Calculo}`);
});
