console.log ('Olá, como é seu nome?')
let meunome = 'Miguel';
console.log (meunome)
    // IDADE //
    console.log ('Qual é sua idade?')
    let SuaIdade = 16;
    console.log (SuaIdade)
    // NASCIMENTO //
    console.log ('Quando você nasceu?')
    let SeuAno = '2025';
    console.log (SeuAno)
    // CALCULANDO //
    console.log ('Faça o calculo : ')
    let Calculo = (2025 - SuaIdade);
    console.log (Calculo)
    // /COMBINAÇÃO //
    console.log ('Como é seu nome? ')
    let frase = 'Meu nome é ' + meunome;
    console.log (frase)
    // Usando IF pela primeira vez //(
    if (SuaIdade >=18){
        console.log('Você é maior de idade');
    }

    // IF com ELSE //
  if (SuaIdade >=18)
    {
        console.log('Você é maior de idade.');
    }
    else{
        console.log('Você é menor de idade.');

    }

//Interligar com HTML
document.getElementById("btn").addEventListener("click", () => {
  console.log("Botão foi clicado!");
  alert("JS funcionando no clique!");
});
